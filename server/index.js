import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
dotenv.config();
//Usage of Routes
//use /auth to go and read what in AuthRoute file after localhost:9000/auth/
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/posts", PostRoute);
mongoose
  .connect(
    "mongodb+srv://user2000:test234@cluster0.0jwhkdk.mongodb.net/socialappkiwi?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log(`Listening at port ${process.env.PORT}  `);
    })
  )
  .catch((error) => {
    console.log(error);
  });
