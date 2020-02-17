import { IsEmail, IsString, MinLength, MaxLength, IsArray, ArrayMinSize, ValidateNested } from "class-validator";
import { RoleDTO } from "../../role/role.dto";
import { Type } from "class-transformer";

export class CreateUserDTO {

    constructor(init?: CreateUserDTO) {
        Object.assign(this, init);
    }

    @IsEmail()
    email: string;

    @IsString()
    username: string;

    @IsString()
    @MinLength(8)
    @MaxLength(45)
    password: string;
}