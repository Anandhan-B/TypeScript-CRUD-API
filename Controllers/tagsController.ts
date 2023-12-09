import tagsModel from "../Models/tagsModel"
import {Request, Response} from "express"

 async function newTag(req:Request,res:Response):Promise<Response>{
    try{
        const id:number = req.body.id
        const tag:string = req.body.tag
        const result = await tagsModel.findByIdAndUpdate(id,{$push:{"tags":tag}})
        if(!result){
            return res.status(404).send('id not found')
        }
       return res.send('tag added successfully')
    }
    catch{
        return res.status(500).send('cant add tag')
    }
}

 async function removeTag(req:Request,res:Response):Promise<Response>{
    try{
        const id:number = req.body.id
        const result = await tagsModel.findByIdAndUpdate(id,{$pop:{"tags":1}})
        if(!result){
            return res.status(404).send('id not found')
        }
       return res.send('tag removed successfully')
    }
    catch{
        return res.status(500).send('cant remove tag')
    }
}
 
async function newDistinctTag(req:Request,res:Response):Promise<Response>{
    try{
        const id:number = req.body.id
        const tag:string = req.body.tag
        const result = await tagsModel.findByIdAndUpdate(id,{$addToSet:{"tags":tag}})
        if(!result){
            return res.status(404).send('id not found')
        }
       return res.send('tag added successfully')
    }
    catch{
        return res.status(500).send('cant add tag')
    }
}
async function removeAllSameTag(req:Request,res:Response):Promise<Response>{
    try{
        const id:number = req.body.id
        const tag:string = req.body.tag
        const result = await tagsModel.findByIdAndUpdate(id,{$pull:{"tags":tag}})
        if(!result){
            return res.status(404).send('id not found')
        }
       return res.send('tag removed successfully')
    }
    catch{
        return res.status(500).send('cant remove tag')
    }
}

export default {
    newTag,
    removeTag,
    newDistinctTag,
    removeAllSameTag
}