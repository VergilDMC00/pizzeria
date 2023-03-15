import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Order, orderDocument} from "../schemas/schema"

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private OrderModel:Model<orderDocument>){}
  async orderList(): Promise<Order[]> {
    return await this.OrderModel.find().exec()
  }

  async addNewOrder(dishes: [object], tableNumber: number): Promise<object>{
    console.log({dishes},{tableNumber})
    let totalPrice = dishes.reduce((previousValue: number,currentValue: any)=>{
      return previousValue + currentValue.price
    },0)

    const newOrder = {
      "orderEntity":dishes,
      "tableNumber":tableNumber,
      "orderTotalPrice": totalPrice,
      "creationDate":Date.now()
    }
    console.log({newOrder})
    const order = new this.OrderModel(newOrder)
    console.log({order})
    await order.save()
    return order
  }

  async getOrderByTable(tableNumber:number)
  {
    return await this.OrderModel.find({tableNumber:tableNumber})
  }
}
