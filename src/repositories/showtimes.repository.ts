import { sequelizePostgreSQL } from "../database/database";
import { IShowtime } from "../model/showtimes/showtime.interface";
import { Showtime } from "../model/showtimes/showtimes.model";

export const showtimeRepository = sequelizePostgreSQL.getRepository(Showtime);

const getShowtimes = async () => {
    console.log('Trying to get showtimes');
    return await showtimeRepository.findAll();
}

const createShowtime = async (showtime: IShowtime) => {
    console.log('Trying to create showtime');
    const showtimeObject = {
        movieId: showtime.movieId,
        roomId: showtime.roomId,
        showtime: showtime.showtime
    };
    return await showtimeRepository.create(showtimeObject);
}

const ShowtimeRepository = {
    getShowtimes,
    createShowtime,
}

export default ShowtimeRepository;