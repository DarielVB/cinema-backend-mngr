import { IShowtime } from "../model/showtimes/showtime.interface";
import ShowtimeRepository from "../repositories/showtimes.repository";

export default class ShowtimeService {
  public static async getShowtimes() {
    return await ShowtimeRepository.getShowtimes();
  }

  public static async createShowtime(showtime: IShowtime) {
    return await ShowtimeRepository.createShowtime(showtime);
  }

}