import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import authRouter from "./routes/auths.js";
import postsRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import commentsRoutes from "./routes/comments.js";
import likeRoute from "./routes/likes.js"
import {getUser} from "./controllers/user.js";
import posts from "./routes/posts.js";
import comments from "./routes/comments.js";

    // Instances.
const app = express();

//Middleware for parsing app/json
//     // Allows the input data for login.
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true)
    next()
});
    // For sending user data through req.body class.
app.use(express.json());
    // For third party links control.
app.use(cors({
    origin: "http://localhost:3000",
}));
// For user cookies and auths.
// app.use(cookieParser);


    //Routes
app.use("/auths", authRouter);

//app.use("/server/users", userRoutes)
//app.use("/register", registerRouter);
//app.use("/", registerRouter);
//app.use("/register", registerRouter);
//app.use("/register", registerRouter);

//app.use("/find/:userId", getUser);



app.listen(8000, () => {
    console.log("Server running!");
});