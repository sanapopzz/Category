const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://afsana:afsana@cluster0.xhbl3qk.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB connected")
})
.catch(err=>console.log(err));

let sc=mongoose.Schema;
const catschema=new sc({
    Cname:String,
    Status:String
});
var catemodel=mongoose.model("cate",catschema)
module.exports=catemodel;