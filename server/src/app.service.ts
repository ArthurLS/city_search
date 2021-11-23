import { Injectable } from '@nestjs/common';

const cities = require('../codes-postaux.json');

@Injectable()
export class AppService {
  getHello(): string {
    console.log('Hello');
    console.log(cities[0]);
    return 'Hello World!';
  }
}
