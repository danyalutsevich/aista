import { Injectable } from '@nestjs/common';
import  { Endpoints } from './endpoints';
import { Authenticate } from './types';

@Injectable()
export class AppService {
  async getTicket(username: string, password: string): Promise<Authenticate> {
    let response = await fetch(Endpoints.authenticate + `?username=${username}&password=${password}`)
    let data = await response.json() as Authenticate
    return data
  }
}
