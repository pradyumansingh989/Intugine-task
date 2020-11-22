const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/shipment",
{useCreateIndex:true,
userNewUrlParser:true,
useUnifiedTopology:true
}).then(()=>{
    console.log("Connection sucessful")
}).catch((e)=>{
    console.log("NO connection")
})
 