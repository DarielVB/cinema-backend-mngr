import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Showtimes } from '../showtimes/showtimes.model';

@Table({
  tableName: 'reservations',
  timestamps: false,
})
export class Reservation extends Model {
  @Column({
    allowNull: false,
    type: DataType.DECIMAL(10, 0),
  })
  public cc!: number;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  public name!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  public email!: string;

  @ForeignKey(() => Showtimes)
  @Column({
    allowNull: false,
    field: 'showtime_id',
    type: DataType.INTEGER,
  })
  public showtimeId!: number;

  @Column({
    allowNull: false,
    type: DataType.CHAR(3),
  })
  public seatCode!: string;

  @Column({
    allowNull: false,
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  public reservationTime!: Date;

  @Column({
    allowNull: false,
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  public taken!: boolean;

  @BelongsTo(() => Showtimes)
  public showtime!: Showtimes;
}