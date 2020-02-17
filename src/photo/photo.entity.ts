import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Portfolio } from '../portfolio/portfolio.entity';
import { Updated_At_Created_At } from '../common/entities/updated_at_created_at.entity';

@Entity()
export class Photo extends Updated_At_Created_At {
  
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
  // constructor(init?: Partial<Photo>) {
  //   Object.assign(this, init)
  // }
}