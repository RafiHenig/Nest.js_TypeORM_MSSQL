import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioDTO } from './portfolio.dto';

@Controller('portfolio')
export class PortfolioController {
    constructor(private readonly portfolioService: PortfolioService) { }

    @Post()
    async  create(@Body() x: PortfolioDTO) {
        return await this.portfolioService.create(x)
    }
}
