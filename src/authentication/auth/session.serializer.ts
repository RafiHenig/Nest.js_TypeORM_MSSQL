import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';
import { UserDTO } from '../user/dto/user.dto';

@Injectable()
export class SessionSerializer extends PassportSerializer {
    serializeUser(user: User, done: (err: Error, user: any) => void): any {
        done(null, UserDTO.toDto(user));
    }
    deserializeUser(payload: any, done: (err: Error, payload: string) => void): any {
        done(null, payload);
    }
}