import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findAll() {
    return 'users';
  }

  create(data: any) {
    return data;
  }
}
