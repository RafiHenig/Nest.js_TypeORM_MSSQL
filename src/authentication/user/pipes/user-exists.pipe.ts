import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserExistsPipe implements PipeTransform {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async transform(id: number) {
    if (id && !(await this.userRepository.findOne(id))) throw new BadRequestException("User not exists");
    else return id;
  }

}
