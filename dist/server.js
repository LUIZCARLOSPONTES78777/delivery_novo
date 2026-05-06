import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes/index.js";
import path from "path";
import dotenv from 'dotenv';
dotenv.config();
const server = express();
server.use(helmet({
    contentSecurityPolicy: {
        useDefaults: false,
        directives: {
            defaultSrc: ["*"],
            scriptSrc: ["*", "'unsafe-inline'", "'unsafe-eval'"],
            scriptSrcAttr: ["*", "'unsafe-inline'"],
            styleSrc: ["*", "'unsafe-inline'"],
            imgSrc: ["*", "data:", "blob:", "*"],
            connectSrc: ["*"],
            fontSrc: ["*"],
            objectSrc: ["*"],
            mediaSrc: ["*"],
            frameSrc: ["*"],
        }
    }
}));
server.use(cors({
    origin: [
        "http://127.0.0.1:5500",
        "http://localhost:5500"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: false
}));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.resolve(process.cwd(), "public")));
server.use(routes);
const PORT = process.env.PORT;
try {
    server.listen(PORT, () => {
        console.log(`Server is running in http://localhost${PORT}`);
        console.log(`Api funcionando =D`);
    });
}
catch (e) {
    console.log(e);
}
console.log('ANUBIS_PUBLIC_KEY carregada:', process.env.PUBLIC_KEY ? 'SIM' : 'NÃO');
