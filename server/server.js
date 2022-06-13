const mysql = require("mysql2"); //mysql
const express = require("express"); //сервер
const bodyParser = require('body-parser'); //обработка POST-запросов


const app = express(); //создаем сервер


app.use(bodyParser.urlencoded({ extended: true })); //настройки для URL
app.use(bodyParser.json()); //данные предоставляются в .json
   

const connection = mysql.createConnection({ //создаем коннект к БД
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'toDoList'
});


app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
  


app.get("/weekNotes", function(req, res) {
    connection.query(
        'select * from weekNotes where (dateWeekNote >= ' + req.query.firstDateNotes + ' and dateWeekNote <= ' + req.query.lastDateNotes + ')',
        function(err, results, fields) {
            res.send(results); //можем использовать результат запроса в app.js 
        }
    ); 
});

app.post('/weekNotes', function(req, res) {
    connection.query(
        'insert into weekNotes (dateWeekNote, textWeekNote) values (' + req.body.dateWeekNote + ', ' + req.body.textWeekNote + ')',
        function(err, results, fields) {
            res.send(err);
        }
    ); 
});

app.put('/weekNotes', function(req, res) {
    connection.query(
        ('update weekNotes set dateWeekNote = ' + req.query.dateWeekNote + 
        ', textWeekNote = ' + req.query.textWeekNote + 
        ', colorWeekNote = ' + req.query.colorWeekNote + 
        ', statusWeekNote = ' + req.query.statusWeekNote + 
        ' where idWeekNote = ' + req.query.idWeekNote),
        function(err, results, fields) {
            res.send(err);
        }
    );
});

app.delete("/weekNotes", function(req, res) {
    connection.query(
        'delete from weekNotes where idWeekNote = ' + req.query.idWeekNote,
        function(err, results, fields) {
            res.send(err);
        }
    ); 
});



app.get("/commonNotes", function(req, res) {
    connection.query(
        'select * from commonNotes',
        function(err, results, fields) {
            res.send(results);
        }
    ); 
});

app.post('/commonNotes', function(req, res) {
    connection.query(
        'insert into commonNotes (columnCommonNote, textCommonNote) values ("' + req.body.columnCommonNote + '", "' + req.body.textCommonNote + '")',
        function(err, results, fields) {
            res.send(err);
        }
    ); 
});

app.put('/commonNotes', function(req, res) {
    connection.query(
        ('update commonNotes set textCommonNote = "' + req.body.textCommonNote + 
        '", colorCommonNote = "' + req.body.colorCommonNote + 
        '", statusCommonNote = "' + req.body.statusCommonNote + 
        '" where idCommonNote = "' + req.query.idCommonNote + '"'),
        function(err, results, fields) {
            res.send(err);
        }
    ); 
});

app.delete("/commonNotes", function(req, res) {
    connection.query(
        'delete from commonNotes where idCommonNote = ' + req.query.idCommonNote,
        function(err, results, fields) {
            res.send(err);
        }
    ); 
});


app.listen(3001, () => { //3001, т.к. 3000 занят реактом
    console.log("Сервер запущен на 3001 порту");
});