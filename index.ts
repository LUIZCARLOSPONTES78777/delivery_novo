import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './src/routes/index';

const app = express();
const publicPath = path.join(process.cwd(), 'public');
app.use(cors());
app.use(express.json());
app.use(express.static(publicPath));

app.use('/api', routes);

app.get('/', (req, res) => {
   res.send('FUNCIONANDO');
});

app.get('/ping', (req, res) => {
   res.send('pong');
});

app.listen(3333, () => {
   console.log('🚀 http://localhost:3333');
});