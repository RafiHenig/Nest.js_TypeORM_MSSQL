import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [AuthModule, RoleModule, UserModule],
    exports: [AuthModule, RoleModule, UserModule]
})
export class AuthenticationModule { }
