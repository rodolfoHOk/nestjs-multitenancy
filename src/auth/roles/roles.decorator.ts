import { SetMetadata } from '@nestjs/common';
import { UserRoles } from '../user/user-roles';

export const Roles = (...args: UserRoles[]) => SetMetadata('roles', args);
