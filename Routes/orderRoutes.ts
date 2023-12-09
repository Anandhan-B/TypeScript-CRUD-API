import {Request, Response, Router} from "express";
const express = require("express")
import controller from "../Controllers/orderController"
const route:Router = express.Router()
route.use(express.json())
route.patch('/updateStatus',(req:Request,res:Response):void=>{controller.updateStatus(req,res)})  //Task 12
route.patch('/updateStatusByAmount',(req:Request,res:Response):void=>{controller.updateStatusByAmount(req,res)})  //Task 19
export default route