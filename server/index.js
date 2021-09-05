const express = require('express');
const bodyParser = require('body-parser');

const custom = require("./custom")
const currency = require("../model/Currency")

const app = express();
app.use(express.json() ); 
app.use(express.urlencoded({ extended: true }));

app.post('/',(req, res) =>{
    // console.log("hit endpoint")
    // console.log(req.body)
    try{
        // I took the liberty to add a Capital/Currency option to deminstaight OOP principles, though I will make it the default option for this function
        data = custom.changeFloor(currency, req.body.amount);
        res.send(data);
    }catch{
        // I wanted to have fun with this project since its the weekend. :) I hope you like the Dinosaur theme!
        res.sendStatus(500, "https://www.youtube.com/watch?v=RfiQYRn7fBg");
    }

})

app.listen(5000);