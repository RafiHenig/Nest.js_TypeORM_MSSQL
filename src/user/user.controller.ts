import { Controller, Post, UsePipes, Body, Session, Req, ValidationPipe, Delete, Query, ParseIntPipe, Get } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { Roles } from '../role/role.decorator';
import { AssociateRolesDTO } from './dto/associate-roles.dto';
import { User } from '../common/decorators/user.decorator';
import { RolesExistencePipe } from '../role/pipes/roles-existence.pipe';
import { UserDTO } from './dto/user.dto';
import { Role } from '../role/role.entity';
import passport = require('passport');
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Roles("Admin")
    @Post()
    async create(@Body() x: CreateUserDTO) {
        await this.userService.createUser(x)
    }

    @Roles("Admin")
    @Delete(":id")
    async delate(@Query(ParseIntPipe) id: number) {
        await this.userService.deleteUser(id)
    }

    @Roles("Basic")
    @Get()
    async get(@User() user: UserDTO) {
        return user;
    }

    @Roles("Basic")
    @Post('associate-roles')
    async associateRoles(@User() user: UserDTO, @Body(RolesExistencePipe) associateRolesDTO: AssociateRolesDTO) {
        const x = await this.userService.associateRoles(associateRolesDTO, user);
        user.roles = (await x).roles;
        return "Done";
    }

    @Roles("Admin")
    @Post('disassociate-roles')
    async disassociateRoles(@User() user: UserDTO, @Body(RolesExistencePipe) associateRolesDTO: AssociateRolesDTO) {
        const x = this.userService.disassociateRoles(associateRolesDTO, user);
        user.roles = (await x).roles;
        return "Done";
    }

}
