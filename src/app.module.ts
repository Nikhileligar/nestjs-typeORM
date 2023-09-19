import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from 'typeorm/entities/users';
import { UsersModule } from './users/users.module';
import { users_profile } from 'typeorm/entities/user.profile';
import { UserProfileController } from './user-profile/user-profile.controller';
import { UserProfileService } from './user-profile/user-profile.service';
import { UsersProfileModule } from './user-profile/userProfile.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:"mysql",
    host:"localhost",
    port: 3306,
    username:"root",
    password:"@Arv20063",
    database:"nestjs_project",
    entities:[users,users_profile],
    synchronize: true, //when needed auto updating the table or creating a new table
    }), UsersModule,UsersProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
