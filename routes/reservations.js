const express = require('express')
let router = express.Router()
const db = require('../db/database.js')

router.use(express.json())

router.get('/getAllReservations', function (req,res){
    db.getAllReservations(result => res.send(result))
})

router.get('/getAllReservationsRoot', function (req,res){
    db.getAllReservationsRoot(result => res.send(result))
})
router.post('/newReservation', function (req,res){
    db.newReservation(req.body.name,req.body.date,req.body.time,req.body.attraction_id,result => res.send(JSON.stringify({res: result})))
})

router.delete('/deleteReservation', function(req,res){
    db.deleteReservation(req.body.id,result => res.send(JSON.stringify({res: result})))
})

module.exports = router