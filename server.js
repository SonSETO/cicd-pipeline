const express = require('express')

const app = express()

const PORT = 8080

app.get('/',(req,res)=>{
    res.json({
        status:200,
        message:'hello seto docker항해 99보다 이게 더 영양가 있다'
    })
})


app.listen(PORT,()=>{
    console.log('server running on port 8080')
})





