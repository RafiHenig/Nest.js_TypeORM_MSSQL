import { IsString } from "class-validator";
import { Role } from "./role.entity";

export class RoleDTO {
    @IsString()
    name: string;

    constructor(init?: Role) {
        Object.assign(this, init)
    }
}