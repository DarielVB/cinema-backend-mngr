import { Router } from "express";
import ShowtimeService from "../services/showtimes.service";
import { IShowtime } from "../model/showtimes/showtime.interface";

const showtimesController = Router();

showtimesController.get('/getShowtimes', async (req, res) => {
    try {
        console.log('Getting showtimes');
        const showtimes = await ShowtimeService.getShowtimes();
        res.status(200).json({ message: "Get showtimes", data: showtimes });
    } catch (error) {
        res.status(500).json({ message: "Error getting showtimes", error: error });
    }
});

showtimesController.post('/createShowtime', async (req, res) => {
    try {
        console.log('Creating showtime');
        const body: IShowtime = req.body;
        const showtime = await ShowtimeService.createShowtime(body);
        res.status(200).json({ message: "Create showtime", data: showtime });
    }
    catch (error) {
        res.status(500).json({ message: "Error creating showtime", error: error });
    }
});

export default showtimesController;