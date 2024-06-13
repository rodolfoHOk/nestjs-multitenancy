import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePartnerDto } from './dto/create-partner.dto';

@Injectable()
export class PartnerService {
  constructor(private prismaService: PrismaService) {}

  create(createPartnerDto: CreatePartnerDto) {
    return createPartnerDto;
  }

  // findAll() {
  //   return `This action returns all partner`;
  // }

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
