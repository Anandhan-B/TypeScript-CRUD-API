import {Request, Response, Router} from "express";
const express = require("express")
import controller from "../Controllers/addressController"
const route: Router = express.Router()
route.use(express.json())
route.patch('/updateCity',(req: Request,res: Response): void=>{controller.updateCity(req,res)})  //Task 20
export default route