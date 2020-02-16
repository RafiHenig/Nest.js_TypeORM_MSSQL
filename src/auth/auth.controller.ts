import { Controller, Get, UseGuards, Request, Post, Session, SetMetadata } from '@nestjs/common';
import { LoginGuard } from '../common/guards/login.guard';
import { User } from '../common/decorators/user.decorator';
import { Roles } from '../role/role.decorator';
import { UserDTO } from '../user/dto/user.dto';

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
