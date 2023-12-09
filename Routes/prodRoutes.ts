import {Request, Response, Router} from "express";
const express = require("express")
import controller from "../Controllers/prodController"
const route:Router = express.Router()
route.use(express.json())
route.get('/price',(req:Request,res:Response):void=>{controller.price(req,res)})  //Task 4
route.get('/color',(req:Request,res:Response):void=>{controller.color(req,res)})  //Task 5
route.get('/rating',(req:Request,res:Response):void=>{controller.rating(req,res)})  //Task 6
route.get('/categoryAndPrice',(req:Request,res:Response):void=>{controller.categoryAndPrice(req,res)})  //Task 7
route.get('/date',(req:Request,res:Response):void=>{controller.date(req,res)})  //Task 8
route.get('/sort',(req:Request,res:Response):void=>{controller.sort(req,res)})  //Task 10
route.get('/highPrice',(req:Request,res:Response):void=>{controller.highPrice(req,res)})  //Task 11
route.patch('/quantity',(req:Request,res:Response):void=>{controller.quantity(req,res)})  //Task 14

export default route