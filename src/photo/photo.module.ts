import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Photo])
    ],
    controllers: [PhotoController],
    providers: [PhotoService]
})
export class PhotoModule { }
