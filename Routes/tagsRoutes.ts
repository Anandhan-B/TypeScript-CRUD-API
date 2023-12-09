import {Request, Response, Router} from "express";
const express = require("express")
import controller from "../Controllers/tagsController"
const route:Router = express.Router()
route.use(express.json())
route.patch('/newTag',(req:Request,res:Response):void=>{controller.newTag(req,res)})  //Task 15
route.patch('/removeTag',(req:Request,res:Response):void=>{controller.removeTag(req,res)})  //Task 16
route.patch('/newDistinctTag',(req:Request,res:Response):void=>{controller.newDistinctTag(req,res)})  //Task 17
route.patch('/removeAllSameTag',(req:Request,res:Response):void=>{controller.removeAllSameTag(req,res)})  //Task 18

export default route