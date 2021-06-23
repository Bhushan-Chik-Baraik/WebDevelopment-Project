const express = require('express');
const path = require('path');
const hbs = require('hbs')
const app = express();
const port = process.env.PORT || 8000;

//public static path

const staticpath = (path.join(__dirname,"../public"));
const temp_path = (path.join(__dirname,"../temp/views"));
const partials_path = (path.join(__dirname,"../temp/partials"));
// views Engine 
app.set('view engine','hbs');
app.set('views',temp_path)
hbs.registerPartials(partials_path)

app.use(express.static(staticpath));




//routing

app.get("/", (req, res)=>{
    res.render("index");

});
app.get("/about", (req, res)=>{
    res.render("about");

});

app.get("/weather", (req, res)=>{
    res.render("weather");
});

app.get("*", (req, res)=>{
    res.render("error",{
        errorMsg: 'Opps! Page Not Found'
    });

});

app.listen(port , ()=>{
    console.log(`listing to the port at ${port}`);
});