import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { EventsModule } from './socket/events/events.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
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
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client'),
    }),
    PhotoModule,
    PortfolioModule,
    AuthenticationModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
