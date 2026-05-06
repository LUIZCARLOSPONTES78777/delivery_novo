import express from "express";
import path from "path";
const app = express();
const PORT = 3333;

import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// Log todas as requisições
app.use((req, res, next) => {
   console.log(`${req.method} ${req.url}`);
   next();
});

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota manual para index.html
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
   console.log(`Test server running at http://localhost:${PORT}`);
   console.log(`Public folder: ${path.join(__dirname, 'public')}`);
});