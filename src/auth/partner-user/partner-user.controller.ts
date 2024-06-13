import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreatePartnerUserDto } from '../user/dto/create-partner-user.dto';
import { UserPresenter } from '../user/user.presenter';

@Controller('partners/users')
export class PartnerUserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() requestBody: CreatePartnerUserDto) {
    const user = await this.userService.createPartnerUser(requestBody);
    return new UserPresenter(user);
  }
}
