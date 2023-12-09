import movieModel from "../Models/movieModel"
import {Request, Response} from "express"

 async function removeDescription(req:Request,res:Response){
    try{
        const id:number = req.body.id
        const result = await movieModel.findByIdAndUpdate(id,{$unset:{"description":1}})
        if(!result){
            return res.status(404).send('id not found')
        }
       return res.send('removed successfully')
    }
    catch{
        return res.status(500).send('cant remove field description')
    }
}
 

export default {
    removeDescription
}