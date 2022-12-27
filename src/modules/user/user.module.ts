import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/submodules/backend-refresher-1.0-entities/src/entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [ TypeOrmModule.forFeature([User]) ],                      // import all my other modules 
    controllers: [UserController],    // import all the controller files for this module
    providers: [UserService],
})
export class UserModule {}
