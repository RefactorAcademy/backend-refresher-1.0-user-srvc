import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { Content } from './submodules/backend-refresher-1.0-entities/src/entities/content.entity';
import { User } from './submodules/backend-refresher-1.0-entities/src/entities/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'new-assessment-staging.csdmg3kugxsm.ap-south-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'Refactor123456',
      database: 'backend-socialmedia',
      entities: [ User, Content ],
      synchronize: true,
      logging: true
    }),

    UserModule
  ],   // import all my other modules 
  controllers: [AppController],    // import all the controller files for this module
  providers: [AppService],     // import the services
})
export class AppModule {}
