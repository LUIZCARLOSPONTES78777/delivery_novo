import { prisma } from "../lib/prisma.js";

export const createOrderService = async (cliente: any, itens: any[]) => {
   return await prisma.$transaction(async (tx) => {
      let totalGeral = 0;

      // 1. Criar o Pedido (Cabeçalho)
      const pedido = await tx.pedido.create({
         data: {
            nome: cliente.nome,
            endereco: cliente.endereco,
            telefone: cliente.telefone,
            cidade: cliente.cidade,
            estado: cliente.estado,
            cep: cliente.cep,
            total: 0, // Atualizaremos após calcular os itens
            status: "PENDENTE"
         }
      });

      // 2. Processar Itens e Calcular Total Real
      for (const item of itens) {
         const produto = await tx.product.findUnique({
            where: { id: item.productId }
         });

         if (!produto) throw new Error(`Produto ${item.productId} não encontrado.`);

         const subtotal = Number(produto.preco) * item.quantidade;
         totalGeral += subtotal;

         await tx.itemPedido.create({
            data: {
               pedidoId: pedido.id,
               productId: item.productId,
               quantidade: item.quantidade,
               preco: produto.preco,
               subtotal: subtotal
            }
         });
      }

      // 3. Atualizar o total final do pedido
      return await tx.pedido.update({
         where: { id: pedido.id },
         data: { total: totalGeral }
      });
   });
};