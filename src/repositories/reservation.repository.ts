import { sequelizePostgreSQL } from "../database/database";
import { IReservation } from "../model/reservations/reservations.interface";
import { Reservation } from "../model/reservations/reservations.model";

export const reservationRepository = sequelizePostgreSQL.getRepository(Reservation);

const getReservations = async () => {
    console.log('Trying to get reservations');
    return await reservationRepository.findAll();
}

const getReservationsByShowTimeId = async (showTimeId: number) => {
    console.log('Trying to get reservations by showtime id');
    return await reservationRepository.findAll({
        where: {
            showtimeId: showTimeId
        }
    });
}

const createReservation = async (reservation: IReservation) => {
    console.log('Trying to create reservation');
    const reservationObject = {
        cc: reservation.cc,
        name: reservation.name,
        email: reservation.email,
        showtimeId: reservation.showtimeId,
        seatCode: reservation.seatCode,
        reservationTime: reservation.reservationTime,
        taken: reservation.taken
    };
    return await reservationRepository.create(reservationObject);
}

const ReservationRepository = {
    getReservations,
    getReservationsByShowTimeId,
    createReservation,
}

export default ReservationRepository;