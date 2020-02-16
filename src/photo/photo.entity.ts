import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Portfolio } from '../portfolio/portfolio.entity';

@Entity()
export class Photo {
  constructor(init?: Partial<Photo>) {
    Object.assign(this, init)
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column()
  mainPhoto: boolean;

  @ManyToOne(() => Portfolio, porfolio => porfolio.photos)
  portfolio: Portfolio

}