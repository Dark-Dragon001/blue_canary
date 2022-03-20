const {createPool} = require("mysql");

const pool = createPool(
    {
        host: "localhost",
        port: "3306",
        user: "root",
        password: "database"
    });

pool.query(
    `use Blue_Canary;
    select * 
    from user`,
    (err, res) => {
        return console.log(res);
});