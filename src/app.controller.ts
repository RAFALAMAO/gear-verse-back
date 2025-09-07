import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus';

@Controller('health')
export class AppController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly db: TypeOrmHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  async check() {
    const healthCheckResult = await this.health.check([() => this.db.pingCheck('database')]);

    return {
      datetime: new Date(),
      health: healthCheckResult.status,
    };
  }
}
