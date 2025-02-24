import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'rooms',
  timestamps: false,
})
export class Room extends Model {
  @Column({
    allowNull: false,
    type: DataType.STRING(100),
  })
  public name!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  public capacity!: number;

  @Column({
    allowNull: false,
    type: DataType.CHAR(1),
  })
  public maxRow!: string;
}