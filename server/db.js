const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "kitchenUser",
  database: "Kitchen",
  password: "mypassword"
});

 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });