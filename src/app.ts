import express from 'express';
import movieController from './controllers/movieController';

const app = express();

app.use(
    movieController
);

export default app;