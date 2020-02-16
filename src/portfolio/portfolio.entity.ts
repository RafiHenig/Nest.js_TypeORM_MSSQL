import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Photo } from "../photo/photo.entity";


@Entity()
export class Portfolio {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    subTitle: string;

 

    @OneToMany(() => Photo, photo => photo.portfolio, { cascade: true })
    photos: Photo[];
}