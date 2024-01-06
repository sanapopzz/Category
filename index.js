const express=require("express")
const cors=new require("cors");

const app=new express();
const catmodel=require('./model/Categorydetails')

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());
 

app.listen(3005,(request,response)=>{
    console.log("port is running in 3005")

})
app.get('/',(request,response)=>{
    response.send("hai")
})
app.post('/new',(request,response)=>{
    console.log(request.body)
    new catmodel(request.body).save();
    response.send("Record Successfully Saved")
})
