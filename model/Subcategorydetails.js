const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://afsana:afsana@cluster0.xhbl3qk.mongodb.net/?retryWrites=true&w=majority")

.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

let sa=mongoose.Schema;
const subcateschema=new sa(
    {
        Sname:String,
        Cname:String
    }
);
var subcatemodel=mongoose.model("subcat",subcateschema)
module.exports=subcatemodel;