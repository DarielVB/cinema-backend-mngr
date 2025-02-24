import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Classification } from '../classification/classification.model';

@Table({
  tableName: 'movies',
  timestamps: false,
})
export class Movie extends Model {
  @Column({
    allowNull: false,
    type: DataType.STRING,
    unique: true,
  })
  public name!: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
  })
  public duration!: number;

  @ForeignKey(() => Classification)
  @Column({
    allowNull: false,
    field: 'classification_id',
    type: DataType.INTEGER,
  })
  public classificationId!: number;

  @BelongsTo(() => Classification)
  public classification!: Classification;
}