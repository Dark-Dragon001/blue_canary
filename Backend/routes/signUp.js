import express from "express";

const registerRouter = express.Router();

registerRouter.get("/registerUser",(req, res) =>{
    res.send("Please register");
});

export default registerRouter;