const session = require("express-session");
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");
const app = express();


app.use(express.json());
app.use(session(
    {
        secret: "secret",
        resave: true,
        saveUninitialized: true
    }
));
app.use(express.urlencoded(
    {
        extended: true
    }
));
app.use(express.static(path.join(__dirname, "static")));

app.get("/", function (request, response)
{
    response.sendFile(path.join(__dirname, + ""))
})
app.listen(3306, () =>
{
    console.log("Server is Running!");
});

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "database",
        database: "Blue_Canary"
    }
);

db.connect(function (err)
{
    // Establishing the database connection.
    if (err)
    {
        console.log("error encountered: " + err.stack);
        return;
    }
    console.log("connection as id " + db.threadId)
});

/*
app.use(cors());

app.use("src/pages/login", (req, res) => {
        res.send({
            token: "tokenison"
        });
});

app.listen(3306, () => console.log("API is running!"));

 */



