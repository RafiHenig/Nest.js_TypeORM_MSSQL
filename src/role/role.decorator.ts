import { SetMetadata, applyDecorators, UseGuards } from '@nestjs/common';
import { RolesGuard } from './role.guard';
import { AuthGuard } from '../common/guards/auth.guard';

export const Roles = (...roles: string[]) => applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AuthGuard, RolesGuard)
)
