import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
        super({ usernameField: 'email', passwordField: 'password' });
    }

    async validate(email: string, password: string): Promise<User> {
        const user = await this.userRepository.findOne({ relations: ['roles'], where: { email } })
        if (user && user.validatePassword(password)) return user;
        else throw new UnauthorizedException("Wrong login details.");
    }

}