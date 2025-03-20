// external imports
const express = require("express");

const http = require("http");

const fs = require('fs');

const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

const peopleRouter = require("./router/people/peopleRouter");


const app = express();

const server = http.createServer(app);
dotenv.config();


// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })  
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

//registering cors
app.use(cors({  
    origin:'*',
    methods: ["POST", "GET","HEAD","PUT","PATCH","DELETE" ],
    credentials: true,    

}));

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));


app.use("/people", peopleRouter);

server.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
