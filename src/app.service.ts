import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject('TASKS') private tasks: any[],
    private configService: ConfigService,
  ) {}
  getHello(): string {
    console.log(this.tasks);
    const apiKey = this.configService.get<string>('API_KEY');
    const name = this.configService.get<string>('DATABASE_NAME');
    return `Hello World! ${apiKey} ${name}`;
  }
}
