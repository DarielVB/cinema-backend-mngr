import express from 'express';
import movieController from './controllers/movieController';
import roomController from './controllers/roomController';
import showtimesController from './controllers/showtimes.controller';
import reservationController from './controllers/reservationController';

const app = express();

app.use(express.json());
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', '*'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.use(
    '/dev',
    movieController,
    roomController,
    showtimesController,
    reservationController,
);

app.all('*', (req, res) => {
    res.status(404).send('Not Found');
});

export default app;