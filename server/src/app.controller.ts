import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCities(): { codePostal: string, codeCommune: string, nomCommune: string }[] {
    return this.appService.getCities();
  }
}
