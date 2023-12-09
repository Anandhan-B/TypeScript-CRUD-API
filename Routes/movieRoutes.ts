import {Request, Response, Router} from "express";
const express = require("express")
import controller from "../Controllers/movieController"
const route:Router = express.Router()
route.use(express.json())
route.patch('/removeDescription',(req:Request,res:Response):void=>{controller.removeDescription(req,res)})  //Task 13
export default route