import { Entity, CreateDateColumn, UpdateDateColumn } from "typeorm";

export class Updated_At_Created_At {
    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}