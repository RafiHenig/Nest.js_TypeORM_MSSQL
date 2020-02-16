import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Role {
    @PrimaryColumn()
    name: string;

    constructor(init?: Role) {
        Object.assign(this, init)
    }
}
