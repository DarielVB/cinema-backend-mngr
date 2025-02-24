import { Router } from "express";
import MovieGenreService from "../services/moviegenre.service";
import { IMovieGenre } from "../model/movieGenre/movieGenre.interface";

const movieGenreController = Router();

movieGenreController.get('/getMovieGenres', async (req, res) => {
    try {
        console.log('Getting movie genres');
        const movieGenres = await MovieGenreService.getMovieGenres();
        res.status(200).json({ message: "Get movies genres", data: movieGenres });
    } catch (error) {
        res.status(500).json({ message: "Error getting movie genres", error: error });
    }
});

movieGenreController.post('/createMovieGenre', async (req, res) => {
    try {
        console.log('Creating movie genre');
        const body: IMovieGenre = req.body;
        const movieGenre = await MovieGenreService.createMovieGenre(body);
        res.status(200).json({ message: "Create movie genre", data: movieGenre });
    }
    catch (error) {
        res.status(500).json({ message: "Error creating movie genre", error: error });
    }
});

export default movieGenreController;