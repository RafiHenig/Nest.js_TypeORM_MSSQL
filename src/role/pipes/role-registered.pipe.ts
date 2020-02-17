import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from '../role.entity';
import { Repository } from 'typeorm';
import { AssociateRolesDTO } from '../../user/dto/associate-roles.dto';

@Injectable()
export class RoleRegisteredPipe implements PipeTransform {
  constructor(@InjectRepository(Role) private readonly roleRepository: Repository<Role>) { }

  async transform(x: AssociateRolesDTO) {

    const registeredRoles = await this.roleRepository.findByIds(x.roles);
    const noneExist = x.roles.filter(x => registeredRoles.every(y => y.name != x));

    if (noneExist.length) throw new BadRequestException(`The following roles are not exists: ${noneExist.reduce((x, y) => `${x}, ${y}`)}`);
    else return x;
  }
}
