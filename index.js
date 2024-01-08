// const express=require("express")
// const cors=new require("cors");

// const app=new express();
// const catmodel=require('./model/Categorydetails')

// app.use(express.urlencoded({extended:true}))
// app.use(express.json());
// app.use(cors());
 

// app.listen(3005,(request,response)=>{
//     console.log("port is running in 3005")

// })
// app.get('/',(request,response)=>{
//     response.send("hai")
// })
// app.post('/new',(request,response)=>{
//     console.log(request.body)
//     new catmodel(request.body).save();
//     response.send("Record Successfully Saved")
// })
const express=require("express")
const cors=require("cors")
// const CategoryRouter = require('./routes/Categoryroutes')
// const SubcateRouter = require('./Routes/Subcateroutes')
// const db = require("./Connection/Database")



const app=new express();
const catemodel=require('./model/Categorydetails')
const subcatemodel=require('./model/Subcategorydetails')

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

app.listen(3005,(request,response)=>{
    console.log("port is running in 3005")

})

// app.use("/c", CategoryRouter)

// app.use("/s", SubcateRouter)


app.get('/',(request,response)=>{
    response.send("hai")

})
app.post('/new',(request,response)=>{
    console.log(request.body)
    new catemodel(request.body).save();
    response.send("Record Successfully Saved")

})
app.post('/cnew',(request,response)=>{
    console.log(request.body)
    new subcatemodel(request.body).save();
    response.send("Record Successfully Saved")

})
app.get("/categoryview",async(request,response)=>{
    var data=await catemodel.find();
    response.send(data);
});
