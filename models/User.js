const {Shema, model}=require('mongoose')
const shema=new Shema({
    email:{type: String, required: true, unique:true},
    password:{type: String, required: true},
    links: [{ type: Types.ObjectId, ref: 'Link' }]
})
module.exports=model('User', shema)