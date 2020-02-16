import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Portfolio } from './portfolio.entity';
import { Repository } from 'typeorm';
import { validate, ValidationError } from 'class-validator';
import { PortfolioDTO } from './portfolio.dto';
import { PhotoDto } from '../photo/photo.dto';

@Injectable()
export class PortfolioService {
    constructor(@InjectRepository(Portfolio) private readonly portfolioRepository: Repository<Portfolio>) { }

    async create(portfolioDTO: PortfolioDTO): Promise<Portfolio> {

        return await this.portfolioRepository.save(portfolioDTO);

    }
}
