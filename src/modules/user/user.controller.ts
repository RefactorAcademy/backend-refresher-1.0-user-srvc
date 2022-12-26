import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from 'src/submodules/backend-refresher-1.0-dtos/src/dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')     // .   localhost:3000/user or localhost:3000/user/fetch
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body()user: UserDto){     // dtos -> data transfer object
     try{
       //let createUser = await this.userService.createUser(user);
       console.log("Control is here",user)
     }
     catch(err){
       console.log(err);
       return err;
     } 
  }

}
