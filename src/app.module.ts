import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { AppController } from './app.controller';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';

// const typeOrmModuleOptions: TypeOrmModuleOptions = {
//   type: 'mssql',
//   host: 'localhost',
//   username: '{USER_NAME}',
//   password: '********',
//   database: '{DATABASE}',
//   synchronize: true,
//   entities: ["dist/**/*.entity.js"],
//   options: {
//     "encrypt": false,
//     "enableArithAbort": true
//   },
// } as TypeOrmModuleOptions;


@Module({
  imports: [
    // TypeOrmModule.forRoot(typeOrmModuleOptions), // Use this as alternative option instead of using ormconfig.json
    TypeOrmModule.forRoot(),
    PhotoModule,
    PortfolioModule,
    AuthModule,
    UserModule,
    RoleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
