const express = require('express')
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express()
const PORT =  8000;
const DATABASE_URL = process.env.DATABASE_URL;
const TeamRouter = require("./routes/Team.routes")

app.use(cors())
app.use(express.json())

mongoose.connect(DATABASE_URL).then(()=>{
    console.log('connected to db')
})

app.use("/team", TeamRouter)

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})