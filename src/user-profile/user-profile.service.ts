import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users_profile } from 'typeorm/entities/user.profile';
import { userProfileDto } from './dto/userProfile';
import { Http2ServerRequest } from 'http2';

@Injectable()
export class UserProfileService {
    constructor(
        @InjectRepository(users_profile) private userProfileRepository: Repository<users_profile>
    ) {}

    async createProfile (data: userProfileDto) {
        const result = await this.userProfileRepository.save(data);
        const response = {
            body: {
                data: result,
                message:'user profile created successfully'
            }
        }
        return response;
    }
}
