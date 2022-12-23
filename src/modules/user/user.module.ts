import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [],                      // import all my other modules 
    controllers: [UserController],    // import all the controller files for this module
    providers: [UserService],
})
export class UserModule {}
