const express = require('express')
let router = express.Router()
const db = require('../db/database.js')

router.use(express.json())

router.get('/getAllGuides', function(req,res){
    db.getAllGuides(result => res.send(result))
})

module.exports = router