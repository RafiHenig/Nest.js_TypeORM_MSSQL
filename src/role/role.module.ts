import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './role.entity'
import { RoleService } from './role.service';
import { UserModule } from '../user/user.module';
import { RoleController } from './role.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Role]),
        forwardRef(() => UserModule),
    ],
    exports: [TypeOrmModule, RoleService],
    providers: [RoleService],
    controllers: [RoleController]
})
export class RoleModule { }
