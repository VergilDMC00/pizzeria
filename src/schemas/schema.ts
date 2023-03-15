import {Schema,Prop,SchemaFactory} from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"
export type orderDocument = HydratedDocument<Order>
export type dishDocument = HydratedDocument<Dish>

@Schema()
export class Order
{
    @Prop()
    orderEntity:[]
    @Prop()
    tableNumber:Number
    @Prop()
    orderTotalPrice:Number
    @Prop()
    creationDate: Date
}

@Schema()
export class Dish
{
    @Prop()
    name:string
    @Prop()
    price:number
}

export const OrderSchema = SchemaFactory.createForClass(Order)
export const DishSchema = SchemaFactory.createForClass(Dish)