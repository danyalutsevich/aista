import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Authenticate } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/authenticate")
  async getAuthenticate(@Query() params: { username: string, password: string }) {
    return await this.appService.getTicket(params.username, params.password);
  }
}
