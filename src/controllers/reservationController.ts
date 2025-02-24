import { Router } from "express";
import ReservationService from "../services/reservation.service";
import { IReservation } from "../model/reservations/reservations.interface";

const reservationController = Router();

reservationController.get('/getReservations', async (req, res) => {
    try {
        console.log('Getting reservations');
        const reservations = await ReservationService.getReservations();
        res.status(200).json({ message: "Get reservations", data: reservations });
    } catch (error) {
        res.status(500).json({ message: "Error getting reservations", error: error });
    }
});

reservationController.get('/getReservationsByShowTimeId/:showTimeId', async (req, res) => {
    try {
        console.log('Getting reservations by showtime id');
        const showTimeId = parseInt(req.params.showTimeId);
        const reservations = await ReservationService.getReservationsByShowTimeId(showTimeId);
        res.status(200).json({ message: "Get reservations by showtime id", data: reservations });
    } catch (error) {
        res.status(500).json({ message: "Error getting reservations by showtime id", error: error });
    }
});

reservationController.post('/createReservation', async (req, res) => {
    try {
        console.log('Creating reservation');
        const body: IReservation = req.body;
        const reservation = await ReservationService.createReservation(body);
        res.status(200).json({ message: "Create reservation", data: reservation });
    } catch (error) {
        res.status(500).json({ message: "Error creating reservation", error: error });
    }
});

export default reservationController;