// console.log("node project created");
// console.log("hello");
const express = require("express");
const app  = express();
const port = 5000

app.listen(port,()=>{
    console.log("Server Connected!!",port);
    
})
app.get('/',(req,res)=>{
        console.log("HOme Api call");
        res.send({
            status:200,
            success:true,
            message:"HOme api call "

        })
        
})

app.get('/about',(req,res)=>{
    res.send(
        {
            status:200,
            success:true,
            message:"About page call"
        }
    )

})
app.get("/gallery",(req,res)=>{
    res.json({
        status:200,
        success:true,
        message:"gallery loaded"
    })
})




// console.log("bye");

