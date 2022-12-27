const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const pat = path.join(__dirname,"/public")
const partialPath = path.join(__dirname,"/views/partials");

var myHeaders = new Headers();
myHeaders.append("apikey", "IzpW8GJB1RX1dYuuhmQHW62W6iBYMyHg");


app.set("view engine","hbs")
hbs.registerPartials(partialPath)

app.use(express.static(pat))

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/account",(req,res)=>{
    res.render("account")
})

app.get("/becomeseller",(req,res)=>{
    res.render("becomeseller")
})

app.get("/cart",(req,res)=>{
    res.render("cart")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.get("/myaccount",(req,res)=>{
    res.render("myaccount")
})

app.get("/productdetail",(req,res)=>{
    res.render("productdetai")
})

app.get("/sellercreateid",(req,res)=>{
    res.render("sellercreateid")
})

app.get("/shop",(req,res)=>{
    res.render("shop")
})

app.get("/wishlist",(req,res)=>{
    res.render("wishlist");
})


app.get("*",(req,res)=>{
    res.render("404")
})

app.listen(3000,(req,res)=>{
    console.log("listning")
})