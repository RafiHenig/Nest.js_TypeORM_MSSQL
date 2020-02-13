import { Module } from '@nestjs/common';
import { PorfolioController } from './porfolio.controller';

@Module({
  controllers: [PorfolioController]
})
export class PortfolioModule {}
