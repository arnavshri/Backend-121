const express = require("express")
const app = express()
const bodyparser = require("body-parser")
require("./utils/connection")
app.use(bodyparser.urlencoded({extended:false}))
// parse application/json
app.use(bodyparser.json())
app.use("/api", require("./routes/index"))


app.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"healthy"
    })
})

app.listen(3000,()=>{
    console.log("Listeing on Port 3000")
})