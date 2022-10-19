const express = require('express')
let router = express.Router()
const db = require('../db/database.js')

router.use(express.json())

router.get('/getAllAttractions',function(req,res){
    db.getAllAttractions(result => res.send(result))
})

router.post('/newAttraction', function(req,res){
    if(req.body.root){
        db.newAttraction(req.body.name,req.body.duration,req.body.guide_id,function(result){
            console.log(result)
            res.send(JSON.stringify({res: result}))
        })
    }
})

module.exports = router