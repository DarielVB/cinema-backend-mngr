import express from 'express';
import movieController from './controllers/movieController';

const app = express();

app.use(express.json());

app.get(
    '/',
    (req, res) => {
        console.log('Hello World!', req.path);
        res.send('Hello World!');
    }
);

app.use(
    movieController
);

export default app;