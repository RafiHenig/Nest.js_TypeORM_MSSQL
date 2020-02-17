import { Controller, Post, Query, Get, Param } from '@nestjs/common';
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

    @Roles("Admin")
    @Get()
    async getAll() {
        return await this.roleService.getAll();
    }

    @Roles("Admin")
    @Get(":name")
    async getById(@Param("name") name: string) {
        return await this.roleService.getById(name)
    }


}
