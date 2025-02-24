import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'rooms',
  timestamps: false
})
export class Room extends Model {
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
  public capacity!: number;

  @Column({
    type: DataType.CHAR,
    allowNull: false,
    field: 'max_row'
  })
  public maxRow!: string;
}