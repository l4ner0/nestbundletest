import { Injectable } from '@nestjs/common';

@Injectable()
export class NestlogService {
  log(logData) {
    console.log(logData);
  }
}
