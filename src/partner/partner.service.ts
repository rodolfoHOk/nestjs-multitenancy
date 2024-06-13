import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePartnerDto } from './dto/create-partner.dto';

@Injectable()
export class PartnerService {
  constructor(private prismaService: PrismaService) {}

  async create(createPartnerDto: CreatePartnerDto & { userId: string }) {
    const partner = await this.prismaService.$transaction(async (prisma) => {
      const createdPartner = await prisma.partner.create({
        data: {
          name: createPartnerDto.name,
        },
      });
      await prisma.partnerUser.create({
        data: {
          partnerId: createdPartner.id,
          userId: createPartnerDto.userId,
        },
      });
      return createdPartner;
    });
    return partner;
  }

  findAll() {
    return this.prismaService.partner.findMany();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} partner`;
  // }

  // update(id: number, updatePartnerDto: UpdatePartnerDto) {
  //   return updatePartnerDto;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} partner`;
  // }
}
