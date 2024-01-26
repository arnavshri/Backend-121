const mongoose = require("mongoose")

const uri = "mongodb+srv://sprajapati:Entropy@cluster0.nzhdw.mongodb.net/test-db?retryWrites=true&w=majority"

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database Connected")
})

