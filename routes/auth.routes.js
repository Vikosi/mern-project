const {Router}=require('express')
const User=require('../models/User')
const router=Router()
router.post('register', async (req,res)=>{
    try{
       const {email,password}=req.body
        const candidate = await User.findOne({ email })
    }catch (e) {
       res.status(500).json({message:'Somthing went wrong, try again'})
    }
})
router.post('login', async (req,res)=>{

})
module.exports=router