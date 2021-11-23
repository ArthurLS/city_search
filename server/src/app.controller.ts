import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cities')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCitiesByName(
      @Query('code') code: string,
      @Query('name') name: string
    ): { codePostal: string, codeCommune: string, nomCommune: string }[] {
      console.log('code', code);
      console.log('name', name);
    return this.appService.getCities(name, code);
  }
}
