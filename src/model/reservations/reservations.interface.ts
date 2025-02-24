export interface IReservation {
    id: number;
    cc: number;
    name: string;
    email: string;
    showtimeId: number;
    seatCode: string;
    reservationTime?: Date;
    taken: boolean;
  }