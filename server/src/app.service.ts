import { Injectable } from '@nestjs/common';

const cities: { codePostal: string, codeCommune: string, nomCommune: string }[] = require('../codes-postaux.json');

@Injectable()
export class AppService {
  getCities(name: string, code: string)
   : { codePostal: string, codeCommune: string, nomCommune: string }[] {
    const resCities = cities
      .filter((city) => {
        if (code) {
          return city.codePostal.includes(code);
        } else if (name) {
          return city.nomCommune.toLocaleLowerCase().substring(0, name.length) === name.toLocaleLowerCase();
        }
        return true; 
      })
      .sort((a, b) =>{
        if (a.nomCommune < b.nomCommune)
          return -1;
        if ( a.nomCommune > b.nomCommune)
          return 1;
        return 0;
      })
      .filter((city, index) => index < 100)

    return resCities;
  }
}
