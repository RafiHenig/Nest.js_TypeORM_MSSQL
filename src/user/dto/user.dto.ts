import { Role } from "../../role/role.entity";

export class UserDTO {
    id: number;
    email: string;
    username: string;
    roles: Role[]
}