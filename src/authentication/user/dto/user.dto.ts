import { IsNumber, IsEmail, IsString, IsOptional, IsArray, ValidateNested, validate } from "class-validator";
import { Type, plainToClass } from "class-transformer";
import { RoleDTO } from "../../role/role.dto";
import { User } from "../user.entity";

export class UserDTO {
    @IsNumber()
    id: number;

    @IsEmail()
    email: string;

    @IsString()
    username: string;

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RoleDTO)
    roles: RoleDTO[]

    static async toDto(x: User): Promise<UserDTO> {
        const user = plainToClass(this, x)
        await validate(user, { whitelist: true });
        return user;
    }
    static async toDtos(x: User[]): Promise<UserDTO[]> {
        const users = x.map(x => plainToClass(this, x));
        await Promise.all(users.map(x => validate(x, { whitelist: true })));
        return users;
    }
}