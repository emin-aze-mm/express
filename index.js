const express = require("express");
const data = require("./data.js")
const server =express();

server.get("/",(req,res)=>{
    res.send("Expressden salam olsun")
})

server.get("/actors",(req,res)=>{
    res.status(200).json(data);
})
server.get("/actors/:id",(req,res)=>{
    const {id} = req.params;
    const actorfind = data.find((actorfind)=>actorfind.id === parseInt(id))
    if(actorfind){
        res.status(202).json(actorfind)
    }
    res.status(404).send("Axtardiginiz aktyor tapilmadi!..")
})
server.listen(5000,()=>{
    console.log("Server is up😉..")
})