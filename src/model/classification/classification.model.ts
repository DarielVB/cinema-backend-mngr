import 'reflect-metadata';
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { IClassification } from './classification.interface';
import { Movie } from '../movies/movies.model';

@Table({
  tableName: 'classifications',
  timestamps: false
})
export class Classification extends Model implements IClassification {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  public id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  public name!: string;

  @HasMany(() => Movie)
  public movies!: Movie[];
}