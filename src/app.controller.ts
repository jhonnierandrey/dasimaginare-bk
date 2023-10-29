import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

type ApiStatus = {
  message: string;
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getApiStatus(): ApiStatus {
    return this.appService.getApiStatus();
  }
}
