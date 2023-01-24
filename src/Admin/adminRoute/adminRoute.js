

 const express = require('express');
 const Admin = require("../AdminSchema/adminSchema");

const adminRouter =express.Router();


adminRouter.post("/query",async(req,res)=>{


    let {companyname,position,contract,locatioon}=req.body;


 try{
    let result =await Admin.create({
        companyname,position,contract,locatioon
    })
        return res.status(201).send(result)
 }catch(e){
      return res.status(404).send(e)
 }

 

})

adminRouter.get("/query",async(req,res)=>{

   let result= await Admin.find()
    return res.status(200).send(result)
    })

module.exports=adminRouter;
 