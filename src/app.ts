import express from 'express';
import movieController from './controllers/movieController';

const app = express();

app.use(express.json());

app.use(
    '/dev',
    movieController
);

app.all('*', (req, res) => {
    res.status(404).send('Not Found');
});

export default app;