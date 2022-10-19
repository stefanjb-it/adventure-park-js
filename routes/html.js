const express = require('express')
let router = express.Router()

router.get('/',function(req,res){
    res.sendFile(process.env.rootdir+'/html/index.html')
})

router.get('/reservations',function(req,res){
    res.sendFile(process.env.rootdir+'/html/reservations.html')
})

router.get('/reservationsRoot',function(req,res){
    res.sendFile(process.env.rootdir+'/html/reservationsroot.html')
})

router.get('/newReservation',function(req,res){
    res.sendFile(process.env.rootdir+'/html/newreservation.html')
})

router.get('/newAttraction',function(req,res){
    res.sendFile(process.env.rootdir+'/html/newattraction.html')
})

router.get('/newReservationRoot',function(req,res){
    res.sendFile(process.env.rootdir+'/html/newreservationRoot.html')
})

module.exports = router