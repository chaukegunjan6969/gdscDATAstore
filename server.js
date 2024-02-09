const express = require('express');
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());

require('dotenv').config();

require('./dbconn/dbCon').connect();

const routes = require("./Routes/routes");
app.use("/api/gunjan", routes);



app.get('/', (req,res)=>{
    res.send(`<h1>hii there </h1>`)
})

app.listen(3000)
console.log("app listening on 3000");