// ========== SIMULADOR DE MARKETING PROFISSIONAL ==========
// Notificações genéricas e elegantes para delivery

const MarketingSimulator = {
   // Nomes de clientes (variados)
   nomes: [
      'João', 'Maria', 'Pedro', 'Ana', 'Carlos', 'Juliana', 'Roberto',
      'Fernanda', 'Lucas', 'Patrícia', 'Ricardo', 'Camila', 'Marcos',
      'Beatriz', 'Eduardo', 'Larissa', 'Gustavo', 'Amanda', 'Rafaela',
      'Thiago', 'Vanessa', 'Diego', 'Aline', 'Bruno', 'Cristina',
      'André', 'Letícia', 'Felipe', 'Mariana', 'Rodrigo'
   ],

   // Itens GENCERICOS (apenas o tipo, sem especificações)
   itens: [
      'pizza', 'bebida', 'açaí', 'porção', 'hambúrguer', 'combo',
      'refrigerante', 'suco', 'cerveja', 'água', 'petisco', 'sobremesa',
      'lanche', 'pastel',
   ],

   // Bairros (mais profissionais)
   bairros: [
      'Centro', 'Jardim Paulista', 'Vila Mariana', 'Moema', 'Pinheiros',
      'Butantã', 'Tatuapé', 'Santana', 'Perdizes', 'Barra Funda',
      'Copacabana', 'Botafogo', 'Ipanema', 'Leblon', 'Barra',
      'Savassi', 'Funcionários', 'Lourdes', 'Centro', 'Pampulha'
   ],

   // Inicia o simulador
   init: function () {
      this.criarNotificacoes();
      this.criarIndicadores();
      console.log('🚀 Simulador de marketing profissional iniciado');
   },

   // ========== NOTIFICAÇÕES DE COMPRAS RECENTES ==========
   criarNotificacoes: function () {
      // Cria o container se não existir
      if (!document.getElementById('notificacoes-container')) {
         const container = document.createElement('div');
         container.id = 'notificacoes-container';
         container.style.cssText = `
        position: fixed;
        bottom: 24px;
        left: 24px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 320px;
        pointer-events: none;
      `;
         document.body.appendChild(container);
      }

      // Mostra notificações em intervalos variados (20-40 segundos)
      setInterval(() => {
         this.mostrarNotificacao();
      }, this.randomInt(20000, 40000));

      // Mostra as primeiras notificações
      setTimeout(() => this.mostrarNotificacao(), 3000);
      setTimeout(() => this.mostrarNotificacao(), 8000);
   },

   mostrarNotificacao: function () {
      const container = document.getElementById('notificacoes-container');
      if (!container) return;

      const nome = this.nomes[Math.floor(Math.random() * this.nomes.length)];
      const item = this.itens[Math.floor(Math.random() * this.itens.length)];
      const bairro = this.bairros[Math.floor(Math.random() * this.bairros.length)];
      const minutos = this.randomInt(1, 8);

      // Artigos em português (o/a)
      const artigo = this.getArtigo(item);

      const notificacao = document.createElement('div');
      notificacao.style.cssText = `
      background: white;
      border-radius: 16px;
      padding: 16px 18px;
      box-shadow: 0 15px 30px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05);
      border-left: 4px solid #ef4444;
      animation: slideInLeft 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55), fadeOut 0.3s ease 4.2s forwards;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 14px;
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(239, 68, 68, 0.15);
      width: 100%;
      pointer-events: auto;
    `;

      // Escolhe ícone baseado no item
      const icone = this.getIcone(item);

      notificacao.innerHTML = `
      <div style="width: 40px; height: 40px; background: #fee2e2; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #ef4444; font-size: 20px; flex-shrink: 0;">${icone}</div>
      <div style="flex: 1;">
        <div style="display: flex; align-items: baseline; gap: 6px; flex-wrap: wrap;">
          <strong style="color: #0f172a; font-size: 15px;">${nome}</strong>
          <span style="color: #64748b; font-size: 13px;">pediu</span>
        </div>
        <div style="color: #0f172a; font-weight: 600; margin: 4px 0 2px; font-size: 15px;">
          ${artigo} ${item}
        </div>
        <div style="color: #94a3b8; font-size: 12px; display: flex; align-items: center; gap: 6px;">
          <span>📍 ${bairro}</span>
          <span>•</span>
          <span>⏱️ ${minutos} ${minutos === 1 ? 'min' : 'mins'}</span>
        </div>
      </div>
    `;

      container.appendChild(notificacao);

      // Remove após 4.5 segundos
      setTimeout(() => {
         if (notificacao.parentNode) {
            notificacao.style.animation = 'fadeOut 0.3s ease forwards';
            setTimeout(() => {
               if (notificacao.parentNode) notificacao.remove();
            }, 300);
         }
      }, 4500);
   },

   // ========== INDICADORES DE MOVIMENTO ==========
   criarIndicadores: function () {
      // Indicador de pedidos em andamento
      this.criarIndicadorPedidos();

      // Indicador de entregadores
      this.criarIndicadorEntregadores();

      // Badges de "mais pedido" nos produtos
      this.adicionarBadgesProdutos();
   },

   criarIndicadorPedidos: function () {
      const indicador = document.createElement('div');
      indicador.id = 'indicador-pedidos';
      indicador.style.cssText = `
      position: fixed;
      top: 100px;
      right: 24px;
      background: white;
      border-radius: 50px;
      padding: 12px 20px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      border: 1px solid #e2e8f0;
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.95);
      z-index: 50;
      animation: slideInRight 0.5s ease;
    `;

      const pedidosHoje = this.randomInt(47, 186);
      const entregadores = this.randomInt(8, 23);

      indicador.innerHTML = `
      <div style="background: #ef4444; width: 10px; height: 10px; border-radius: 50%; animation: pulse 1.5s infinite;"></div>
      <div>
        <strong style="color: #0f172a; font-size: 16px;">${pedidosHoje}</strong>
        <span style="color: #64748b;"> pedidos hoje</span>
      </div>
      <div style="width: 1px; height: 20px; background: #e2e8f0;"></div>
      <div>
        <strong style="color: #0f172a;">${entregadores}</strong>
        <span style="color: #64748b;"> entregadores</span>
      </div>
    `;

      document.body.appendChild(indicador);

      // Atualiza os números a cada 2 minutos
      setInterval(() => {
         const novoPedidos = this.randomInt(47, 186);
         const novoEntregadores = this.randomInt(8, 23);
         indicador.innerHTML = `
        <div style="background: #ef4444; width: 10px; height: 10px; border-radius: 50%; animation: pulse 1.5s infinite;"></div>
        <div>
          <strong style="color: #0f172a; font-size: 16px;">${novoPedidos}</strong>
          <span style="color: #64748b;"> pedidos hoje</span>
        </div>
        <div style="width: 1px; height: 20px; background: #e2e8f0;"></div>
        <div>
          <strong style="color: #0f172a;">${novoEntregadores}</strong>
          <span style="color: #64748b;"> entregadores</span>
        </div>
      `;
      }, 120000);
   },

   criarIndicadorEntregadores: function () {
      // Já incluído no indicador acima
   },

   adicionarBadgesProdutos: function () {
      // Adiciona badges de "Mais pedido" e "Alta demanda" nos produtos
      setInterval(() => {
         document.querySelectorAll('.product-card').forEach((card, index) => {
            // Remove badges antigos
            const badgeAntigo = card.querySelector('.demand-badge');
            if (badgeAntigo) badgeAntigo.remove();

            // Adiciona badge em alguns produtos aleatórios
            if (Math.random() > 0.7) {
               const badge = document.createElement('div');
               badge.className = 'demand-badge';

               const tipos = ['🔥 Mais pedido', '⚡ Alta demanda', '⭐ Popular', '📦 Últimas unidades'];
               const texto = tipos[Math.floor(Math.random() * tipos.length)];

               let bgColor = '#ef4444';
               if (texto.includes('Popular')) bgColor = '#3b82f6';
               if (texto.includes('Alta')) bgColor = '#f97316';
               if (texto.includes('Últimas')) bgColor = '#8b5cf6';

               badge.style.cssText = `
            position: absolute;
            top: 10px;
            left: 10px;
            background: ${bgColor};
            color: white;
            padding: 4px 10px;
            border-radius: 30px;
            font-size: 11px;
            font-weight: 600;
            box-shadow: 0 4px 12px ${bgColor}40;
            z-index: 5;
            letter-spacing: 0.3px;
          `;
               badge.textContent = texto;

               const imgContainer = card.querySelector('.relative');
               if (imgContainer) {
                  imgContainer.appendChild(badge);
               }
            }
         });
      }, 45000); // Atualiza a cada 45 segundos
   },

   // ========== UTILITÁRIOS ==========
   getArtigo: function (item) {
      const femininos = ['pizza', 'bebida', 'porção', 'cerveja', 'água', 'sobremesa', 'tapioca'];
      return femininos.includes(item) ? 'uma' : 'um';
   },

   getIcone: function (item) {
      const icones = {
         'pizza': '🍕',
         'bebida': '🥤',
         'açaí': '🍨',
         'porção': '🍟',
         'hambúrguer': '🍔',
         'combo': '🍱',
         'refrigerante': '🥤',
         'suco': '🧃',
         'cerveja': '🍺',
         'água': '💧',
         'petisco': '🥨',
         'sobremesa': '🍰',
         'lanche': '🥪',
         'pastel': '🥟',
         'caldo': '🥣',
         'espetinho': '🍢',
         'tapioca': '🥞',
         'crepe': '🥙'
      };
      return icones[item] || '🍽️';
   },

   randomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }
};

// ========== ANIMAÇÕES CSS ==========
function adicionarAnimacoesCSS() {
   const style = document.createElement('style');
   style.textContent = `
    @keyframes slideInLeft {
      from {
        transform: translateX(-120%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideInRight {
      from {
        transform: translateX(120%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes fadeOut {
      to {
        opacity: 0;
        transform: translateX(-20px);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.5;
        transform: scale(1.1);
      }
    }
  `;
   document.head.appendChild(style);
}

// ========== INICIALIZAÇÃO ==========
window.addEventListener('load', function () {
   setTimeout(() => {
      adicionarAnimacoesCSS();
      MarketingSimulator.init();
   }, 2000);
});