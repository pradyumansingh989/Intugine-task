const express=require('express');
require("./Backend/db/conne");
const ShipmentDetail=require("./Backend/models/shipment");
const cors=require('cors');

const app=express();
const port=process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())

app.post("/",async (req,res)=>{
   try{
       const addingShipment= new ShipmentDetail(req.body)
       console.log(req.body);
      const insrt =await addingShipment.save();
        res.status(201).send(insrt);
   }catch(e){
        res.staus(400).send(e);
   }
})
app.get("/",async (req,res)=>{
    try{
        const getship =await ShipmentDetail.find({})
        res.send(getship);
    }catch(e){
        res.send(e);
    }
})

app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}`);
})

