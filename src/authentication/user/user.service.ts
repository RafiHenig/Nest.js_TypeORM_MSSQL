import { Injectable, ConflictException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { Role } from '../role/role.entity';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

    async createUser(x: CreateUserDTO): Promise<void> {
        const { username, email } = x;
        const user = new User({ username, email });
        user.roles = [new Role({ name: "Basic" })]
        user.setPassword(x.password);

        if ((await this.userRepository.findOne({ email }))) throw new ConflictException("Email already exists.");
        else await this.userRepository.save(user);
    }

    async deleteUser(user: User): Promise<void> {
        await this.userRepository.delete(user);
    }

    async getAll(): Promise<UserDTO[]> {
        return UserDTO.toDtos((await this.userRepository.find({ relations: ["roles"] })));
    }

    async getRoles(id: number): Promise<Role[]> {
        return await this.userRepository.createQueryBuilder()
            .relation(User, "roles")
            .of(id)
            .loadMany<Role>();
    }

    async associateRoles(roles: string[], user: User): Promise<void> {
        await this.userRepository
            .createQueryBuilder()
            .relation(User, 'roles')
            .of(user)
            .add(roles);
    }

    async disassociateRoles(roles: string[], user: User): Promise<void> {
        await this.userRepository
            .createQueryBuilder()
            .relation(User, 'roles')
            .of(user)
            .remove(roles)
    }
}