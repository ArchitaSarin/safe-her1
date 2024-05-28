const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

app.use(
    express.urlencoded({ extended: true })
);
    
app.use(express.json());

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res, next) {
    res.send("Hello world");
});

const userRouter = require("./routes/user");
app.use("/user", userRouter);

const postRouter = require("./routes/post");
app.use("/post", postRouter);

app.listen(port, () => {
    console.log(`⚡[server]: Server is running at http://localhost:${port}`);
});

const uri = 'mongodb+srv://dev_user:Pa55word!!@cluster0.gfumdny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0?authSource=admin'; // load mongodb key

mongoose.set("strictQuery", false);

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("⚡[server]: MongoDB database connection established successfully.");
});