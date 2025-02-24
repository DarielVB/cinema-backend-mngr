import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Showtime } from '../showtimes/showtimes.model';
import { IReservation } from './reservation.interface';

@Table({
  tableName: 'reservations',
  timestamps: false
})
export class Reservation extends Model<IReservation> implements IReservation {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  public id!: number;

  @Column({
    type: DataType.DECIMAL(10, 0),
    allowNull: false
  })
  public cc!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  public name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  public email!: string;

  @ForeignKey(() => Showtime)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'showtime_id'
  })
  public showtimeId!: number;

  @Column({
    type: DataType.CHAR(3),
    allowNull: false,
    unique: true, // Asegurar unicidad
    field: 'seat_code'
  })
  public seatCode!: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    field: 'reservation_time',
    defaultValue: DataType.NOW
  })
  public reservationTime?: Date;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false
  })
  public taken!: boolean;

  @BelongsTo(() => Showtime)
  public showtime!: Showtime;
}