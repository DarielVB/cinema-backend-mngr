import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Movie } from '../movies/movies.model';
import { Room } from '../room/room.model';

@Table({
  tableName: 'showtimes',
  timestamps: false,
})
export class Showtimes extends Model {
  @ForeignKey(() => Movie)
  @Column({
    allowNull: false,
    field: 'movie_id',
    type: DataType.INTEGER,
  })
  public movieId!: number;

  @ForeignKey(() => Room)
  @Column({
    allowNull: false,
    field: 'room_id',
    type: DataType.INTEGER,
  })
  public roomId!: number;

  @Column({
    allowNull: false,
    field: 'showtime',
    type: DataType.DATE,
  })
  public showtime!: Date;

  @BelongsTo(() => Movie)
  public movie!: Movie;

  @BelongsTo(() => Room)
  public room!: Room;
}