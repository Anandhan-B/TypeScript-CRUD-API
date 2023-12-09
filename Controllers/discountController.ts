import discountModel from "../Models/discountModel"
import {Request, Response} from "express"


 async function discount(req:Request,res:Response){
    try{
        const price:number = req.body.price 
        console.log(price);
        const result = await discountModel.updateMany({"price":{$gt:price}},{$mul:{"Discount":1.05}})
        console.log(result);
        if(!result){
            return res.status(404).send('no product found')
        }
       return res.send('discount increased successfully')
    }
    catch{
        return res.status(500).send('cant change discount')
    }
}

export default {
    discount  
}