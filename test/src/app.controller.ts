import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: any): void {
    res.sendFile(path.join(__dirname, '../index.html'));
    // return this.appService.getHello();
  }
}
