import express from 'express';
import movieController from './controllers/movieController';

const app = express();

app.use(express.json());

app.get(
    '/',
    (req, res) => {
        res.send('Hello World!');
    }
);

app.use(
    movieController
);

export default app;