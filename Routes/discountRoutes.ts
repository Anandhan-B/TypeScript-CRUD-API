import {Request, Response, Router} from "express";
const express = require("express")
import controller from "../Controllers/discountController"
const route:Router = express.Router()
route.use(express.json())
route.patch('/discountByPrice',(req:Request,res:Response):void=>{controller.discount(req,res)})  //Task 21
export default route