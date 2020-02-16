import { Injectable, BadRequestException, HttpStatus, HttpException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { PhotoDto } from './photo.dto';
import { validateOrReject, validate } from 'class-validator';

@Injectable()
export class PhotoService {
    constructor(@InjectRepository(Photo) private readonly photoRepository: Repository<Photo>) { }

    async createPhoto(photoDto: PhotoDto) {
        const errors = await validate(new PhotoDto(photoDto));
        if (errors?.length) throw new BadRequestException('One or more of the provided values is not valid.');


        const { name, description, filename } = photoDto;


        await this.photoRepository.save({ name, description, filename });

        return "How are you"
    }
}
