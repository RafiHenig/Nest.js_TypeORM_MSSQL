import { Module } from '@nestjs/common';
import { PortfolioController } from './porfolio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Portfolio } from './portfolio.entity';
import { PortfolioService } from './portfolio.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Portfolio])
  ],
  controllers: [PortfolioController],
  providers: [PortfolioService]
})
export class PortfolioModule { }
