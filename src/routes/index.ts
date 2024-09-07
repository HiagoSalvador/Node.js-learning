import express, { RequestHandler } from 'express'
import produtosRouter from './produtos'
import voosRouter from './voos'
import { Intervene } from '../middlewares/Intervene'

const router = express.Router()

router.use(Intervene)

router.use('/produtos', produtosRouter)
router.use('/voos', voosRouter)



router.get('/ping',(req,res) =>{
    console.log("Executou ping")
    res.json({pong: true})
})

router.get('/', (req,res) =>{
    let resposta:string ="Olá mundo"
    res.json({resposta})
})




export default router