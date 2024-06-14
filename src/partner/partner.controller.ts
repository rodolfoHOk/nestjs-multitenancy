import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { UserRoles } from 'src/auth/user/user-roles';

@UseGuards(AuthGuard, RolesGuard)
@Controller('partners')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  @Roles(UserRoles.PARTNER)
  @Post()
  create(@Body() createPartnerDto: CreatePartnerDto, @Req() req: any) {
    return this.partnerService.create({
      ...createPartnerDto,
      userId: req.user.id,
    });
  }

  @Roles(UserRoles.PARTNER)
  @Get()
  findAll() {
    return this.partnerService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.partnerService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePartnerDto: UpdatePartnerDto) {
  //   return this.partnerService.update(+id, updatePartnerDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.partnerService.remove(+id);
  // }
}
