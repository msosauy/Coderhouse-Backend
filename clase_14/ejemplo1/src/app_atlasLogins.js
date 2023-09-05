import express from "express";
import usersRouter from "./routes/user.router.js";
import mongoose from "mongoose";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", usersRouter);

mongoose.connect(
  "mongodb+srv://msosa:OJ9bgeMIrDF7pkEV@cluster-coder.bxbohyn.mongodb.net/estudiantes"
);

const server = app.listen(PORT, () => {
  console.log("Server running on port 8080");
});

// msosa 
// OJ9bgeMIrDF7pkEV
