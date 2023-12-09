import prodModel from "../Models/productModel"
import {Request, Response} from "express"

 async function price(req:Request,res:Response){
    try{
    let price:number = parseInt(req.query.price as string)
    const result = await prodModel.find({"price":{$gt:price}})
    if(result.length === 0){
        return res.status(404).send('No Products Found')
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get products')
    }
}
 async function color(req:Request,res:Response){
    try{
    const result = await prodModel.find({"color":{$not:{$in:['red','green','blue']}}})
    if(result.length === 0){
        return res.status(404).send('No Products matches the requested color')
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get products')
    }
}
 async function rating(req:Request,res:Response){
    try{
    let min:number = parseInt(req.query.min as string)
    let max:number = parseInt(req.query.max as string)
    const result = await prodModel.find({
        $and:[{"rating":{$gte:min}},{"rating":{$lt:max}}]
    })
    if(result.length === 0){
        return res.status(404).send('No Products matches the requested rating')
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get products')
    }
}
 async function categoryAndPrice(req:Request,res:Response){
    try{
    let category:string = req.query.category as string
    let price:number = parseInt(req.query.price as string)
    const result = await prodModel.find({category,"price":{$lt:price}})
    if(result.length === 0){
        return res.status(404).send('No Products matches the requested price and category')
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get products')
    }
}
 async function date(req:Request,res:Response){
    try{
    const result = await prodModel.find({}).sort({"createdAt":-1})
    if(result.length === 0){
        return res.status(404).send('No Products found ')
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get products')
    }
}
 async function sort(req:Request,res:Response){
    try{
    const result = await prodModel.find({}).sort({"product":1})
    if(result.length === 0){
        return res.status(404).send('No Products found ')
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get products')
    }
}
 async function highPrice(req:Request,res:Response){
    try{
    const result = await prodModel.find({}).sort({"price":-1}).limit(5)
    if(result.length === 0){
        return res.status(404).send('No Products found')
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get products')
    }
}
 async function quantity(req:Request,res:Response){
    try{
    const id:number = req.body.id
    const units:number = req.body.units
    const result = await prodModel.findByIdAndUpdate(id,{$inc:{"quantity":units}})
    if(!result){
        return res.status(404).send('id not found')
    }
    return res.send('update success')
    }
    catch{
        return res.status(500).send('cant update quantity')
    }
}

export default {
    price,
    color,
    rating,
    categoryAndPrice,
    date,
    sort,
    highPrice,
    quantity
}