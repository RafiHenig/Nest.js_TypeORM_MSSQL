import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { RoleDTO } from '../role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from '../role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesExistencePipe implements PipeTransform {
  constructor(@InjectRepository(Role) private readonly roleRepository: Repository<Role>) { }

  async transform<T extends { roles: string[] }>(value: T) {
    const roles = await this.roleRepository.find();
    const noneExist = value.roles.filter(x => roles.every(y => y.name != x));

    if (noneExist.length) throw new BadRequestException(`The following roles are not exists: ${noneExist.reduce((x, y) => `${x}, ${y}`)}`);
    else return value;
  }
}
