import { Injectable } from '@nestjs/common';

const cities: { codePostal: string, codeCommune: string, nomCommune: string }[] = require('../codes-postaux.json');

@Injectable()
export class AppService {
  getCities(name: string, code: string): { codePostal: string, codeCommune: string, nomCommune: string }[] {
    console.log('code', code);
    console.log('name', name);
    const resCities = cities
    .filter((city) => {
      if (code) {
        if (name) {
          return city.codePostal.includes(code.toString()) && city.nomCommune.includes(name);
        }
        return city.codePostal.includes(code.toString());
      } else if (name) {
        return city.nomCommune.includes(name);
      }
      return true; 
    })
    .filter((city, index) => index < 10)

    return resCities;
  }
}
