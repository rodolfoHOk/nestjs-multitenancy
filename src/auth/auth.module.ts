import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PartnerUserController } from './partner-user/partner-user.controller';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '10000s',
      },
    }),
  ],
  controllers: [UserController, PartnerUserController, AuthController],
  providers: [UserService, AuthService],
})
export class AuthModule {}
