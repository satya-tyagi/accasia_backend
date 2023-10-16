const mongoose=require('mongoose');

const mailSchema=mongoose.Schema({
    reciepents:[String],
    subject:String,
    msg:String
});
module.exports=mongoose.model('mail',mailSchema);
