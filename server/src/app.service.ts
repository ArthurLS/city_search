import { Injectable } from '@nestjs/common';

const cities: { codePostal: string, codeCommune: string, nomCommune: string }[] = require('../codes-postaux.json');

@Injectable()
export class AppService {
  getCities(): { codePostal: string, codeCommune: string, nomCommune: string }[] {

    const resCities = cities.filter((city, index) => index < 10)

    return resCities;
  }
}
