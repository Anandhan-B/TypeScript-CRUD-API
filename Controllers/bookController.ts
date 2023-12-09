import bookModel from "../Models/booksModel"
import {Request, Response} from "express"


 async function category(req:Request,res:Response){
    try{
    let category:string  = req.query.category as string
    const result = await bookModel.find({category})
    if(result.length === 0){
        return res.status(404).send('No Books Found')
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get books')
    }
}
 async function year(req:Request,res:Response){
    try{
    let year:number = parseInt(req.query.year as string)
    const result = await bookModel.find({"year":{$gt:year}})
    if(result.length === 0){
        return res.status(404).send(`No Books Pubished after year ${year}`)
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get books')
    }
}
 async function yearAndCategory(req:Request,res:Response){
    try{
    let year:number = parseInt(req.query.year as string)
    let category = req.query.category
    const result = await bookModel.find({category,"year":{$gt:year}}).limit(3).sort({"title":1})
    if(result.length === 0){
        return res.status(404).send(`No Books Pubished after year ${year} in the category ${category}`)
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get books')
    }
}
 async function sort(req:Request,res:Response){
    try{
    const result = await bookModel.find({}).sort({"author":1}).sort({"year":-1})
    if(result.length === 0){
        return res.status(404).send(`No Books found`)
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get books')
    }
}

export default {
    category,
    year,
    yearAndCategory,
    sort
}