import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    return request.isAuthenticated();
  }
}