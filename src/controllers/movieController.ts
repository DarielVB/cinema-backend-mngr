import { Router } from "express";
import MovieService from "../services/movie.service";

const movieController = Router();

movieController.get("/getMovies", async (req, res) => {
  try {
    const movies = await MovieService.getMovies();
    res.status(200).json({ message: "Get movies", data: movies });
  } catch (error) {
    res.status(500).json({ message: "Error getting movies", error: error });
  }
});

export default movieController;