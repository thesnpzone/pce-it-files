const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
app.use(express.json())


// DB connection

const CONNECTION_URL =
    "mongodb+srv://shreeyash:ShreeyashSHREEYASHShreeyashSHREEYASH@cluster0.iaq7x.mongodb.net/ERP?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true }, () =>
    console.log("Connected To DATABASE")
);

// Routers 


// Router For Files Upload

const Filecreate = require('./router/Files/create')
const Fileget = require('./router/Files/get')
const Filedelete = require('./router/Files/delete')

// Router For Notes Upload

const Notecreate = require('./router/Notes/create.js')
const Noteget = require('./router/Notes/get.js')
const Notedelete = require('./router/Notes/delete.js')

// API's


// API For Files Upload

app.use("/file", Filecreate);
app.use("/file", Fileget);
app.use("/file", Filedelete);

// API For Notes Upload

app.use("/note", Notecreate);
app.use("/note", Noteget);
app.use("/note", Notedelete);



app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});