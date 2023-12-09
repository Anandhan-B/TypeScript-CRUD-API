import {Request, Response, Express} from "express"
const express = require("express")
import mongoose from "mongoose"
import bookRoutes from "./Routes/bookRoutes"
import prodRoutes from "./Routes/prodRoutes"
import orderRoutes from "./Routes/orderRoutes"
import movieRoutes from "./Routes/movieRoutes"
import tagRoutes from "./Routes/tagsRoutes"
import addressRoutes from "./Routes/addressRoutes"
import discountRoutes from "./Routes/discountRoutes"
const app: Express = express()
app.use('/book',bookRoutes)
app.use('/prod',prodRoutes)
app.use('/order',orderRoutes)
app.use('/movie',movieRoutes)
app.use('/tag',tagRoutes)
app.use('/address',addressRoutes)
app.use('/discount',discountRoutes)
async function main(){
await mongoose.connect('mongodb://127.0.0.1:27017/db1').then(():void=>{
    app.listen(7000,():void=>console.log('Server running in port 7000'))
}).catch(err=>console.log(err.message))
app.all('/',(req: Request,res: Response)=>{
    res.send('api working')
})}

main()