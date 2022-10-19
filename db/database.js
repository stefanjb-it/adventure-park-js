const mysql = require('mysql2')
const fs = require('fs')
const db_conf = JSON.parse(fs.readFileSync('./configs/db.json', "utf8"));

const connection = mysql.createPool(db_conf);

async function getAllReservations(callback){
    connection.query('select reservations.id,reservations.name,reservations.day,reservations.time,reservations.attractions_id as reservations, a.name as attractions_name, a.duration as attractions_duration from reservations join attractions a on reservations.attractions_id = a.id order by reservations.day, reservations.time limit 6', function(err, results, fields){
            if (err) throw err;
            return callback(results);
    })
}
async function getAllReservationsRoot(callback){
    connection.query('select reservations.id,reservations.name,reservations.day,reservations.time,reservations.attractions_id as reservations, a.name as attractions_name, a.duration as attractions_duration, g.name as guides_name from reservations join attractions a on reservations.attractions_id = a.id join guides g on g.id = a.guides_id order by reservations.day, reservations.time limit 6', function(err, results, fields){
            if (err) throw err;
            return callback(results);
    })
}
async function newReservation(name,day,time,attraction_id,callback){
    connection.execute('insert into reservations (name,day,time,attractions_id) values(?,?,?,?)',[name,day,time,attraction_id], function(err, results, fields){
        if (err) throw err;
        return callback(results.insertId);
    })
}
async function getAllAttractions(callback){
    connection.query('select * from attractions', function(err, results, fields){
            if (err) throw err;
            return callback(results);
    })
}
async function newAttraction(name,duration,guides_id,callback){
    connection.execute('insert into attractions (name,duration,guides_id) values(?,?,?)',[name,duration,guides_id], function(err, results, fields){
        if (err) throw err;
        return callback(results.insertId);
    })
}
async function getAllGuides(callback){
    connection.query('select * from guides', function(err, results, fields){
        if (err) throw err;
        return callback(results);
    })
}
async function deleteReservation(id,callback){
    connection.query('delete from reservations where id = ?',[id],function(err, results, fields){
        if (err) throw err;
        return callback(results.affectedRows);
    })
}

module.exports = {getAllReservations,getAllReservationsRoot,newReservation,getAllAttractions,newAttraction,getAllGuides,deleteReservation}
