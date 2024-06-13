import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateCommonUserDto } from './dto/create-common-user.dto';
import { UserPresenter } from './user.presenter';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAll() {
    const users = await this.userService.findAll();
    return users.map((user) => new UserPresenter(user));
  }

  @Post()
  async create(@Body() requestBody: CreateCommonUserDto) {
    const user = await this.userService.createCommonUser(requestBody);
    return new UserPresenter(user);
  }
}
