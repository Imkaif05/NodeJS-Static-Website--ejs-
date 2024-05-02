const express = require('express')
const app = express()

app.set("view engine","ejs");  //for template files (.html-->.ejs) [views]
app.use(express.static("./public")) //for static files (images,styles,js) [public]

app.get('/',(req,res)=>{
    // res.send("KAIF")
    res.render("index")
})

app.get('/about',(req,res)=>{
    // res.send("KAIF")
    res.render("about",)
})

app.get('/contact',(req,res)=>{
    // res.send("KAIF")
    res.render("contact",{name:"kaif",age:20})
})

app.listen(2000,()=>{
    console.log("Server is now listning");
})