import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PartnerUserController } from './partner-user/partner-user.controller';

@Module({
  controllers: [UserController, PartnerUserController],
  providers: [UserService],
})
export class AuthModule {}
