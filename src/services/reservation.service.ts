import config from "../config";
import { IReservation } from "../model/reservations/reservations.interface";
import ReservationRepository from "../repositories/reservation.repository";
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: config.AWS_ACCESS_KEY_ID_lambda,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY_lambda,
    region: 'us-east-2'
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

export default class ReservationService {
    public static async getReservations() {
        return await ReservationRepository.getReservations();
    }
    
    public static async getReservationsByShowTimeId(showTimeId: number) {
        return await ReservationRepository.getReservationsByShowTimeId(showTimeId);
    }
    
    public static async createReservation(reservation: IReservation) {
        if (!this.isValidEmail(reservation.email)) {
            throw new Error('Invalid email format');
        }
        const createdReservation = await ReservationRepository.createReservation(reservation);
        await this.sendConfirmationEmail(reservation.email, createdReservation);
        return createdReservation;
    }

    private static isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    private static async sendConfirmationEmail(email: string, reservation: IReservation) {
        const params = {
            Destination: {
                ToAddresses: [email]
            },
            Message: {
                Body: {
                    Text: {
                        Charset: "UTF-8",
                        Data: `Your reservation has been confirmed. Details: ${JSON.stringify(reservation)}`
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'Reservation Confirmation'
                }
            },
            Source: 'darielvb8520@outlook.com',
        };

        try {
            await ses.sendEmail(params).promise();
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email', error);
        }
    }
}