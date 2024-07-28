const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const port =5000
const mongooseurl=mongodb+srv//vanjarapusravanti:<password>@cluster0.0rz756s.mongodb.net/;
mongoose.connect(mongourl,{});
mongoose.connection.on('connected',() =>{
    console.log("mongodb connected successfully")
})
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});