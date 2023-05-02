const mariadb = require("mariadb");

const express = require("express");

const app = express();

// Mariadb pool.
const db = mariadb.createPool(
    {
        host: "localhost",
        user: "root",
        password: "Database@2023",
        database: "Blue_Canary",
        connectionLimit: 5,
        socketPath: "/run/mysqld/mysqld.sock"
    }
);

