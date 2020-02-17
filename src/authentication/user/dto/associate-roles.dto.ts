import { IsNumber, IsArray, ArrayMinSize, IsString, IsOptional } from "class-validator";
import { isatty } from "tty";

export class AssociateRolesDTO {
    @IsNumber()
    @IsOptional()
    userId?: number;

    @IsArray()
    @ArrayMinSize(1)
    @IsString({ each: true })
    roles: string[]

    constructor(init?: AssociateRolesDTO) {
        Object.assign(this, init);
    }
}
