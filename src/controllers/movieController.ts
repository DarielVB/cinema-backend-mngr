import { Router } from "express";

const movieController = Router();

movieController.get("/getMovies", (req, res) => {
  res.send("Hello World!");
});

export default movieController;