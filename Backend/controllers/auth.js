import {db} from "../dbCon.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



    // Registration/Sign up form behaviour function.
export const register = (req, res) => {
    //Check if user exists.
        // Database match query to check whether a user exits or not.
    const getQuery = "SELECT * FROM Blue_Canary.USER WHERE username = ?";

    // The username value from user is taken and compared with the database base, since username is a unique value.
    db.query(getQuery, [req.body.username], (err, data) => {
        if (err)
            //console.error(err);
            return res.status(500).json(err);
        if (data.length)
            return res.status(409).json({ message: "User already exists, please choose another username!" });
    });


    //Create a new user
        //Hashing password.
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        // Database insert query for adding a new account.
    const insertQuery = "INSERT INTO Blue_Canary.USER (name, surname, email, username, password, dateOfBirth) VALUES (?)";
        
        // Values for the database insert query.
    const values = [
        req.body.name,
        req.body.surname,
        req.body.email,
        req.body.username,
        hashedPassword,
        req.body.dateOfBirth
        ];

        // Registration data from the users is taken and inserted in the database.
    db.query(insertQuery, [values], (err, data) => {
        if (err)
            return res.status(500).json(err);
        return res.status(201).json({ message: "User has been created successfully." });
     });
};


    // Login form behaviour function.
export const login = (req, res) =>{
        // Query to match the data of database and user's for username and password.
    const loginQuery = "SELECT * FROM Blue_Canary.USER WHERE username = ?";

        // Compare the user's data with the database for username, if the username exist or not.
    db.query(loginQuery, [req.body.username], (err, data) => {
        if (err)
            return res.status(500).json(err);
        if (data.length === 0)
            return res.status(404).json({ message: "Invalid username or password!" });

            // Query for password match.
        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);

            // Check if the password for the specific username matches.
        if (!checkPassword)
            return res.status(400).json({ message: "Invalid username or password!" });

        // JWT tokens.
            // Tokens/Cookies hold the user credential temporary for usage ease.
        const token = jwt.sign({id:data[0].id}, "secretkey");

        const {password, ...others} = data[0]

        res.cookie("accessToken", token, {
            httpOnly: true,
        })
            .status(200)
            .json(others);
    });


};


// Logout button behaviour function.
export const logout = (req, res) =>{
        // Cookies created for the login session is deleted, and user is logged out.
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    })
        .status(200)
        .json({ message: "Successfully logged out!" });

};



