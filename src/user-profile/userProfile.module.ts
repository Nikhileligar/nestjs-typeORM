import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from 'typeorm/entities/users';
import { users_profile } from 'typeorm/entities/user.profile';
import { UserProfileController } from './user-profile.controller';
import { UserProfileService } from './user-profile.service';

@Module({
  imports:[TypeOrmModule.forFeature([users_profile])],
  controllers: [UserProfileController],
  providers: [UserProfileService]
})
export class UsersProfileModule {}
