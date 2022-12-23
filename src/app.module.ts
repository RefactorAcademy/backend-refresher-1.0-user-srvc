import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [],   // import all my other modules 
  controllers: [AppController],    // import all the controller files for this module
  providers: [AppService],     // import the services
})
export class AppModule {}
