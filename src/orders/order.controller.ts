import {Param, Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller("pizzasOrder")
export class OrderController {
  constructor(private readonly appService: OrderService) {}

  @Get("orderByTable/:tableNumber")
  getOrder(@Param("tableNumber") tableNumber: number) {
    console.log({tableNumber})
    return this.appService.getOrderByTable(tableNumber);
  }

  @Post("newOrder")
  createOrder(@Body() Body): object {
    console.log({Body})
    return this.appService.addNewOrder(Body.dishes,Body.tableNumber);
  }
}
