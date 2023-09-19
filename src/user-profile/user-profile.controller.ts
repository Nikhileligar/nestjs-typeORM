import { Body, Controller, Post } from '@nestjs/common';
import { profile } from 'console';
import { UserProfileService } from './user-profile.service';
import { userProfileDto } from './dto/userProfile';

@Controller('user-profile')
export class UserProfileController {
    constructor (private userProfileservice: UserProfileService) {}

    @Post()
    async createProfile(@Body() profileDto: userProfileDto) {
        return await this.userProfileservice.createProfile(profileDto)
    }
}
