import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();
const PORT = process.env.PORT || 3333;

// Middleware de log para debug
server.use((req, res, next) => {
   console.log(`${req.method} ${req.url}`);
   next();
});

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Pasta pública
const publicPath = path.join(__dirname, '..', 'public');
console.log(`📁 Public folder: ${publicPath}`);
console.log(`📁 Existe? ${fs.existsSync(publicPath)}`);

if (fs.existsSync(publicPath)) {
   console.log(`📄 Arquivos: ${fs.readdirSync(publicPath).join(', ')}`);
   server.use(express.static(publicPath));
} else {
   console.error(`❌ Pasta public não encontrada!`);
}

// Rota raiz explícita
server.get('/', (req, res) => {
   const indexPath = path.join(publicPath, 'index.html');
   console.log(`🏠 Servindo página inicial: ${indexPath}`);

   if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
   } else {
      res.status(404).send(`
            <h1>index.html não encontrado</h1>
            <p>Caminho procurado: ${indexPath}</p>
            <p>Conteúdo da pasta public: ${fs.existsSync(publicPath) ? fs.readdirSync(publicPath).join(', ') : 'pasta não existe'}</p>
        `);
   }
});

// Suas rotas da API (com prefixo /api)
import routes from './routes/index.js';
server.use('/api', routes);

// Rota de saúde
server.get('/health', (req, res) => {
   res.json({ status: 'ok', timestamp: new Date() });
});

// Fallback para SPA (apenas para rotas que não são API)
server.use((req, res, next) => {
   if (!req.url.startsWith('/api') && !req.url.includes('.')) {
      const indexPath = path.join(publicPath, 'index.html');
      if (fs.existsSync(indexPath)) {
         res.sendFile(indexPath);
      } else {
         next();
      }
   } else {
      next();
   }
});

server.listen(PORT, () => {
   console.log(`\n🚀 Servidor rodando em http://localhost:${PORT}`);
   console.log(`✅ Acesse: http://localhost:${PORT}\n`);
});