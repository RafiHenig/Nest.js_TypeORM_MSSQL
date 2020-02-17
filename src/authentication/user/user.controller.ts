import { Controller, Post, Body, Delete, ParseIntPipe, Get, Param } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { Roles } from '../role/role.decorator';
import { AssociateRolesDTO } from './dto/associate-roles.dto';
import { UserDTO } from './dto/user.dto';
import { User as UserEntity } from './user.entity';
import { RoleRegisteredPipe } from '../role/pipes/role-registered.pipe';
import { UserPipe } from './pipes/user.pipe';
import { RoleNotAssociatedPipe } from '../role/pipes/role-not-associated.pipe';
import { RoleAssociatedPipe } from '../role/pipes/role-associated.pipe';
import { User } from '../common/decorators/user.decorator';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Roles("Basic", "Admin")
    @Get()
    async getSession(@User() user: UserDTO) {
        return user;
    }

    @Roles("Admin")
    @Get("all")
    async getAll(): Promise<UserDTO[]> {
        return this.userService.getAll();
    }

    @Roles("Admin")
    @Get(":id")
    async get(@Param('id', ParseIntPipe, UserPipe) user: UserEntity) {
        return user;
    }

    @Roles("Admin")
    @Post()
    async create(@Body() x: CreateUserDTO) {
        await this.userService.createUser(x)
    }

    @Roles("Admin")
    @Delete(":id")
    async delate(@Param('id', ParseIntPipe, UserPipe) user: UserEntity) {
        await this.userService.deleteUser(user);
    }

    @Roles("Admin")
    @Post('associate-roles')
    async associateRoles(
        @Body("userId", UserPipe) user: UserEntity,
        @Body(RoleRegisteredPipe, RoleNotAssociatedPipe) body: AssociateRolesDTO,
    ) {
        await this.userService.associateRoles(body.roles, user);
    }

    @Roles("Admin")
    @Post('disassociate-roles')
    async disassociateRoles(
        @Body("userId", UserPipe) user: UserEntity,
        @Body(RoleRegisteredPipe, RoleAssociatedPipe) body: AssociateRolesDTO,
    ) {
        await this.userService.disassociateRoles(body.roles, user);
    }

}
// if (!id) user.roles = await this.userService.getRoles(user.id);
