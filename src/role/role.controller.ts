import { Controller, Post, Query } from '@nestjs/common';
import { Roles } from './role.decorator';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
    constructor(private readonly roleService: RoleService) { }

    @Roles("Admin")
    @Post()
    async create(@Query("name") name: string) {
        await this.roleService.create(name);
        return "Role Created."
    }
}
