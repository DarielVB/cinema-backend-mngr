import { Router } from "express";
import MovieService from "../services/movie.service";
import { IMovie } from "../model/movies/movies.interface";

const movieController = Router();

movieController.get('/getMovies', async (req, res) => {
  try {
    const movies = await MovieService.getMovies();
    res.status(200).json({ message: "Get movies", data: movies });
  } catch (error) {
    res.status(500).json({ message: "Error getting movies", error: error });
  }
});

movieController.post('/createMovie', async (req, res) => {
  try {
    console.log('creating movie');
    const body: IMovie = req.body;
    const movie = await MovieService.createMovie(body);
    res.status(200).json({ message: "Create movie", data: movie });
  } catch (error) {
    res.status(500).json({ message: "Error creating movie", error: error });
  }
});

export default movieController;