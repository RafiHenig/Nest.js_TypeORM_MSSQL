import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [
    UserModule,
    RoleModule
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, SessionSerializer]

})
export class AuthModule { }
