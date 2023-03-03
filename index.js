const express=require("express");
const app= express();
const connectToMongo=require('./api/database')
const bodyParser=require("body-parser");
const authRoutes = require('./api/Routes/authRoutes');
const port=4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connectToMongo();
const cors =require('cors')
app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000",
    optionsSuccessStatus:200
}))
app.get('/',(req,res)=>{
    return res.status(200).json;
})
app.use('/api',authRoutes)

app.listen(port,()=>{
    console.log('Server Run on port',port);
})