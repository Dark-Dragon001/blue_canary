

//const mariadb = require("mariadb");
const express = require("express");


const app = express();


/*



async function dbConnector() {
    let conn;
    try {
        conn = await db.getConnection();    //Connects to the database.
        console.log("Database connection established successfully!");

        const rows = await conn.query("select * from User;");   //Write database query.
        console.log(rows);

        //const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
       // console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

    } catch (err) {
        throw err;

    } finally {
        if (conn) return conn.close();
    }
}

dbConnector()
    .then(() => {
        console.log("Results returned!");
    });

*/


app.get("/public/index.html",function (req,res){
    res.sendFile( __dirname + "index.html");
})



