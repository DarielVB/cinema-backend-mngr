import 'reflect-metadata';
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Classification } from '../classification/classification.model';
import { IMovie } from './movies.interface';

@Table({
  tableName: 'movies',
  timestamps: false
})
export class Movie extends Model implements IMovie {
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

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  public duration!: number;

  @ForeignKey(() => Classification)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'classification_id'
  })
  public classificationId!: number;

  @BelongsTo(() => Classification)
  public classification!: Classification;
}