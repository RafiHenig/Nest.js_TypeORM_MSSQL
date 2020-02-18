import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, Unique, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { randomBytes, pbkdf2Sync } from "crypto";
import { Role } from "../role/role.entity";
import { Updated_At_Created_At } from "../common/entities/updated_at_created_at.entity";

@Entity()
@Unique(["email"])
export class User extends Updated_At_Created_At {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public email: string;

    @Column()
    public username: string;

    @Column({ type: "nvarchar", length: "MAX" })
    public hash: string;

    @Column({ type: "nvarchar", length: "MAX" })
    public salt: string;

    @ManyToMany(() => Role, role => role.users, { cascade: ["insert", "update"] })
    @JoinTable()
    public roles: Role[];

    public setPassword(password: string): void {
        this.salt = randomBytes(16).toString('hex');
        this.hash = pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    }

    public validatePassword(password: string): boolean {
        const hash = pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
        return this.hash === hash;
    }

    constructor(init?: Partial<User>) {
        super()
        Object.assign(this, init)
    }
}