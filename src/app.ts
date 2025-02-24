import express from 'express';
import movieController from './controllers/movieController';

const app = express();

console.log('Executing app, to api');
app.use(
    movieController
);

export default app;