import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

// ** Config
import config from '@/config';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];

    const validKeys = config().app.apiKey;

    if (!apiKey || !validKeys.includes(apiKey)) {
      throw new UnauthorizedException('API Key inválida o faltante');
    }

    return true;
  }
}
