require('dotenv').config()
const express = require('express')
const { connection } = require('./configs/dbConfig')
const app = express()


app.use(express.json())

const port = process.env.port || 8080


app.listen(port,async()=>{
try{
    await connection
    console.log(`app is running on http://localhost:${port}`)
} catch (err){
 console.log(err)
}
})
