const express = require('express');
const cors = require('cors');
const app = express();
const db = require("./db");

//import routes
const productRoutes = require('./routes/productRoutes');

require('dotenv').config()
    
app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);



app.listen(5000, ()=> {
    console.log("Server has started on port 5000")
});