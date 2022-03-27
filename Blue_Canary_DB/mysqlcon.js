const express = require("express");
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "database",
        database: "Blue_Canary"
    }
);

db.connect();
db.query("SELECT * FROM USER", (err, result) =>
{
    if (err) throw err
    console.log(result);
});

/*
db.connect(function (err)
{
    if (err) throw err;
    console.log("Connected!");
    db.query("select * from User;", function (err, result)
    {
        if (err) throw err;
        console.log("Result " + result);
    })
});

*/