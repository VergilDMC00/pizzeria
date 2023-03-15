import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dishModule } from './dishes/dishes.module';
import { orderModule } from './orders/order.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [orderModule,dishModule,MongooseModule.forRoot("mongodb://localhost:27017/restaurant")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
