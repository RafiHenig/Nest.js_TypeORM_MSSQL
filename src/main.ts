import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Repository, getRepository } from 'typeorm';
import { TypeormStore } from 'typeorm-store';
import * as session from 'express-session';
import * as passport from 'passport';
import { ValidationPipe } from '@nestjs/common';
import { Session } from './authentication/auth/session.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const repository: Repository<Session> = getRepository(Session);

  app.use(
    session({
      secret: 'nest cats',
      resave: false,
      saveUninitialized: false,
      store: new TypeormStore({ repository }),
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
