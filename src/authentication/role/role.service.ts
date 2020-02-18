import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { UserDTO } from '../user/dto/user.dto';

@Injectable()
export class RoleService {
    constructor(@InjectRepository(Role) private readonly roleREpository: Repository<Role>) { }

    matchRoles(user: UserDTO, roles: string[]): boolean {
        return roles.some(x => user?.roles.find(y => y.name == x));
    }

    async create(name: string): Promise<void> {
        await this.roleREpository.save(new Role({ name }))
    }

    async getAll(): Promise<Role[]> {
        return await this.roleREpository.find();
    }

    async getById(name: string): Promise<UserDTO[]> {
        const users = await this.roleREpository.createQueryBuilder()
            .relation(Role, "users")
            .of(name)
            .loadMany<User>();

        return await UserDTO.toDtos(users);
    }
}
