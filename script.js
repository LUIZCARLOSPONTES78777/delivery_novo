/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           SEED SCRIPT — Cardápio Delivery Completo          ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * ⚠️  CONFIGURAÇÃO OBRIGATÓRIA ANTES DE RODAR:
 *   1. Substitua BASE_URL pela URL real da sua API (ex: http://localhost:3000/api/produtos)
 *   2. Substitua cada UUID em CAT{} pelo ID real da categoria no seu banco
 *   3. Se sua API exige autenticação, adicione o header Authorization
 * 
 * ▶  Rodar: node seed.js
 */

const BASE_URL = "http://localhost:3333/products";

const HEADERS = {
   "Content-Type": "application/json",
};

// UUIDs das categorias (USE OS SEUS)
const CAT = {
   pizzas: "22793d21-e8b8-4b0d-983a-d8b814f436ab",
   acai: "373f98a0-fc4d-4d3a-b969-bf061c2e8fd3",
   bebidas: "f1d3fb86-5677-4d47-8ced-756e6907c7e0",
   doces: "0632f8f1-2314-4918-8617-70890d8542b6",
   marmitas: "0d1de7f1-7b35-4af7-bd53-a48fd868d061",
   lanches: "5c99e0e1-99ec-4e69-9057-37b925374920",
   porcoes: "26d95472-6a16-4d15-9c3e-fb7b223487a9",
};

const img = (cat, nome) =>
   `https://placehold.co/600x400/1e293b/f8fafc?text=${encodeURIComponent(`${cat}: ${nome}`)}`;

// ═══════════════════════════════════════════════════════════════════════════
// 🍕 PIZZAS (53)
// ═══════════════════════════════════════════════════════════════════════════
const pizzas = [
   { nome: "Calabresa", descricao: "Molho de tomate fresco, mussarela de búfala, rodelas de calabresa defumada e cebola caramelizada. Finalizada com orégano italiano.", preco: 39.90, imageUrl: img("Pizza", "Calabresa"), categoryId: CAT.pizzas },
   { nome: "Margherita", descricao: "Clássica italiana: molho de tomate San Marzano, mussarela fior di latte, manjericão fresco e azeite extravirgem.", preco: 37.90, imageUrl: img("Pizza", "Margherita"), categoryId: CAT.pizzas },
   { nome: "Quatro Queijos", descricao: "Cremosa combinação de mussarela, catupiry, gorgonzola e parmesão ralado na hora sobre um leve molho branco.", preco: 44.90, imageUrl: img("Pizza", "4 Queijos"), categoryId: CAT.pizzas },
   { nome: "Frango com Catupiry", descricao: "Peito de frango desfiado e temperado, catupiry original, milho verde e uma pitada de salsinha.", preco: 41.90, imageUrl: img("Pizza", "Frango Catupiry"), categoryId: CAT.pizzas },
   { nome: "Portuguesa", descricao: "Presunto magro, ovos cozidos, cebola roxa, azeitona preta, ervilha e mussarela derretida.", preco: 42.90, imageUrl: img("Pizza", "Portuguesa"), categoryId: CAT.pizzas },
   { nome: "Pepperoni", descricao: "Fatias generosas de pepperoni importado, mussarela e molho de tomate levemente apimentado.", preco: 46.90, imageUrl: img("Pizza", "Pepperoni"), categoryId: CAT.pizzas },
   { nome: "Napolitana", descricao: "Molho de tomate, mussarela, rodelas de tomate italiano, alcaparras e orégano.", preco: 38.90, imageUrl: img("Pizza", "Napolitana"), categoryId: CAT.pizzas },
   { nome: "Atum com Cebola", descricao: "Atum sólido em lascas, cebola roxa em conserva, azeitonas verdes e mussarela.", preco: 43.90, imageUrl: img("Pizza", "Atum Cebola"), categoryId: CAT.pizzas },
   { nome: "Brócolis com Alho", descricao: "Brócolis refogado no azeite e alho dourado, mussarela e lascas de parmesão.", preco: 39.90, imageUrl: img("Pizza", "Brócolis Alho"), categoryId: CAT.pizzas },
   { nome: "Frango com Bacon", descricao: "Frango desfiado, tiras de bacon crocante, catupiry e milho.", preco: 44.90, imageUrl: img("Pizza", "Frango Bacon"), categoryId: CAT.pizzas },
   { nome: "Strogonoff de Frango", descricao: "Strogonoff cremoso de frango com champignon, batata palha crocante e mussarela gratinada.", preco: 48.90, imageUrl: img("Pizza", "Strogonoff"), categoryId: CAT.pizzas },
   { nome: "Camarão ao Alho", descricao: "Camarões médios refogados no azeite, alho e salsinha, com catupiry e mussarela.", preco: 58.90, imageUrl: img("Pizza", "Camarão Alho"), categoryId: CAT.pizzas },
   { nome: "Salmão com Cream Cheese", descricao: "Salmão defumado em lascas, cream cheese, alcaparras e cebola roxa sobre molho branco.", preco: 62.90, imageUrl: img("Pizza", "Salmão Cream Cheese"), categoryId: CAT.pizzas },
   { nome: "Toscana", descricao: "Linguiça toscana artesanal, pimentão vermelho, cebola e mussarela.", preco: 44.90, imageUrl: img("Pizza", "Toscana"), categoryId: CAT.pizzas },
   { nome: "Mexicana", descricao: "Carne moída temperada, jalapeño, milho, pimentão e molho de tomate picante.", preco: 46.90, imageUrl: img("Pizza", "Mexicana"), categoryId: CAT.pizzas },
   { nome: "Barbecue com Cheddar", descricao: "Frango grelhado, molho barbecue defumado, cheddar cremoso e cebola crispy.", preco: 50.90, imageUrl: img("Pizza", "Barbecue Cheddar"), categoryId: CAT.pizzas },
   { nome: "Funghi Trifolati", descricao: "Mix de cogumelos shiitake, shimeji e portobello, alho, salsinha e mussarela.", preco: 49.90, imageUrl: img("Pizza", "Funghi"), categoryId: CAT.pizzas },
   { nome: "Berinjela com Gorgonzola", descricao: "Berinjela grelhada, gorgonzola cremoso, nozes e fio de mel de abelha.", preco: 48.90, imageUrl: img("Pizza", "Berinjela Gorgonzola"), categoryId: CAT.pizzas },
   { nome: "Vegetariana Colorida", descricao: "Pimentão tricolor, cogumelo, abobrinha grelhada, tomate cereja e mussarela.", preco: 42.90, imageUrl: img("Pizza", "Vegetariana"), categoryId: CAT.pizzas },
   { nome: "Alho e Óleo com Rúcula", descricao: "Base de alho negro, mussarela, tomate cereja assado e rúcula fresca finalizada.", preco: 43.90, imageUrl: img("Pizza", "Alho Óleo Rúcula"), categoryId: CAT.pizzas },
   { nome: "Frango Tikka Masala", descricao: "Frango marinado ao molho indiano tikka masala, cebola roxa e mussarela.", preco: 52.90, imageUrl: img("Pizza", "Tikka Masala"), categoryId: CAT.pizzas },
   { nome: "Carne do Sol com Coalho", descricao: "Carne do sol desfiada, queijo coalho grelhado, pimentão e cebola.", preco: 53.90, imageUrl: img("Pizza", "Carne Sol Coalho"), categoryId: CAT.pizzas },
   { nome: "Lombo com Catupiry", descricao: "Lombo defumado em fatias finas, catupiry original e ervas finas.", preco: 45.90, imageUrl: img("Pizza", "Lombo Catupiry"), categoryId: CAT.pizzas },
   { nome: "Picanha com Cebola Crispy", descricao: "Picanha temperada em cubos, cebola crispy, mussarela e molho de pimenta.", preco: 64.90, imageUrl: img("Pizza", "Picanha Cebola"), categoryId: CAT.pizzas },
   { nome: "Costela BBQ", descricao: "Costela bovina desfiada lentamente, molho barbecue artesanal, cheddar e jalapeño.", preco: 62.90, imageUrl: img("Pizza", "Costela BBQ"), categoryId: CAT.pizzas },
   { nome: "Devoratta", descricao: "Calabresa, frango, presunto, bacon, ovos e mussarela – para os famintos.", preco: 56.90, imageUrl: img("Pizza", "Devoratta"), categoryId: CAT.pizzas },
   { nome: "Cheddar Bacon com Jalapeño", descricao: "Cheddar derretido, bacon em tiras, jalapeño fresco e molho chipotle.", preco: 50.90, imageUrl: img("Pizza", "Cheddar Bacon Jalapeño"), categoryId: CAT.pizzas },
   { nome: "Escarola com Bacon", descricao: "Escarola refogada no alho, bacon crocante, azeitona preta e mussarela.", preco: 43.90, imageUrl: img("Pizza", "Escarola Bacon"), categoryId: CAT.pizzas },
   { nome: "Nutella com Morango", descricao: "Massa assada, camada generosa de Nutella, morangos frescos fatiados e açúcar de confeiteiro.", preco: 45.90, imageUrl: img("Pizza Doce", "Nutella Morango"), categoryId: CAT.pizzas },
   { nome: "Chocolate Branco com Morango", descricao: "Ganache de chocolate branco, morangos frescos e granulado colorido.", preco: 45.90, imageUrl: img("Pizza Doce", "Choc Branco Morango"), categoryId: CAT.pizzas },
   { nome: "Banana com Canela", descricao: "Banana nanica fatiada, canela em pó, leite condensado e coco ralado tostado.", preco: 37.90, imageUrl: img("Pizza Doce", "Banana Canela"), categoryId: CAT.pizzas },
   { nome: "Romeu e Julieta", descricao: "Mussarela derretida e goiabada cascão artesanal – o clássico brasileiro.", preco: 39.90, imageUrl: img("Pizza Doce", "Romeu Julieta"), categoryId: CAT.pizzas },
   { nome: "Ninho com Nutella", descricao: "Creme de leite Ninho, cobertura de Nutella e granulado crocante.", preco: 47.90, imageUrl: img("Pizza Doce", "Ninho Nutella"), categoryId: CAT.pizzas },
   { nome: "Prestígio", descricao: "Creme de chocolate ao leite, coco ralado e cobertura de chocolate meio amargo.", preco: 42.90, imageUrl: img("Pizza Doce", "Prestígio"), categoryId: CAT.pizzas },
   { nome: "Brigadeiro Gourmet", descricao: "Cobertura de brigadeiro artesanal, granulado belga e morango ao centro.", preco: 44.90, imageUrl: img("Pizza Doce", "Brigadeiro"), categoryId: CAT.pizzas },
   { nome: "Doce de Leite com Nozes", descricao: "Doce de leite artesanal, nozes caramelizadas e creme de manteiga.", preco: 46.90, imageUrl: img("Pizza Doce", "Doce Leite Nozes"), categoryId: CAT.pizzas },
   { nome: "Mousse de Limão", descricao: "Mousse de limão siciliano cremoso, raspas de limão e farofa de biscoito.", preco: 43.90, imageUrl: img("Pizza Doce", "Mousse Limão"), categoryId: CAT.pizzas },
   { nome: "Churros", descricao: "Massa polvilhada com açúcar e canela, recheada com doce de leite e ganache de chocolate.", preco: 41.90, imageUrl: img("Pizza Doce", "Churros"), categoryId: CAT.pizzas },
   { nome: "Broto Calabresa", descricao: "Versão individual: molho de tomate, mussarela e calabresa. Serve 1 pessoa.", preco: 22.90, imageUrl: img("Broto", "Calabresa"), categoryId: CAT.pizzas },
   { nome: "Broto Frango Catupiry", descricao: "Individual: frango desfiado, catupiry e milho. Ideal para uma refeição rápida.", preco: 23.90, imageUrl: img("Broto", "Frango Catupiry"), categoryId: CAT.pizzas },
   { nome: "Broto 4 Queijos", descricao: "Individual: mussarela, catupiry, gorgonzola e parmesão.", preco: 25.90, imageUrl: img("Broto", "4 Queijos"), categoryId: CAT.pizzas },
   { nome: "Broto Pepperoni", descricao: "Individual: pepperoni e mussarela.", preco: 26.90, imageUrl: img("Broto", "Pepperoni"), categoryId: CAT.pizzas },
   { nome: "Broto Margherita", descricao: "Individual: molho de tomate, mussarela e manjericão.", preco: 21.90, imageUrl: img("Broto", "Margherita"), categoryId: CAT.pizzas },
   { nome: "Broto Portuguesa", descricao: "Individual: presunto, ovo, azeitona e mussarela.", preco: 24.90, imageUrl: img("Broto", "Portuguesa"), categoryId: CAT.pizzas },
   { nome: "Broto Nutella Morango", descricao: "Individual doce: Nutella e morangos frescos.", preco: 25.90, imageUrl: img("Broto", "Nutella Morango"), categoryId: CAT.pizzas },
   { nome: "Broto Banana Canela", descricao: "Individual doce: banana, canela e leite condensado.", preco: 21.90, imageUrl: img("Broto", "Banana Canela"), categoryId: CAT.pizzas },
   { nome: "Broto Brigadeiro", descricao: "Individual doce: brigadeiro artesanal e granulado.", preco: 23.90, imageUrl: img("Broto", "Brigadeiro"), categoryId: CAT.pizzas },
   { nome: "Broto Toscana", descricao: "Individual: linguiça toscana, pimentão e mussarela.", preco: 24.90, imageUrl: img("Broto", "Toscana"), categoryId: CAT.pizzas },
   { nome: "Rúcula com Tomate Seco", descricao: "Mussarela de búfala, rúcula fresca, tomate seco em azeite e lascas de parmesão.", preco: 46.90, imageUrl: img("Pizza", "Rúcula Tomate Seco"), categoryId: CAT.pizzas },
   { nome: "Abobrinha com Alho Poró", descricao: "Abobrinha grelhada, alho-poró refogado na manteiga, cream cheese e mussarela.", preco: 44.90, imageUrl: img("Pizza", "Abobrinha Alho Poró"), categoryId: CAT.pizzas },
   { nome: "Parma com Rúcula", descricao: "Presunto de Parma em lascas, rúcula fresca, tomate cereja confitado e parmesão.", preco: 54.90, imageUrl: img("Pizza", "Parma Rúcula"), categoryId: CAT.pizzas },
   { nome: "Chocolate com Morango", descricao: "Cobertura de chocolate ao leite belga, morangos frescos fatiados e granulado crocante.", preco: 46.90, imageUrl: img("Pizza Doce", "Chocolate Morango"), categoryId: CAT.pizzas },
   { nome: "Doce de Leite com Coco", descricao: "Doce de leite artesanal, coco ralado tostado e leite condensado.", preco: 43.90, imageUrl: img("Pizza Doce", "Doce Leite Coco"), categoryId: CAT.pizzas },
];

// ═══════════════════════════════════════════════════════════════════════════
// 🍧 AÇAÍS (50)
// ═══════════════════════════════════════════════════════════════════════════
const acais = [
   { nome: "Açaí 300ml Tradicional", descricao: "Açaí cremoso puro (300ml) servido com granola crocante e banana fatiada. Energia pura.", preco: 13.90, imageUrl: img("Açaí", "300ml Tradicional"), categoryId: CAT.acai },
   { nome: "Açaí 300ml com Morango", descricao: "300ml de açaí cremoso, granola, banana e morangos frescos maduros.", preco: 15.90, imageUrl: img("Açaí", "300ml Morango"), categoryId: CAT.acai },
   { nome: "Açaí 300ml com Nutella", descricao: "300ml de açaí, granola, banana e uma generosa colherada de Nutella.", preco: 17.90, imageUrl: img("Açaí", "300ml Nutella"), categoryId: CAT.acai },
   { nome: "Açaí 300ml com Leite Ninho", descricao: "300ml de açaí, granola, banana e leite em pó Ninho polvilhado.", preco: 16.90, imageUrl: img("Açaí", "300ml Ninho"), categoryId: CAT.acai },
   { nome: "Açaí 300ml com Paçoca", descricao: "300ml de açaí, granola, banana e farinha de paçoca crocante.", preco: 15.90, imageUrl: img("Açaí", "300ml Paçoca"), categoryId: CAT.acai },
   { nome: "Açaí 300ml com Kiwi", descricao: "300ml de açaí, granola, banana e kiwi fatiado – toque ácido e refrescante.", preco: 16.90, imageUrl: img("Açaí", "300ml Kiwi"), categoryId: CAT.acai },
   { nome: "Açaí 300ml com Manga", descricao: "300ml de açaí, granola, banana e cubos de manga palmer.", preco: 15.90, imageUrl: img("Açaí", "300ml Manga"), categoryId: CAT.acai },
   { nome: "Açaí 500ml Tradicional", descricao: "500ml de açaí cremoso puro, granola crocante e banana fatiada. Serve bem.", preco: 19.90, imageUrl: img("Açaí", "500ml Tradicional"), categoryId: CAT.acai },
   { nome: "Açaí 500ml com Morango", descricao: "500ml de açaí, granola, banana e morangos frescos.", preco: 22.90, imageUrl: img("Açaí", "500ml Morango"), categoryId: CAT.acai },
   { nome: "Açaí 500ml com Nutella", descricao: "500ml de açaí, granola, banana e Nutella generosa.", preco: 24.90, imageUrl: img("Açaí", "500ml Nutella"), categoryId: CAT.acai },
   { nome: "Açaí 500ml com Leite Ninho", descricao: "500ml de açaí, granola, banana e Ninho polvilhado.", preco: 23.90, imageUrl: img("Açaí", "500ml Ninho"), categoryId: CAT.acai },
   { nome: "Açaí 500ml com Paçoca", descricao: "500ml de açaí, granola, banana e paçoca esfarelada.", preco: 22.90, imageUrl: img("Açaí", "500ml Paçoca"), categoryId: CAT.acai },
   { nome: "Açaí 500ml Kiwi e Morango", descricao: "500ml de açaí, granola, banana, kiwi e morangos – explosão de frutas.", preco: 24.90, imageUrl: img("Açaí", "500ml Kiwi Morango"), categoryId: CAT.acai },
   { nome: "Açaí 500ml Duplo Choco", descricao: "500ml de açaí, granola, banana, Nutella e granulado de chocolate.", preco: 26.90, imageUrl: img("Açaí", "500ml Duplo Choco"), categoryId: CAT.acai },
   { nome: "Açaí 500ml Manga e Coco", descricao: "500ml de açaí, granola, banana, manga e coco ralado tostado.", preco: 23.90, imageUrl: img("Açaí", "500ml Manga Coco"), categoryId: CAT.acai },
   { nome: "Açaí 500ml Amendoim", descricao: "500ml de açaí, granola, banana e amendoim torrado triturado.", preco: 22.90, imageUrl: img("Açaí", "500ml Amendoim"), categoryId: CAT.acai },
   { nome: "Açaí 500ml Frutas Vermelhas", descricao: "500ml de açaí, granola, banana, morango, framboesa e mirtilo.", preco: 26.90, imageUrl: img("Açaí", "500ml Frutas Vermelhas"), categoryId: CAT.acai },
   { nome: "Açaí 700ml Tradicional", descricao: "700ml de açaí puro cremoso, granola e banana – para compartilhar.", preco: 27.90, imageUrl: img("Açaí", "700ml Tradicional"), categoryId: CAT.acai },
   { nome: "Açaí 700ml com Morango", descricao: "700ml de açaí, granola, banana e morangos frescos em abundância.", preco: 30.90, imageUrl: img("Açaí", "700ml Morango"), categoryId: CAT.acai },
   { nome: "Açaí 700ml com Nutella", descricao: "700ml de açaí, granola, banana e Nutella – pra quem vai fundo.", preco: 32.90, imageUrl: img("Açaí", "700ml Nutella"), categoryId: CAT.acai },
   { nome: "Açaí 700ml com Leite Ninho", descricao: "700ml de açaí, granola, banana e Ninho generoso.", preco: 31.90, imageUrl: img("Açaí", "700ml Ninho"), categoryId: CAT.acai },
   { nome: "Açaí 700ml com Paçoca", descricao: "700ml de açaí, granola, banana e farofa de paçoca.", preco: 30.90, imageUrl: img("Açaí", "700ml Paçoca"), categoryId: CAT.acai },
   { nome: "Açaí 700ml 3 Coberturas", descricao: "700ml de açaí, granola, banana, Nutella, Ninho e paçoca – a bomba completa.", preco: 35.90, imageUrl: img("Açaí", "700ml 3 Coberturas"), categoryId: CAT.acai },
   { nome: "Açaí 700ml Kiwi e Manga", descricao: "700ml de açaí, granola, banana, kiwi e manga palmer.", preco: 31.90, imageUrl: img("Açaí", "700ml Kiwi Manga"), categoryId: CAT.acai },
   { nome: "Açaí 700ml Tropical", descricao: "700ml de açaí, granola, banana, abacaxi, coco e morango.", preco: 32.90, imageUrl: img("Açaí", "700ml Tropical"), categoryId: CAT.acai },
   { nome: "Açaí 700ml Castanha e Mel", descricao: "700ml de açaí, granola, banana, castanha do Pará e fio de mel.", preco: 32.90, imageUrl: img("Açaí", "700ml Castanha Mel"), categoryId: CAT.acai },
   { nome: "Açaí 1L Tradicional", descricao: "1 litro de açaí cremoso puro, granola crocante e banana. Serve 2-3 pessoas.", preco: 36.90, imageUrl: img("Açaí", "1L Tradicional"), categoryId: CAT.acai },
   { nome: "Açaí 1L com Morango", descricao: "1 litro de açaí, granola, banana e morangos frescos. Para a família.", preco: 40.90, imageUrl: img("Açaí", "1L Morango"), categoryId: CAT.acai },
   { nome: "Açaí 1L com Nutella", descricao: "1 litro de açaí, granola, banana e Nutella. Serve 2-3.", preco: 44.90, imageUrl: img("Açaí", "1L Nutella"), categoryId: CAT.acai },
   { nome: "Açaí 1L com Leite Ninho", descricao: "1 litro de açaí, granola, banana e Ninho. Serve 2-3.", preco: 42.90, imageUrl: img("Açaí", "1L Ninho"), categoryId: CAT.acai },
   { nome: "Açaí 1L Festival de Frutas", descricao: "1 litro de açaí, granola, banana, morango, manga, kiwi e abacaxi.", preco: 48.90, imageUrl: img("Açaí", "1L Festival Frutas"), categoryId: CAT.acai },
   { nome: "Açaí 1L Supercoberto", descricao: "1 litro de açaí, granola, banana, Nutella, Ninho, paçoca e granulado.", preco: 52.90, imageUrl: img("Açaí", "1L Supercoberto"), categoryId: CAT.acai },
   { nome: "Açaí 1L Frutas e Castanhas", descricao: "1 litro de açaí, granola, banana, morango, castanha e mel.", preco: 50.90, imageUrl: img("Açaí", "1L Frutas Castanhas"), categoryId: CAT.acai },
   { nome: "Açaí Gourmet Tapioca Crocante", descricao: "500ml de açaí premium com tapioca crocante, granola artesanal, banana e mel de abelha.", preco: 28.90, imageUrl: img("Açaí", "Gourmet Tapioca"), categoryId: CAT.acai },
   { nome: "Açaí Bowl Energético", descricao: "500ml de açaí, granola, banana, morango, chia, linhaça e mel – bowl completo.", preco: 29.90, imageUrl: img("Açaí", "Bowl Energético"), categoryId: CAT.acai },
   { nome: "Açaí com Sorvete de Creme", descricao: "500ml de açaí cremoso com uma bola de sorvete de creme, granola e calda de morango.", preco: 27.90, imageUrl: img("Açaí", "Sorvete Creme"), categoryId: CAT.acai },
   { nome: "Açaí com Abacaxi Caramelizado", descricao: "500ml de açaí, granola, banana e abacaxi na chapa com açúcar mascavo e canela.", preco: 25.90, imageUrl: img("Açaí", "Abacaxi Caramelizado"), categoryId: CAT.acai },
   { nome: "Açaí com Cookies Oreo", descricao: "500ml de açaí, granola, banana e biscoitos Oreo triturados.", preco: 25.90, imageUrl: img("Açaí", "Oreo"), categoryId: CAT.acai },
   { nome: "Açaí com Brigadeiro", descricao: "500ml de açaí, granola, banana e calda de brigadeiro artesanal.", preco: 26.90, imageUrl: img("Açaí", "Brigadeiro"), categoryId: CAT.acai },
   { nome: "Açaí com Doce de Leite", descricao: "500ml de açaí, granola, banana e doce de leite artesanal de Minas.", preco: 25.90, imageUrl: img("Açaí", "Doce Leite"), categoryId: CAT.acai },
   { nome: "Açaí Fit Sem Açúcar", descricao: "500ml de açaí puro sem adição de açúcar, granola sem açúcar, banana e morango.", preco: 23.90, imageUrl: img("Açaí", "Fit Sem Açúcar"), categoryId: CAT.acai },
   { nome: "Açaí com Whey e Amendoim", descricao: "500ml de açaí, granola, banana, whey protein baunilha e pasta de amendoim.", preco: 31.90, imageUrl: img("Açaí", "Whey Amendoim"), categoryId: CAT.acai },
   { nome: "Açaí Proteico", descricao: "500ml de açaí, granola, banana, chia, amendoim e whey de chocolate – foco total.", preco: 32.90, imageUrl: img("Açaí", "Proteico"), categoryId: CAT.acai },
   { nome: "Açaí Vermelho (Morango Puro)", descricao: "500ml de açaí mesclado com purê de morango, granola e banana.", preco: 24.90, imageUrl: img("Açaí", "Vermelho"), categoryId: CAT.acai },
   { nome: "Açaí Roxo Premium", descricao: "700ml de açaí com mirtilo, framboesa, granola de quinoa e agave.", preco: 35.90, imageUrl: img("Açaí", "Roxo Premium"), categoryId: CAT.acai },
   { nome: "Açaí de Cupuaçu", descricao: "500ml de blend de açaí com cupuaçu, granola, banana e coco ralado.", preco: 25.90, imageUrl: img("Açaí", "Cupuaçu"), categoryId: CAT.acai },
   { nome: "Açaí com Tapioca e Queijo Coalho", descricao: "500ml de açaí, granola, banana, cubinhos de tapioca com queijo coalho grelhado.", preco: 27.90, imageUrl: img("Açaí", "Tapioca Coalho"), categoryId: CAT.acai },
   { nome: "Açaí com Waffle Crocante", descricao: "500ml de açaí, granola, banana, pedaços de waffle crocante e calda de frutas.", preco: 28.90, imageUrl: img("Açaí", "Waffle"), categoryId: CAT.acai },
   { nome: "Açaí com Granola de Quinoa e Mel", descricao: "500ml de açaí com granola de quinoa tostada, banana e fio de mel silvestre.", preco: 24.90, imageUrl: img("Açaí", "Quinoa Mel"), categoryId: CAT.acai },
   { nome: "Açaí 1L com Paçoca e Amendoim", descricao: "1 litro de açaí, granola, banana, paçoca esfarelada e amendoim tostado.", preco: 48.90, imageUrl: img("Açaí", "1L Paçoca Amendoim"), categoryId: CAT.acai },
];

// ═══════════════════════════════════════════════════════════════════════════
// 🍱 MARMITAS (40)
// ═══════════════════════════════════════════════════════════════════════════
const marmitas = [
   { nome: "Frango Grelhado", descricao: "Filé de frango grelhado com ervas finas, arroz branco soltinho, feijão carioca, salada de alface e tomate.", preco: 19.90, imageUrl: img("Marmita", "Frango Grelhado"), categoryId: CAT.marmitas },
   { nome: "Bife Acebolado", descricao: "Bife bovino acebolado na manteiga, arroz, feijão, farofa crocante e salada verde.", preco: 23.90, imageUrl: img("Marmita", "Bife Acebolado"), categoryId: CAT.marmitas },
   { nome: "Frango à Milanesa", descricao: "Filé de frango empanado frito, arroz, feijão, macarrão ao sugo e salada.", preco: 21.90, imageUrl: img("Marmita", "Frango Milanesa"), categoryId: CAT.marmitas },
   { nome: "Carne Moída com Legumes", descricao: "Carne moída refogada com cenoura, ervilha e batata, arroz branco e feijão.", preco: 20.90, imageUrl: img("Marmita", "Carne Moída Legumes"), categoryId: CAT.marmitas },
   { nome: "Costela no Bafo", descricao: "Costela bovina cozida lentamente no bafo, arroz, feijão tropeiro e couve refogada.", preco: 31.90, imageUrl: img("Marmita", "Costela Bafo"), categoryId: CAT.marmitas },
   { nome: "Tilápia Grelhada", descricao: "Filé de tilápia grelhado com limão e ervas, arroz integral, feijão verde e salada.", preco: 24.90, imageUrl: img("Marmita", "Tilápia"), categoryId: CAT.marmitas },
   { nome: "Strogonoff de Frango", descricao: "Strogonoff cremoso de frango com champignon, arroz branco e batata palha.", preco: 22.90, imageUrl: img("Marmita", "Strogonoff Frango"), categoryId: CAT.marmitas },
   { nome: "Linguiça com Arroz Carreteiro", descricao: "Arroz carreteiro com linguiça calabresa artesanal, vinagrete e banana frita.", preco: 21.90, imageUrl: img("Marmita", "Linguiça Carreteiro"), categoryId: CAT.marmitas },
   { nome: "Frango ao Molho Pardo", descricao: "Frango caipira ao molho pardo, arroz branco, feijão e couve mineira.", preco: 24.90, imageUrl: img("Marmita", "Molho Pardo"), categoryId: CAT.marmitas },
   { nome: "Picanha Grelhada", descricao: "Picanha bovina grelhada em fatias, arroz, feijão, farofa e vinagrete.", preco: 36.90, imageUrl: img("Marmita", "Picanha"), categoryId: CAT.marmitas },
   { nome: "Feijoada Completa", descricao: "Feijoada com carnes nobres, couve refogada, farofa, arroz, laranja e torresmo.", preco: 29.90, imageUrl: img("Marmita", "Feijoada"), categoryId: CAT.marmitas },
   { nome: "Frango ao Curry", descricao: "Frango ao molho de curry tailandês com leite de coco, arroz basmati e salada.", preco: 24.90, imageUrl: img("Marmita", "Frango Curry"), categoryId: CAT.marmitas },
   { nome: "Carne Assada com Molho", descricao: "Carne assada ao molho madeira, batata rústica assada, arroz e salada.", preco: 27.90, imageUrl: img("Marmita", "Carne Assada"), categoryId: CAT.marmitas },
   { nome: "Frango à Parmegiana", descricao: "Filé de frango empanado, molho de tomate, queijo derretido, arroz e feijão.", preco: 25.90, imageUrl: img("Marmita", "Frango Parmegiana"), categoryId: CAT.marmitas },
   { nome: "Salmão ao Molho de Maracujá", descricao: "Filé de salmão grelhado com molho de maracujá, arroz branco e legumes no vapor.", preco: 34.90, imageUrl: img("Marmita", "Salmão Maracujá"), categoryId: CAT.marmitas },
   { nome: "Camarão no Alho e Óleo", descricao: "Camarão refogado no alho e azeite, arroz branco e farofa de manteiga.", preco: 35.90, imageUrl: img("Marmita", "Camarão Alho"), categoryId: CAT.marmitas },
   { nome: "Panqueca de Carne", descricao: "Panquecas recheadas com carne moída ao molho de tomate, arroz e salada verde.", preco: 21.90, imageUrl: img("Marmita", "Panqueca"), categoryId: CAT.marmitas },
   { nome: "Frango ao Limão", descricao: "Filé de frango ao molho de limão siciliano com alcaparras, arroz e legumes.", preco: 23.90, imageUrl: img("Marmita", "Frango Limão"), categoryId: CAT.marmitas },
   { nome: "Porco ao Molho Barbecue", descricao: "Costelinha suína ao molho barbecue artesanal, arroz, feijão e coleslaw.", preco: 27.90, imageUrl: img("Marmita", "Porco BBQ"), categoryId: CAT.marmitas },
   { nome: "Peixe Empanado", descricao: "Filé de peixe empanado crocante, arroz integral, feijão e salada de cenoura.", preco: 23.90, imageUrl: img("Marmita", "Peixe Empanado"), categoryId: CAT.marmitas },
   { nome: "Fit Frango com Batata Doce", descricao: "Filé de frango grelhado, batata doce assada, brócolis no vapor e arroz integral.", preco: 22.90, imageUrl: img("Marmita Fit", "Frango Batata Doce"), categoryId: CAT.marmitas },
   { nome: "Fit Carne Moída Light", descricao: "Carne moída magra refogada, arroz integral, feijão e mix de legumes assados.", preco: 21.90, imageUrl: img("Marmita Fit", "Carne Light"), categoryId: CAT.marmitas },
   { nome: "Fit Tilápia e Quinoa", descricao: "Filé de tilápia no limão, quinoa cozida, espinafre refogado e cenoura ralada.", preco: 25.90, imageUrl: img("Marmita Fit", "Tilápia Quinoa"), categoryId: CAT.marmitas },
   { nome: "Fit Omelete Proteico", descricao: "Omelete de 4 ovos com queijo, tomate e espinafre, arroz integral e salada.", preco: 19.90, imageUrl: img("Marmita Fit", "Omelete"), categoryId: CAT.marmitas },
   { nome: "Vegana Completa", descricao: "Proteína de soja temperada, arroz integral, feijão, legumes assados e salada.", preco: 20.90, imageUrl: img("Marmita Vegana", "Completa"), categoryId: CAT.marmitas },
   { nome: "Vegetariana com Grão-de-Bico", descricao: "Grão-de-bico ao curry, arroz basmati, mix de legumes e couve refogada.", preco: 20.90, imageUrl: img("Marmita Veg", "Grão de Bico"), categoryId: CAT.marmitas },
   { nome: "Nordestina Carne do Sol", descricao: "Carne do sol desfiada, arroz com coco, feijão verde, jerimum assado e macaxeira.", preco: 27.90, imageUrl: img("Marmita", "Nordestina"), categoryId: CAT.marmitas },
   { nome: "Baiana Moqueca", descricao: "Moqueca de frango ao leite de coco e dendê, arroz branco e pirão.", preco: 26.90, imageUrl: img("Marmita", "Baiana"), categoryId: CAT.marmitas },
   { nome: "Mineira de Frango ao Molho", descricao: "Frango ao molho de queijo minas, tutu de feijão, couve e torresmo crocante.", preco: 25.90, imageUrl: img("Marmita", "Mineira"), categoryId: CAT.marmitas },
   { nome: "Paulistana com Virado", descricao: "Bife bovino, virado à paulista, ovo frito, linguiça frita e banana à milanesa.", preco: 28.90, imageUrl: img("Marmita", "Paulistana"), categoryId: CAT.marmitas },
   { nome: "Gaúcha Churrasco Misto", descricao: "Churrasco misto de bovino e suíno, arroz, feijão e chimichurri.", preco: 32.90, imageUrl: img("Marmita", "Gaúcha"), categoryId: CAT.marmitas },
   { nome: "Caldo de Feijão Completo", descricao: "Caldo espesso de feijão com linguiça, bacon, couve e arroz branco.", preco: 18.90, imageUrl: img("Marmita", "Caldo Feijão"), categoryId: CAT.marmitas },
   { nome: "Sopa de Mandioca com Carne", descricao: "Sopa cremosa de mandioca com carne bovina desfiada e ervas frescas.", preco: 19.90, imageUrl: img("Marmita", "Sopa Mandioca"), categoryId: CAT.marmitas },
   { nome: "Canja de Galinha", descricao: "Canja de galinha caipira com arroz, cenoura e salsinha – conforto em marmita.", preco: 18.90, imageUrl: img("Marmita", "Canja"), categoryId: CAT.marmitas },
   { nome: "Frango Xadrez", descricao: "Frango ao molho xadrez com pimentão colorido e castanha de caju, arroz branco.", preco: 23.90, imageUrl: img("Marmita", "Frango Xadrez"), categoryId: CAT.marmitas },
   { nome: "Macarronada Bolonhesa", descricao: "Macarrão ao ragu de carne moída com molho de tomate artesanal e parmesão.", preco: 19.90, imageUrl: img("Marmita", "Bolonhesa"), categoryId: CAT.marmitas },
   { nome: "Risoto de Frango com Funghi", descricao: "Risoto cremoso de frango desfiado com funghi, parmesão e manteiga.", preco: 26.90, imageUrl: img("Marmita", "Risoto"), categoryId: CAT.marmitas },
   { nome: "Filé com Champignon", descricao: "Filé mignon ao molho de champignon, arroz branco, batata gratinada e salada.", preco: 38.90, imageUrl: img("Marmita", "Filé Champignon"), categoryId: CAT.marmitas },
   { nome: "Escondidinho de Carne Seca", descricao: "Escondidinho de macaxeira com carne seca desfiada e queijo coalho gratinado.", preco: 24.90, imageUrl: img("Marmita", "Escondidinho"), categoryId: CAT.marmitas },
   { nome: "Frango ao Molho de Mostarda", descricao: "Filé de frango ao molho de mostarda dijon e mel, arroz, feijão e salada.", preco: 22.90, imageUrl: img("Marmita", "Mostarda"), categoryId: CAT.marmitas },
];

// ═══════════════════════════════════════════════════════════════════════════
// 🍫 BROWNIES E DOCES (30)
// ═══════════════════════════════════════════════════════════════════════════
const doces = [
   { nome: "Brownie Tradicional", descricao: "Brownie denso de chocolate meio amargo belga, crocante por fora e fudgy por dentro. Unidade.", preco: 8.90, imageUrl: img("Brownie", "Tradicional"), categoryId: CAT.doces },
   { nome: "Brownie com Nozes", descricao: "Brownie de chocolate meio amargo com nozes crocantes. Unidade.", preco: 9.90, imageUrl: img("Brownie", "Nozes"), categoryId: CAT.doces },
   { nome: "Brownie Ninho com Nutella", descricao: "Brownie de chocolate recheado com creme de Ninho e Nutella. Unidade.", preco: 11.90, imageUrl: img("Brownie", "Ninho Nutella"), categoryId: CAT.doces },
   { nome: "Brownie de Chocolate Branco", descricao: "Blondie — brownie de chocolate branco com gotas de chocolate ao leite. Unidade.", preco: 9.90, imageUrl: img("Brownie", "Choc Branco"), categoryId: CAT.doces },
   { nome: "Brownie Red Velvet", descricao: "Brownie aveludado red velvet com cream cheese no centro. Unidade.", preco: 11.90, imageUrl: img("Brownie", "Red Velvet"), categoryId: CAT.doces },
   { nome: "Brownie com Caramelo Salgado", descricao: "Brownie de chocolate amargo com recheio de caramelo salgado artesanal. Unidade.", preco: 11.90, imageUrl: img("Brownie", "Caramelo Salgado"), categoryId: CAT.doces },
   { nome: "Brownie Vegano", descricao: "Brownie sem ovos e sem leite, feito com farinha de aveia e cacau puro. Unidade.", preco: 10.90, imageUrl: img("Brownie", "Vegano"), categoryId: CAT.doces },
   { nome: "Brownie com Pistache", descricao: "Brownie de chocolate meio amargo com recheio de pasta de pistache. Unidade.", preco: 12.90, imageUrl: img("Brownie", "Pistache"), categoryId: CAT.doces },
   { nome: "Caixa de Brownies (6 un)", descricao: "6 brownies sortidos: tradicional, nozes, Nutella, caramelo salgado, Ninho e red velvet.", preco: 58.90, imageUrl: img("Brownie", "Caixa 6"), categoryId: CAT.doces },
   { nome: "Fatia Torta de Limão", descricao: "Base de biscoito, creme de limão siciliano e merengue tostado. Fatia.", preco: 12.90, imageUrl: img("Torta", "Limão"), categoryId: CAT.doces },
   { nome: "Fatia Torta de Maracujá", descricao: "Base de biscoito, creme de maracujá e cobertura de calda de maracujá. Fatia.", preco: 12.90, imageUrl: img("Torta", "Maracujá"), categoryId: CAT.doces },
   { nome: "Fatia Torta de Chocolate", descricao: "Massa de cacau, ganache de chocolate belga e raspas de chocolate. Fatia.", preco: 13.90, imageUrl: img("Torta", "Chocolate"), categoryId: CAT.doces },
   { nome: "Fatia Bolo de Cenoura com Chocolate", descricao: "Bolo fofo de cenoura com cobertura de brigadeiro cremoso. Fatia.", preco: 10.90, imageUrl: img("Bolo", "Cenoura"), categoryId: CAT.doces },
   { nome: "Fatia Bolo Red Velvet", descricao: "Bolo red velvet com recheio e cobertura de cream cheese. Fatia.", preco: 12.90, imageUrl: img("Bolo", "Red Velvet"), categoryId: CAT.doces },
   { nome: "Brigadeiro Gourmet Tradicional", descricao: "Brigadeiro artesanal de chocolate belga enrolado no granulado premium. Unidade.", preco: 3.90, imageUrl: img("Brigadeiro", "Tradicional"), categoryId: CAT.doces },
   { nome: "Brigadeiro de Pistache", descricao: "Brigadeiro de pasta de pistache importado com granulado verde. Unidade.", preco: 5.90, imageUrl: img("Brigadeiro", "Pistache"), categoryId: CAT.doces },
   { nome: "Brigadeiro de Limão Siciliano", descricao: "Brigadeiro ácido de limão siciliano com raspas da fruta. Unidade.", preco: 4.90, imageUrl: img("Brigadeiro", "Limão"), categoryId: CAT.doces },
   { nome: "Caixa Brigadeiros Gourmet (9un)", descricao: "9 brigadeiros sortidos: tradicional, pistache, limão, maracujá, Ninho, cookie, churros, morango e caramelo.", preco: 44.90, imageUrl: img("Brigadeiro", "Caixa 9"), categoryId: CAT.doces },
   { nome: "Mousse de Chocolate", descricao: "Mousse aerado de chocolate meio amargo com chantilly e raspas. Porção.", preco: 11.90, imageUrl: img("Mousse", "Chocolate"), categoryId: CAT.doces },
   { nome: "Mousse de Maracujá", descricao: "Mousse leve de maracujá com calda de frutas e hortelã. Porção.", preco: 10.90, imageUrl: img("Mousse", "Maracujá"), categoryId: CAT.doces },
   { nome: "Cheesecake de Morango", descricao: "Base de biscoito, creme de cream cheese e cobertura de calda de morango. Fatia.", preco: 14.90, imageUrl: img("Cheesecake", "Morango"), categoryId: CAT.doces },
   { nome: "Cheesecake de Frutas Vermelhas", descricao: "Cheesecake com cobertura de geleia de frutas vermelhas artesanal. Fatia.", preco: 15.90, imageUrl: img("Cheesecake", "Frutas Vermelhas"), categoryId: CAT.doces },
   { nome: "Pudim de Leite Condensado", descricao: "Pudim clássico de leite condensado com calda de caramelo dourado. Porção.", preco: 9.90, imageUrl: img("Pudim", "Leite"), categoryId: CAT.doces },
   { nome: "Pavê de Bis", descricao: "Pavê em camadas de Bis, creme de baunilha e chantilly. Porção individual.", preco: 12.90, imageUrl: img("Pavê", "Bis"), categoryId: CAT.doces },
   { nome: "Trufa de Chocolate Belga", descricao: "Trufa artesanal de chocolate belga com recheio de ganache. 4 unidades.", preco: 17.90, imageUrl: img("Trufa", "Belga"), categoryId: CAT.doces },
   { nome: "Cookie Recheado de Nutella", descricao: "Cookie artesanal de chocolate com centro recheado de Nutella. Unidade.", preco: 7.90, imageUrl: img("Cookie", "Nutella"), categoryId: CAT.doces },
   { nome: "Cookie de Chocolate com Nozes", descricao: "Cookie crocante de cacau com nozes e gotas de chocolate meio amargo. Unidade.", preco: 6.90, imageUrl: img("Cookie", "Nozes"), categoryId: CAT.doces },
   { nome: "Caixa Presente Mista (12 doces)", descricao: "Caixa com 12 doces sortidos: brigadeiros, trufas, brownies e cookies gourmet.", preco: 74.90, imageUrl: img("Caixa", "Presente Mista"), categoryId: CAT.doces },
   { nome: "Waffle com Nutella e Sorvete", descricao: "Waffle belga crocante com Nutella, bola de sorvete de creme e frutas vermelhas.", preco: 19.90, imageUrl: img("Waffle", "Nutella Sorvete"), categoryId: CAT.doces },
   { nome: "Crepe Doce Nutella Morango", descricao: "Crepe fino recheado com Nutella e morangos frescos, finalizado com açúcar.", preco: 16.90, imageUrl: img("Crepe", "Nutella Morango"), categoryId: CAT.doces },
];

// ═══════════════════════════════════════════════════════════════════════════
// 🥤 BEBIDAS (40)
// ═══════════════════════════════════════════════════════════════════════════
const bebidas = [
   { nome: "Coca-Cola Lata 350ml", descricao: "Refrigerante Coca-Cola gelado. Lata 350ml.", preco: 5.90, imageUrl: img("Bebida", "Coca Lata"), categoryId: CAT.bebidas },
   { nome: "Coca-Cola 600ml", descricao: "Refrigerante Coca-Cola gelado. Garrafa PET 600ml.", preco: 7.50, imageUrl: img("Bebida", "Coca 600ml"), categoryId: CAT.bebidas },
   { nome: "Guaraná Antarctica Lata 350ml", descricao: "Refrigerante Guaraná Antarctica gelado. Lata.", preco: 5.90, imageUrl: img("Bebida", "Guaraná Lata"), categoryId: CAT.bebidas },
   { nome: "Guaraná Antarctica 2L", descricao: "Refrigerante Guaraná Antarctica gelado. Garrafa 2 litros.", preco: 11.90, imageUrl: img("Bebida", "Guaraná 2L"), categoryId: CAT.bebidas },
   { nome: "Fanta Laranja Lata 350ml", descricao: "Refrigerante Fanta Laranja gelado. Lata.", preco: 5.90, imageUrl: img("Bebida", "Fanta Laranja"), categoryId: CAT.bebidas },
   { nome: "Sprite Lata 350ml", descricao: "Refrigerante Sprite Limão gelado. Lata.", preco: 5.90, imageUrl: img("Bebida", "Sprite"), categoryId: CAT.bebidas },
   { nome: "Coca-Cola Zero Lata 350ml", descricao: "Coca-Cola Zero Açúcar gelada. Lata.", preco: 5.90, imageUrl: img("Bebida", "Coca Zero"), categoryId: CAT.bebidas },
   { nome: "Suco de Laranja Natural 400ml", descricao: "Suco de laranja pera espremido na hora. 400ml.", preco: 8.90, imageUrl: img("Suco", "Laranja"), categoryId: CAT.bebidas },
   { nome: "Suco de Acerola 400ml", descricao: "Suco de acerola natural, rico em vitamina C. 400ml.", preco: 8.90, imageUrl: img("Suco", "Acerola"), categoryId: CAT.bebidas },
   { nome: "Suco de Maracujá 400ml", descricao: "Suco de maracujá azedo natural, com ou sem açúcar. 400ml.", preco: 8.90, imageUrl: img("Suco", "Maracujá"), categoryId: CAT.bebidas },
   { nome: "Suco de Abacaxi com Hortelã 400ml", descricao: "Suco refrescante de abacaxi com hortelã fresca. 400ml.", preco: 9.90, imageUrl: img("Suco", "Abacaxi Hortelã"), categoryId: CAT.bebidas },
   { nome: "Suco de Melancia 400ml", descricao: "Suco de melancia puro gelado. 400ml.", preco: 8.90, imageUrl: img("Suco", "Melancia"), categoryId: CAT.bebidas },
   { nome: "Suco de Goiaba 400ml", descricao: "Suco de goiaba vermelha natural cremoso. 400ml.", preco: 8.90, imageUrl: img("Suco", "Goiaba"), categoryId: CAT.bebidas },
   { nome: "Vitamina de Banana 400ml", descricao: "Vitamina cremosa de banana com leite. 400ml.", preco: 9.90, imageUrl: img("Vitamina", "Banana"), categoryId: CAT.bebidas },
   { nome: "Vitamina de Mamão 400ml", descricao: "Vitamina de mamão formosa com leite e mel. 400ml.", preco: 9.90, imageUrl: img("Vitamina", "Mamão"), categoryId: CAT.bebidas },
   { nome: "Água Mineral 500ml", descricao: "Água mineral natural sem gás. Garrafa 500ml.", preco: 3.50, imageUrl: img("Água", "Mineral"), categoryId: CAT.bebidas },
   { nome: "Água com Gás 500ml", descricao: "Água mineral com gás. Garrafa 500ml.", preco: 4.50, imageUrl: img("Água", "Com Gás"), categoryId: CAT.bebidas },
   { nome: "Água de Coco 330ml", descricao: "Água de coco natural sem adição de açúcar. 330ml.", preco: 5.90, imageUrl: img("Água", "Coco"), categoryId: CAT.bebidas },
   { nome: "Gatorade Laranja 500ml", descricao: "Isotônico Gatorade sabor laranja. 500ml.", preco: 7.50, imageUrl: img("Isotônico", "Gatorade"), categoryId: CAT.bebidas },
   { nome: "Powerade Azul 500ml", descricao: "Isotônico Powerade berry ice. 500ml.", preco: 7.50, imageUrl: img("Isotônico", "Powerade"), categoryId: CAT.bebidas },
   { nome: "Chá Gelado de Pêssego 400ml", descricao: "Chá verde com pêssego, levemente adocicado e gelado. 400ml.", preco: 7.90, imageUrl: img("Chá", "Pêssego"), categoryId: CAT.bebidas },
   { nome: "Chá Gelado de Limão 400ml", descricao: "Chá preto com limão e mel, gelado e refrescante. 400ml.", preco: 7.90, imageUrl: img("Chá", "Limão"), categoryId: CAT.bebidas },
   { nome: "Cold Brew Café 300ml", descricao: "Cold brew de café especial extraído a frio por 12 horas. 300ml.", preco: 11.90, imageUrl: img("Café", "Cold Brew"), categoryId: CAT.bebidas },
   { nome: "Café com Leite Gelado 300ml", descricao: "Café espresso duplo com leite vaporizado gelado e caramelo. 300ml.", preco: 12.90, imageUrl: img("Café", "Leite Gelado"), categoryId: CAT.bebidas },
   { nome: "Milk-shake de Chocolate 400ml", descricao: "Milk-shake cremoso de chocolate com sorvete e chantilly. 400ml.", preco: 17.90, imageUrl: img("Milkshake", "Chocolate"), categoryId: CAT.bebidas },
   { nome: "Milk-shake de Morango 400ml", descricao: "Milk-shake de morango com sorvete e calda de morango. 400ml.", preco: 17.90, imageUrl: img("Milkshake", "Morango"), categoryId: CAT.bebidas },
   { nome: "Milk-shake de Baunilha 400ml", descricao: "Milk-shake clássico de baunilha com chantilly. 400ml.", preco: 16.90, imageUrl: img("Milkshake", "Baunilha"), categoryId: CAT.bebidas },
   { nome: "Milk-shake de Nutella 400ml", descricao: "Milk-shake de avelã com Nutella, sorvete de creme e avelãs. 400ml.", preco: 20.90, imageUrl: img("Milkshake", "Nutella"), categoryId: CAT.bebidas },
   { nome: "Heineken Long Neck 330ml", descricao: "Cerveja Heineken Premium Lager Long Neck gelada.", preco: 9.90, imageUrl: img("Cerveja", "Heineken"), categoryId: CAT.bebidas },
   { nome: "Stella Artois Long Neck 330ml", descricao: "Cerveja Stella Artois Long Neck gelada.", preco: 9.90, imageUrl: img("Cerveja", "Stella"), categoryId: CAT.bebidas },
   { nome: "Brahma Lata 350ml", descricao: "Cerveja Brahma Pilsen Lata gelada.", preco: 5.90, imageUrl: img("Cerveja", "Brahma"), categoryId: CAT.bebidas },
   { nome: "Caipirinha de Limão", descricao: "Caipirinha artesanal de cachaça artesanal mineira com limão tahiti e açúcar demerara.", preco: 16.90, imageUrl: img("Coquetel", "Caipirinha Limão"), categoryId: CAT.bebidas },
   { nome: "Caipirinha de Morango", descricao: "Caipirinha com cachaça, morangos frescos e açúcar demerara.", preco: 17.90, imageUrl: img("Coquetel", "Caipirinha Morango"), categoryId: CAT.bebidas },
   { nome: "Red Bull 250ml", descricao: "Energético Red Bull 250ml – asas pro delivery.", preco: 10.90, imageUrl: img("Energético", "Red Bull"), categoryId: CAT.bebidas },
   { nome: "Monster Energy 473ml", descricao: "Energético Monster Energy lata 473ml.", preco: 11.90, imageUrl: img("Energético", "Monster"), categoryId: CAT.bebidas },
   { nome: "Kit 2 Coca-Cola Lata", descricao: "2 Coca-Colas lata 350ml geladas.", preco: 10.90, imageUrl: img("Kit", "2 Coca"), categoryId: CAT.bebidas },
   { nome: "Kit Família 2L + Suco 400ml", descricao: "1 Coca-Cola 2L + 1 suco natural 400ml à sua escolha.", preco: 17.90, imageUrl: img("Kit", "Família"), categoryId: CAT.bebidas },
   { nome: "Limonada Suíça 400ml", descricao: "Limonada cremosa com leite condensado e limão tahiti. 400ml.", preco: 11.90, imageUrl: img("Limonada", "Suíça"), categoryId: CAT.bebidas },
   { nome: "Limonada Tradicional 400ml", descricao: "Limonada natural com limão tahiti, água e açúcar demerara. 400ml.", preco: 8.90, imageUrl: img("Limonada", "Tradicional"), categoryId: CAT.bebidas },
   { nome: "Suco de Frutas Misto 400ml", descricao: "Mistura de maracujá, laranja e acerola, refrescante e vitaminado.", preco: 10.90, imageUrl: img("Suco", "Misto"), categoryId: CAT.bebidas },
];

// ═══════════════════════════════════════════════════════════════════════════
// 🍔 LANCHES ARTESANAIS (30)
// ═══════════════════════════════════════════════════════════════════════════
const lanches = [
   { nome: "Smash Burger Clássico", descricao: "Blend bovino 180g prensado na chapa, queijo cheddar, cebola caramelizada, alface americana e brioche tostado.", preco: 29.90, imageUrl: img("Lanche", "Smash Clássico"), categoryId: CAT.lanches },
   { nome: "Smash Burger Duplo", descricao: "2 blends bovinos 180g prensados, double cheddar, bacon crocante e molho especial da casa no brioche.", preco: 38.90, imageUrl: img("Lanche", "Smash Duplo"), categoryId: CAT.lanches },
   { nome: "Smash Burger BBQ Bacon", descricao: "Blend bovino, cheddar defumado, bacon crispy, cebola crispy e molho barbecue artesanal.", preco: 34.90, imageUrl: img("Lanche", "Smash BBQ"), categoryId: CAT.lanches },
   { nome: "Smash Burger Picanha", descricao: "Blend de picanha 200g, queijo gouda, rúcula fresca, tomate confitado e maionese de pimenta.", preco: 39.90, imageUrl: img("Lanche", "Smash Picanha"), categoryId: CAT.lanches },
   { nome: "Smash Burger Truffle", descricao: "Blend bovino, queijo brie, cogumelo salteado e maionese trufada.", preco: 42.90, imageUrl: img("Lanche", "Smash Truffle"), categoryId: CAT.lanches },
   { nome: "Chicken Crispy Artesanal", descricao: "Frango marinado em buttermilk, empanado na farinha temperada, cheddar, coleslaw e pickle no brioche.", preco: 32.90, imageUrl: img("Lanche", "Chicken Crispy"), categoryId: CAT.lanches },
   { nome: "Chicken Nashville Hot", descricao: "Frango frito apimentado ao estilo Nashville, mel, pickle e pão de leite tostado.", preco: 33.90, imageUrl: img("Lanche", "Nashville"), categoryId: CAT.lanches },
   { nome: "Chicken Bacon Ranch", descricao: "Frango grelhado, bacon, queijo cheddar, alface, tomate e molho ranch artesanal.", preco: 31.90, imageUrl: img("Lanche", "Bacon Ranch"), categoryId: CAT.lanches },
   { nome: "Chicken Parmegiana Burger", descricao: "Frango empanado, molho de tomate, mussarela derretida e manjericão no brioche.", preco: 33.90, imageUrl: img("Lanche", "Parmegiana"), categoryId: CAT.lanches },
   { nome: "Chicken com Guacamole", descricao: "Frango grelhado, guacamole fresco, pico de gallo, jalapeño e tortilla crocante.", preco: 34.90, imageUrl: img("Lanche", "Guacamole"), categoryId: CAT.lanches },
   { nome: "The Monster Burger", descricao: "Triplo blend bovino, 3 queijos cheddar, 3 fatias de bacon, ovo frito e molho da casa.", preco: 52.90, imageUrl: img("Lanche", "Monster"), categoryId: CAT.lanches },
   { nome: "Burger Vegano de Grão-de-Bico", descricao: "Hambúrguer artesanal de grão-de-bico, queijo vegano, alface, tomate e maionese de ervas.", preco: 28.90, imageUrl: img("Lanche", "Vegano"), categoryId: CAT.lanches },
   { nome: "Burger de Salmão", descricao: "Hambúrguer de salmão temperado, cream cheese, pepino e dill no pão pretzel.", preco: 38.90, imageUrl: img("Lanche", "Salmão"), categoryId: CAT.lanches },
   { nome: "Burger Mineiro", descricao: "Blend bovino, queijo minas artesanal, couve crocante, bacon e geleia de pimenta doce.", preco: 36.90, imageUrl: img("Lanche", "Mineiro"), categoryId: CAT.lanches },
   { nome: "Burger Nordestino", descricao: "Blend bovino, carne do sol desfiada, queijo coalho, baião de dois e vinagrete.", preco: 38.90, imageUrl: img("Lanche", "Nordestino"), categoryId: CAT.lanches },
   { nome: "Hot Dog Artesanal New Yorker", descricao: "Salsicha de carne artesanal, mostarda amarela, ketchup, cebola crua e relish de pepino.", preco: 22.90, imageUrl: img("Hot Dog", "New Yorker"), categoryId: CAT.lanches },
   { nome: "Hot Dog Chicago", descricao: "Salsicha artesanal, mostarda amarela, cebola, tomate, pickle e pimenta sport no pão poppy seed.", preco: 24.90, imageUrl: img("Hot Dog", "Chicago"), categoryId: CAT.lanches },
   { nome: "Hot Dog Cheddar Bacon", descricao: "Salsicha artesanal, cheddar cremoso e bacon crocante no pão de leite tostado.", preco: 24.90, imageUrl: img("Hot Dog", "Cheddar Bacon"), categoryId: CAT.lanches },
   { nome: "Hot Dog BBQ Caipira", descricao: "Salsicha defumada artesanal, molho barbecue, coleslaw e jalapeño.", preco: 25.90, imageUrl: img("Hot Dog", "BBQ"), categoryId: CAT.lanches },
   { nome: "Club Sandwich Artesanal", descricao: "Peito de peru, queijo suíço, bacon, ovo, alface, tomate em três camadas de pão de forma tostado.", preco: 29.90, imageUrl: img("Sanduíche", "Club"), categoryId: CAT.lanches },
   { nome: "Bauru Artesanal", descricao: "Rosbife bovino, queijo derretido, tomate e pepino no pão francês crocante.", preco: 25.90, imageUrl: img("Sanduíche", "Bauru"), categoryId: CAT.lanches },
   { nome: "Misto Quente Gourmet", descricao: "Presunto de parma, queijo brie e geléia de figo no pão de forma artesanal tostado.", preco: 22.90, imageUrl: img("Sanduíche", "Misto"), categoryId: CAT.lanches },
   { nome: "Wrap de Frango Grelhado", descricao: "Frango grelhado, cream cheese, tomate, alface, cenoura ralada em tortilha de espinafre.", preco: 24.90, imageUrl: img("Wrap", "Frango"), categoryId: CAT.lanches },
   { nome: "Wrap Vegetariano com Homus", descricao: "Homus, legumes assados, queijo de cabra e rúcula em tortilha integral.", preco: 23.90, imageUrl: img("Wrap", "Vegetariano"), categoryId: CAT.lanches },
   { nome: "Batata Frita Crocante (200g)", descricao: "Batata frita palito crocante, temperada com flor de sal e ervas. Porção 200g.", preco: 14.90, imageUrl: img("Acompanhamento", "Batata"), categoryId: CAT.lanches },
   { nome: "Batata Frita com Cheddar e Bacon", descricao: "Batata frita coberta com cheddar cremoso e bacon crocante. Porção 200g.", preco: 21.90, imageUrl: img("Acompanhamento", "Cheddar Bacon"), categoryId: CAT.lanches },
   { nome: "Onion Rings com Molho Ranch", descricao: "Anéis de cebola empanados crocantes com molho ranch artesanal. Porção 200g.", preco: 18.90, imageUrl: img("Acompanhamento", "Onion Rings"), categoryId: CAT.lanches },
   { nome: "Nuggets de Frango Artesanal (10un)", descricao: "10 nuggets de frango artesanal empanados, crocantes por fora e macios por dentro.", preco: 19.90, imageUrl: img("Acompanhamento", "Nuggets"), categoryId: CAT.lanches },
   { nome: "Maionese da Casa (150ml)", descricao: "Maionese artesanal temperada com alho, ervas e um toque de limão. Pote 150ml.", preco: 7.90, imageUrl: img("Molho", "Maionese"), categoryId: CAT.lanches },
   { nome: "Molho Barbecue Artesanal (150ml)", descricao: "Molho barbecue defumado feito na casa com melaço, vinagre e páprica. Pote 150ml.", preco: 7.90, imageUrl: img("Molho", "BBQ"), categoryId: CAT.lanches },
];

// ═══════════════════════════════════════════════════════════════════════════
// 🍗 PORÇÕES (30)
// ═══════════════════════════════════════════════════════════════════════════
const porcoes = [
   { nome: "Porção de Frango Frito (6 pedaços)", descricao: "6 pedaços de frango frito crocante, marinado em buttermilk e temperos. Acompanha molho.", preco: 35.90, imageUrl: img("Porção", "Frango Frito"), categoryId: CAT.porcoes },
   { nome: "Porção de Frango Grelhado (6 pedaços)", descricao: "6 pedaços de frango grelhado temperado com ervas. Acompanha molho de iogurte.", preco: 33.90, imageUrl: img("Porção", "Frango Grelhado"), categoryId: CAT.porcoes },
   { nome: "Porção de Coxinha de Frango (8un)", descricao: "8 coxinhas artesanais de massa macia recheadas com frango e catupiry. Porcão.", preco: 32.90, imageUrl: img("Porção", "Coxinha"), categoryId: CAT.porcoes },
   { nome: "Porção de Frango Búfalo (10 pedaços)", descricao: "10 wings de frango ao molho búfalo picante com queijo gorgonzola. Porção.", preco: 38.90, imageUrl: img("Porção", "Bufalo"), categoryId: CAT.porcoes },
   { nome: "Porção de Nuggets de Frango (15un)", descricao: "15 nuggets artesanais de frango empanados crocantes com molhos à escolha.", preco: 28.90, imageUrl: img("Porção", "Nuggets"), categoryId: CAT.porcoes },
   { nome: "Porção de Sticks de Frango (10un)", descricao: "10 tiras de filé de frango empanado crocante com molho honey mustard.", preco: 29.90, imageUrl: img("Porção", "Sticks"), categoryId: CAT.porcoes },
   { nome: "Porção de Batata Frita (400g)", descricao: "Batata frita palito 400g, bem crocante, temperada com flor de sal.", preco: 24.90, imageUrl: img("Porção", "Batata"), categoryId: CAT.porcoes },
   { nome: "Porção Batata Cheddar e Bacon", descricao: "Batata frita 400g coberta com cheddar cremoso quente e bacon crocante.", preco: 32.90, imageUrl: img("Porção", "Cheddar Bacon"), categoryId: CAT.porcoes },
   { nome: "Porção Batata Rústica com Alecrim", descricao: "Batata rústica assada com casca, alecrim fresco, alho e azeite extra virgem. 400g.", preco: 26.90, imageUrl: img("Porção", "Batata Rústica"), categoryId: CAT.porcoes },
   { nome: "Porção Batata Doce Frita (300g)", descricao: "Batata doce frita crocante com flor de sal e molho de iogurte grego. 300g.", preco: 23.90, imageUrl: img("Porção", "Batata Doce"), categoryId: CAT.porcoes },
   { nome: "Loaded Fries Completo", descricao: "Batata frita, cheddar, bacon, cebola caramelizada, jalapeño e sour cream. 400g.", preco: 36.90, imageUrl: img("Porção", "Loaded"), categoryId: CAT.porcoes },
   { nome: "Porção de Fish & Chips", descricao: "Filé de peixe (tilápia) empanado em massa inglesa, batata frita e molho tártaro.", preco: 36.90, imageUrl: img("Porção", "Fish"), categoryId: CAT.porcoes },
   { nome: "Porção de Camarão à Milanesa (250g)", descricao: "Camarão médio empanado frito, acompanha molho tártaro e limão. 250g.", preco: 44.90, imageUrl: img("Porção", "Camarão"), categoryId: CAT.porcoes },
   { nome: "Porção de Tilápia Frita (400g)", descricao: "Filé de tilápia frito crocante temperado com limão e ervas. 400g.", preco: 32.90, imageUrl: img("Porção", "Tilápia"), categoryId: CAT.porcoes },
   { nome: "Porção de Bolinho de Bacalhau (8un)", descricao: "8 bolinhos artesanais de bacalhau com ervas e azeite. Acompanha aioli.", preco: 38.90, imageUrl: img("Porção", "Bacalhau"), categoryId: CAT.porcoes },
   { nome: "Porção Onion Rings (300g)", descricao: "Anéis de cebola empanados crocantes na massa de cerveja. 300g com molho ranch.", preco: 24.90, imageUrl: img("Porção", "Onion Rings"), categoryId: CAT.porcoes },
   { nome: "Porção Mozzarella Sticks (8un)", descricao: "8 bastões de mussarela empanados fritos, acompanha molho de tomate defumado.", preco: 28.90, imageUrl: img("Porção", "Mozzarella"), categoryId: CAT.porcoes },
   { nome: "Porção de Jalapeño Poppers (8un)", descricao: "8 jalapeños recheados com cream cheese e empanados crocantes.", preco: 26.90, imageUrl: img("Porção", "Jalapeño"), categoryId: CAT.porcoes },
   { nome: "Porção de Bolinha de Queijo (10un)", descricao: "10 bolinhas de queijo coalho empanadas e fritas com orégano. Molho de pimenta.", preco: 22.90, imageUrl: img("Porção", "Bolinha Queijo"), categoryId: CAT.porcoes },
   { nome: "Porção de Costelinha BBQ (500g)", descricao: "Costela suína grelhada com molho barbecue artesanal. 500g, serve 1-2 pessoas.", preco: 44.90, imageUrl: img("Porção", "Costelinha"), categoryId: CAT.porcoes },
   { nome: "Porção Picanha Grelhada (300g)", descricao: "Picanha bovina grelhada ao ponto, com chimichurri e farofa tostada. 300g.", preco: 49.90, imageUrl: img("Porção", "Picanha"), categoryId: CAT.porcoes },
   { nome: "Porção de Espetinhos Mistos (4un)", descricao: "4 espetinhos mistos: frango, linguiça, coração e picanha. Acompanha vinagrete.", preco: 34.90, imageUrl: img("Porção", "Espetinhos"), categoryId: CAT.porcoes },
   { nome: "Porção de Fraldinha Fatiada (250g)", descricao: "Fraldinha grelhada fatiada com molho de alho e limão. 250g.", preco: 39.90, imageUrl: img("Porção", "Fraldinha"), categoryId: CAT.porcoes },
   { nome: "Porção de Linguiça Artesanal (300g)", descricao: "Linguiça artesanal de porco grelhada fatiada, com mostarda dijon e pão rústico.", preco: 29.90, imageUrl: img("Porção", "Linguiça"), categoryId: CAT.porcoes },
   { nome: "Porção Mista do Chefe (Para 2)", descricao: "Frango frito, costelinha BBQ, batata frita, onion rings e molhos da casa. Para 2.", preco: 69.90, imageUrl: img("Porção", "Mista 2"), categoryId: CAT.porcoes },
   { nome: "Porção Mista Para 4 (Petisco)", descricao: "Batata frita, nuggets, onion rings, bolinha de queijo, frango frito e molhos. Para 4.", preco: 119.90, imageUrl: img("Porção", "Mista 4"), categoryId: CAT.porcoes },
   { nome: "Porção Vegana (300g)", descricao: "Batata doce, grão-de-bico tostado, onion rings, bastões de cenoura e homus.", preco: 28.90, imageUrl: img("Porção", "Vegana"), categoryId: CAT.porcoes },
   { nome: "Porção de Polenta Frita (300g)", descricao: "Polenta frita crocante com parmesão e molho de tomate rústico. 300g.", preco: 21.90, imageUrl: img("Porção", "Polenta"), categoryId: CAT.porcoes },
   { nome: "Porção de Mandioca Frita (400g)", descricao: "Mandioca cozida e frita com manteiga de ervas e flor de sal. 400g.", preco: 22.90, imageUrl: img("Porção", "Mandioca"), categoryId: CAT.porcoes },
   { nome: "Porção de Pão de Alho Artesanal (6un)", descricao: "6 fatias de pão italiano com pasta de alho e ervas, gratinadas com parmesão.", preco: 19.90, imageUrl: img("Porção", "Pão Alho"), categoryId: CAT.porcoes },
];

// ═══════════════════════════════════════════════════════════════════════════
// 📦 TOTAL: 53 + 50 + 40 + 30 + 40 + 30 + 30 = 273 produtos
// ═══════════════════════════════════════════════════════════════════════════
const produtos = [
   ...pizzas, ...acais, ...marmitas, ...doces, ...bebidas,
   ...lanches, ...porcoes
];

console.log(`\n📦 Total de produtos a cadastrar: ${produtos.length}\n`);

// ═══════════════════════════════════════════════════════════════════════════
// 🚀 FUNÇÃO DE ENVIO
// ═══════════════════════════════════════════════════════════════════════════
async function seed() {
   console.log(`🍽️  Iniciando seed...\n`);

   let sucesso = 0;
   let erros = 0;

   for (let i = 0; i < produtos.length; i++) {
      const produto = produtos[i];

      try {
         const response = await fetch(BASE_URL, {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify(produto),
         });

         if (!response.ok) {
            const erro = await response.text();
            console.error(`❌ [${i + 1}/${produtos.length}] ${response.status} - ${produto.nome}: ${erro.substring(0, 100)}`);
            erros++;
         } else {
            console.log(`✅ [${i + 1}/${produtos.length}] ${produto.nome} criado com sucesso!`);
            sucesso++;
         }
      } catch (error) {
         console.error(`💥 [${i + 1}/${produtos.length}] ${produto.nome}: ${error.message}`);
         erros++;
      }

      // Pequena pausa para não sobrecarregar o servidor
      await new Promise(resolve => setTimeout(resolve, 50));
   }

   console.log(`\n════════════════════════════════════════`);
   console.log(`✅ Sucesso: ${sucesso}`);
   console.log(`❌ Erros: ${erros}`);
   console.log(`📦 Total: ${produtos.length}`);
   console.log(`════════════════════════════════════════\n`);
}

// Executar
seed();