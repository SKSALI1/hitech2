import express from "express";

const app = express();
const port = 3000;


app.get("/", (req , res) =>{
    res.render("index.html",{
        dayType : "A Weekday",
        advice : "it's atime to work hard",
    });
})



app.listen(port, () =>{
    console.log('server is running on ' + {port})
})