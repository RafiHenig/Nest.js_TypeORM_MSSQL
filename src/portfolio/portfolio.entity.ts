import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Photo } from "../photo/photo.entity";
import { Updated_At_Created_At } from "../common/entities/updated_at_created_at.entity";

@Entity()
export class Portfolio extends Updated_At_Created_At{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    subTitle: string;

    @OneToMany(() => Photo, photo => photo.portfolio, { cascade: true })
    photos: Photo[];
}