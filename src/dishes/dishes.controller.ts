import { Body, Controller, Get, Post } from '@nestjs/common';
import { DishService } from './dishes.service';

@Controller("pizzasDish")
export class DishController {
  constructor(private readonly appService: DishService) {}

  @Get("dishList")
  DishesList(): any {
    return this.appService.dishesList();
  }

  @Post("addDish")
  createDish(@Body() Body): object {
    return this.appService.addNewDish(Body.name,Body.price);
  }
}
