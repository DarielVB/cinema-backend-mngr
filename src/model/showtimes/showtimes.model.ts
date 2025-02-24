import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Movie } from '../movies/movies.model';
import { Room } from '../room/room.model';
import { IShowtime } from './showtime.interface';

@Table({
  tableName: 'showtimes',
  timestamps: false
})
export class Showtime extends Model implements IShowtime{
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  public id!: number;

  @ForeignKey(() => Movie)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'movie_id'
  })
  public movieId!: number;

  @ForeignKey(() => Room)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'room_id'
  })
  public roomId!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  public showtime!: Date;

  @BelongsTo(() => Movie)
  public movie!: Movie;

  @BelongsTo(() => Room)
  public room!: Room;
}