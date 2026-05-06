import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import fs from "fs";
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const server = express();
const PORT = process.env.PORT || 3333;
// CORS
server.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// Body parser
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// 📁 CAMINHO CORRETO DA PASTA PUBLIC
const publicPath = path.join(process.cwd(), 'public');
// DEBUG (opcional, mas útil)
console.log('📁 Public path:', publicPath);
// 🔥 SERVIR ARQUIVOS ESTÁTICOS
server.use(express.static(publicPath));
// 🚀 ROTAS DA API (prefixo /api)
server.use('/api', routes);
// 🏠 ROTA PRINCIPAL
server.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
// ❤️ HEALTH CHECK
server.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});
// 🔁 FALLBACK SPA (caso use rotas no frontend)
server.use((req, res, next) => {
    if (!req.url.startsWith('/api') && !req.url.includes('.')) {
        res.sendFile(path.join(publicPath, 'index.html'));
    }
    else {
        next();
    }
});
// ▶️ START SERVER
server.listen(PORT, () => {
    console.log(`\n🚀 Servidor rodando em http://localhost:${PORT}`);
});
server.get('/', (req, res) => {
    const filePath = path.join(publicPath, 'index.html');
    console.log('Tentando servir:', filePath);
    if (!fs.existsSync(filePath)) {
        console.error('❌ index.html NÃO EXISTE');
        return res.status(404).send('index.html não encontrado');
    }
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('❌ ERRO AO ENVIAR ARQUIVO:', err);
            res.status(500).send('Erro ao carregar página');
        }
    });
});
