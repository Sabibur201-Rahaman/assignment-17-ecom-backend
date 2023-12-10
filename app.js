const express =require('express');
const router =require('./src/routes/api');
const app= new express();

const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');

const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');
const cookieParser = require('cookie-parser');
const mongoose =require('mongoose');
const path = require("path");



// let URL="mongodb+srv://'e_commerce:sASNH0X4Yn5h9PWus@cluster0.7uslu.mongodb.net/MernEcommerce?retryWrites=true&w=majority";
// let url = "mongodb+srv://ccc:YnDE6v5lhwLoNaqW@cluster0.e7dqzg0.mongodb.net/e_commerce?retryWrites=true&w=majority"
let url = "mongodb+srv://ecom:G38QjHis2T6ETSo1@cluster0.e7dqzg0.mongodb.net/consumer?retryWrites=true&w=majority"
// let option={user:'testuser7777',pass:"testuser7777",autoIndex:true};
// let option={user:'e_commerce',pass:"sASNH0X4Yn5h9PWu",autoIndex:true};
mongoose.connect(url).then((res)=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})


app.use(cookieParser());
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)


app.use("/api/v1",router)

app.use(express.static('client/dist'));

// Add React Front End Routing
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})

module.exports=app;