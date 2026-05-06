import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.resolve(process.cwd(), "public");
console.log("CWD:", process.cwd());
console.log("Public path:", publicPath);
console.log("Public existe?", fs.existsSync(publicPath));

if (fs.existsSync(publicPath)) {
   console.log("Conteúdo:", fs.readdirSync(publicPath));

   // Verifica index.html
   const indexPath = path.join(publicPath, "index.html");
   if (fs.existsSync(indexPath)) {
      console.log("✅ index.html encontrado!");
   } else {
      console.log("❌ index.html NÃO encontrado!");
   }
} else {
   console.log("❌ Pasta public NÃO existe!");
}