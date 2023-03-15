import { Module } from '@nestjs/common';
import { DishController } from './dishes.controller';
import { DishService } from './dishes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Dish,DishSchema } from 'src/schemas/schema';
@Module({
  imports: [MongooseModule.forFeature([{name:Dish.name,schema:DishSchema}])],
  controllers: [DishController],
  providers: [DishService],
})
export class dishModule {}
