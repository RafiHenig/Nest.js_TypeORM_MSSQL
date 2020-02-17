import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { UserDTO } from '../dto/user.dto';
import { validate } from 'class-validator';

@Injectable()
export class UserPipe implements PipeTransform {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

  async transform(id: number) {
    const user = await this.userRepository.findOne(id, { relations: ["roles"] });
    if (!user) throw new BadRequestException("User not exists");
    else return UserDTO.toDto(user);
  }
}
