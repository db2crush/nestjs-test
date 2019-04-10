import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [UserModule, RoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
