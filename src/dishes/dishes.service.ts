import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Dish, dishDocument} from "../schemas/schema"

@Injectable()
export class DishService {
  constructor(@InjectModel(Dish.name) private DishModel:Model<dishDocument>){}
  async dishesList(): Promise<Dish[]> {
    return await this.DishModel.find().exec()
  }

  async addNewDish(name: string, price: number): Promise<object>{
    console.log({name},{price})
    const newDish = {name:name,price:price}
    console.log({newDish})
    const dish = new this.DishModel(newDish)
    console.log({dish})
    await dish.save()
    return dish
  }

}
