import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Movie } from '../movies/movies.model';
import { Genre } from '../genre/genre.model';
import { IMovieGenre } from './movieGenre.interface';

@Table({
  tableName: 'movie_genres',
  timestamps: false
})
export class MovieGenre extends Model implements IMovieGenre {
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

  @ForeignKey(() => Genre)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'genre_id'
  })
  public genreId!: number;
}