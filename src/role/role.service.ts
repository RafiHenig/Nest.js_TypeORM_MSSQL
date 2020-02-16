import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { UserDTO } from '../user/dto/user.dto';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(Role) private readonly roleREpository: Repository<Role>
    ) { }

    async matchRoles(user: UserDTO, roles: string[]) {
        return roles.some(x => user.roles.find(y => y.name == x));
    }

    async create(name: string) {
        await this.roleREpository.save(new Role({ name }))
    }
}
