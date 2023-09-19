import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users } from 'typeorm/entities/users';
import { createUserDto } from './dto/createUser.dto';
import { createUserParams } from 'typeorm/types/utils/user.type';
import { updateUserDto } from './dto/updateUser.dto';
import { userProfileDto } from 'src/user-profile/dto/userProfile';
import { users_profile } from 'typeorm/entities/user.profile';
import { log } from 'console';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(users) private userRepository: Repository<users>,
    @InjectRepository(users_profile) private userProfileRepository: Repository<users_profile>
  ) {}

  getUsers() {
    return this.userRepository.find();
  }

  async createUser(userDetails: createUserParams) {
    const newUser = this.userRepository.create({
      ...userDetails,
      createdAt: new Date(),
    });
    return await this.userRepository.save(newUser);
  }

  async updateUser(id, data: updateUserDto) {
    const userid = id;

    const getQuery = this.userRepository.findOne({
      where: { id },
    });
    if (getQuery) {
      return await this.userRepository.update({ id }, { ...data });
    }
  }

  async createUserProfile(id: number, profileData: userProfileDto) {
    const user = await this.userRepository.findOneBy({id});
    console.log(user);
    
    if (!user) {
      throw new BadRequestException('the user id doesnt exists')
    } 

    const newProfile = await this.userProfileRepository.create(profileData);
    const savedProfile = await this.userProfileRepository.save(profileData);
    user.profile = savedProfile;
    return await this.userProfileRepository.save(user);
  }
}
