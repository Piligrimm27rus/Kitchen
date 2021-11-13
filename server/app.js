const express = require("express");
var mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "kitchenUser",
    database: "Kitchen",
    password: "mypassword"
});

const app = express();
connection.connect();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("/categores", function (request, response) {
    console.log('categores');
    connection.query('SELECT * FROM Category', function (err, result) {
        if (err) throw err;
        response.send(result);
        
    });
});

app.get("/kitchen", function (request, response) {
    console.log('kitchen');
    connection.query('SELECT * FROM Kitchen', function (err, result) {
        if (err) throw err;
        response.send(result);
        
    });
});

app.get("/dish", function (request, response) {
    console.log('dish');
    connection.query('SELECT * FROM Dish', function (err, result) {
        if (err) throw err;
        response.send(result);
        
    });
});

// начинаем прослушивать подключения на 3001 порту
app.listen(3001, () => console.log("Сервер запущен"));
//connection.end();
