import mongoose from "mongoose";
import { orderModel } from './models/order.js';

const enviroment = async () => {
    await mongoose.connect('mongodb+srv://CoderUser:123456QWE@clustercursobackend.tptn8sm.mongodb.net/mongoAvanzado2');
    const orders = await orderModel.aggregate([
        {
            // stage 1
            $match: {size: "medium"}
        },
        {
            // stage 2
            $group: {_id:"$name", totalQuantity: {$sum: "$quantity"}}
        },
        {
            // stage 3
            $sort: {totalQuantity: -1}
        },
        {
            // stage 4
            $group: {_id:1, pepe: {$push: "$$ROOT"}}
        },
        {
            // stage 5
            $project: {
                _id: 0,
                ordersss: "$pepe"
            }
        },
        {
            // stage 6
            $merge: {
                into: "reports"
            }
        }

    ])
    console.log(orders);
}

enviroment();