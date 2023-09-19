import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';
import { updateUserDto } from './dto/updateUser.dto';
import { userProfileDto } from 'src/user-profile/dto/userProfile';

@Controller('users')
export class UsersController {
    constructor (private userService: UsersService) {}
    @Get()
    async getUsers (){
        return await this.userService.getUsers();
    }

    @Post()
    async createUser(@Body() createUserDto: createUserDto) {
        return await this.userService.createUser(createUserDto);
    }

    @Patch(':id')
    async updateUser(@Param('id') id: number , @Body() updateUserDetails: updateUserDto) {
        return await this.userService.updateUser(id,updateUserDetails)
    }

    @Post(':id/profiles')
    async createUserProfile(@Param('id') id: number, @Body() profileDto: userProfileDto) {
        return await this.userService.createUserProfile(id, profileDto);
    }
}
