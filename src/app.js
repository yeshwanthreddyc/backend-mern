const express = require('express');

const app = express();








app.use ("/test", (req,res,next) =>{
//res.send('hello from the server')
next();},

(req,res,next)=>{
    //res.send("2nd handler")
    next();
},
(req,res)=>{
    res.send("from 3rd handler")
}
);
app.get("/user",(req,res)=>{
    res.send({firstname:"yash" ,lastname:"reddy"})
});
app.post ("/user",(req,res)=>{
res.send("data saved successfully")});

app.listen(3000, () => {
    console.log('server is running succesfully')
});