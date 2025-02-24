import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'classification',
  timestamps: false,
})
export class Classification extends Model {
  @Column({
    allowNull: false,
    type: DataType.STRING,
    unique: true,
  })
  public name!: string;
}