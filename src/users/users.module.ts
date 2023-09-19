import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from 'typeorm/entities/users';
import { users_profile } from 'typeorm/entities/user.profile';

@Module({
  imports:[TypeOrmModule.forFeature([users,users_profile])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
