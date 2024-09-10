import express from 'express'

const router = express.Router()

router.get('/:from/:to', (req,res) => {
    console.log(req.params)
    console.log(req.query)
    console.log(req.body)
    const {from, to} = req.params
    
res.json({voss: {from: from.toUpperCase(), to: to.toUpperCase(), price: "123456"}})
})


export default router