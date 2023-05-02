import mariadb from "mariadb/callback.js";


// Mariadb pool. The database hase been connected through createConnection() function which is a call back function.
// The database can be connected through createPool() function. However, This function is a promise function, it would create problems while connecting.
export const db = mariadb.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Database@2023",
        database: "Blue_Canary",
        connectionLimit: 5,
        socketPath: "/run/mysqld/mysqld.sock"
    }
);


// db.query("SELECT * FROM USER", (err, rows) => {
//         console.log(rows); //[ {val: 1}, meta: ... ]
//         });