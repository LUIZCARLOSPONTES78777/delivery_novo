import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes/index.js";
import path from "path";
import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.use(helmet());

server.use(cors({
   origin: "*"
}));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(express.static(
   path.resolve(process.cwd(), "public")
));

server.use(routes);

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
   console.log(`Server rodando na porta ${PORT}`);
});

console.log('ANUBIS_PUBLIC_KEY carregada:', process.env.PUBLIC_KEY ? 'SIM' : 'NÃO');