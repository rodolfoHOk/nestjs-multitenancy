import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRoles } from './user-roles';
import { CreateCommonUserDto } from './dto/create-common-user.dto';
import { CreatePartnerUserDto } from './dto/create-partner-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

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

  findOne(idOrEmail: string) {
    return this.prismaService.user.findFirst({
      where: this.isEmail(idOrEmail) ? { email: idOrEmail } : { id: idOrEmail },
    });
  }

  // for convenience development only
  findAll() {
    return this.prismaService.user.findMany();
  }

  private generateHash(password: string) {
    return bcrypt.hashSync(password, 10);
  }

  private isEmail(value: string) {
    return value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    );
  }
}
