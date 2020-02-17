import { Controller, Get, UseGuards, Request, Post, Session, SetMetadata } from '@nestjs/common';
import { LoginGuard } from './guards/login.guard';
import { Roles } from '../role/role.decorator';
import { UserDTO } from '../user/dto/user.dto';
import { User } from '../../common/decorators/user.decorator';

@Controller('auth')
export class AuthController {

    @UseGuards(LoginGuard)
    @Post('login')
    login(@User() user: UserDTO) {
        return user;
    }

    @Roles('Admin')
    @Get('logged')
    async isLogged() { }

    @Roles('Basic', 'Admin')
    @Get('logout')
    async logout(@Request() req) {
        req.logout()
    }
}
