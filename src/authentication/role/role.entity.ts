import { Entity, PrimaryColumn, ManyToMany } from "typeorm";
import { User } from "../user/user.entity";
import { Updated_At_Created_At } from "../common/entities/updated_at_created_at.entity";

@Entity()
export class Role extends Updated_At_Created_At {
    @PrimaryColumn()
    name: string;

    @ManyToMany(() => User, user => user.roles)
    users?: User[];

    constructor(init?: Partial<Role>) {
        super()
        Object.assign(this, init)
    }
}
// @CreateDateColumn()
// createdAt: string;

// @UpdateDateColumn()
// updatedAt: string;
// .getRepository(Role)
//     .createQueryBuilder("role")
//     .leftJoin("role.users", "user")
//     .where("user.id = :id", { id: 1 })
//     .getMany();

