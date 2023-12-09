import {Request, Response, Router} from "express";
const express = require("express")
import controller from "../Controllers/bookController"
const route:Router = express.Router()
route.use(express.json())
route.get('/category',(req:Request,res:Response):void=>{controller.category(req,res)})  //Task 1
route.get('/year',(req:Request,res:Response):void=>{controller.year(req,res)})  //Task 2
route.get('/yearAndCategory',(req:Request,res:Response):void=>{controller.yearAndCategory(req,res)})  //Task 3
route.get('/sort',(req:Request,res:Response):void=>{controller.sort(req,res)})  //Task 9
export default route