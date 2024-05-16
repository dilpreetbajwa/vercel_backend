import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Router } from './routes/routes.js'

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGOBD_URI);
      console.log("Connected to mongoDB!");
    } catch (error) {
      console.log(error);
    }
  };

    app.use("/api", Router);

    app.get("/", (req, res) => {
        res.json("Hello");
    })
// Define routes and middleware here
// ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connect();
    console.log(`Server running on port ${PORT}`);
});