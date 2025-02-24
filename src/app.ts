import express from 'express';
import movieController from './controllers/movieController';
import roomController from './controllers/roomController';
import showtimesController from './controllers/showtimes.controller';

const app = express();

app.use(express.json());

app.use(
    '/dev',
    movieController,
    roomController,
    showtimesController,
);

app.all('*', (req, res) => {
    res.status(404).send('Not Found');
});

export default app;