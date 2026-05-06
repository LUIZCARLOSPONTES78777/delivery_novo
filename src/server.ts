import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes/index.js';


const server = express();
const publicPath = path.join(process.cwd(), 'public');
server.use(cors({
   origin: '*'
}));
server.use(express.json());
server.use(express.static(publicPath));

server.use('api', routes);

server.listen(3333, () => {
   console.log('🚀 http://localhost:3333');
});