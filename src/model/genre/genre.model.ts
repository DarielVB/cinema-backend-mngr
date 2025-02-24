import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { IGenre } from './genre.interface';

@Table({
  tableName: 'genre',
  timestamps: false
})
export class Genre extends Model implements IGenre {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  public id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true
  })
  public name!: string;
}