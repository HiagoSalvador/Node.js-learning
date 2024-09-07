import { RequestHandler } from "express"

export const Intervene: RequestHandler = (req,res, next) => {
    let logged = true
    
    if(logged){
        next()
    }
    else{
        res.status(403).json({error: "Middleware nao permitiu"})
    }
    }