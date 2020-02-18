import { Controller, Get, Post, Body } from '@nestjs/common';
import { PhotoDto } from './photo.dto';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
    constructor(private readonly photoService: PhotoService) {}
    
    @Post()
    async postPhot(@Body() photo: PhotoDto) {
        return this.photoService.createPhoto(photo);
    }
}
