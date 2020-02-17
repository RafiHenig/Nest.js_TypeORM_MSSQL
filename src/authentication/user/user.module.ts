import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserController } from './user.controller';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    RoleModule
  ],
  providers: [UserService],
  exports: [
    UserService,
    TypeOrmModule
  ],
  controllers: [UserController]
})
export class UserModule { }
