const mysql = require("mysql2");

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
    if (err)
    {
        console.log("error encountered: " + err.stack);
        return;
    }
    console.log("connection as id " + db.threadId)
});

db.query("select * from User;", (err, result) =>
    {
    if (err) throw err
        console.log(result);
    }
);

/*
db.connect(function (err)
{
    if (err) throw err;
    console.log("Connected!");
    db.query("select * from User;",
        function (err, result)
        {
        if (err) throw err;
        console.log(result);
         })
});

*/