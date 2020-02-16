import { Injectable, ConflictException } from '@nestjs/common';
import { randomBytes, pbkdf2Sync } from "crypto"
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { Role } from '../role/role.entity';
import { AssociateRolesDTO } from './dto/associate-roles.dto';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(Role) private readonly roleRepository: Repository<Role>) { }

    async createUser(x: CreateUserDTO) {
        const { username, email } = x;
        const user = new User({ username, email });
        user.roles = [new Role({ name: "Basic" })]
        user.setPassword(x.password);

        if ((await this.userRepository.findOne({ email }))) throw new ConflictException("Email already exists.");
        else await this.userRepository.save(user);
    }

    async deleteUser(id: number) {
        await this.userRepository.delete({ id })
    }

    async associateRoles(x: AssociateRolesDTO, user: UserDTO) {
        await this.userRepository
            .createQueryBuilder()
            .relation(User, 'roles')
            .of({ id: x.userId || user.id })
            .add(x.roles.map(name => new Role({ name })));

        return await this.userRepository.findOne({ where: { id: user.id }, relations: ["roles"] })
    }

    async disassociateRoles(x: AssociateRolesDTO, user: UserDTO) {
        await this.userRepository
            .createQueryBuilder()
            .relation(User, 'roles')
            .of({ id: x.userId || user.id })
            .remove(x.roles.map(name => new Role({ name })))

        return await this.userRepository.findOne({ where: { id: user.id }, relations: ["roles"] })
    }
}