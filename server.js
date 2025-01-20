const express = require('express')

const app = express()

const PORT = 8080

app.get('/',(req,res)=>{
    res.json({
        status:200,
        message:'hello seto docker'
    })
})


app.listen(PORT,()=>{
    console.log('server running on port 8080')
})