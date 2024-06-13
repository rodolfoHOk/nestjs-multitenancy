import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRoles } from './user-roles';
import { CreateCommonUserDto } from './dto/create-common-user.dto';
import { CreatePartnerUserDto } from './dto/create-partner-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.user.findMany();
  }

  createCommonUser(requestBody: CreateCommonUserDto) {
    return this.prismaService.user.create({
      data: {
        ...requestBody,
        password: this.generateHash(requestBody.password),
        roles: [UserRoles.USER],
      },
    });
  }

  createPartnerUser(requestBody: CreatePartnerUserDto) {
    return this.prismaService.user.create({
      data: {
        ...requestBody,
        password: this.generateHash(requestBody.password),
        roles: [UserRoles.PARTNER],
      },
    });
  }

  private generateHash(password: string) {
    return bcrypt.hashSync(password, 10);
  }
}
