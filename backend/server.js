import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import Products from "./data/products.js"
const PORT  =  process.env.PORT ;
import cors from 'cors';


const app = express();  
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/products', (req, res) => {
    res.send(Products);
});

app.get('/api/product/:id', (req, res) => {
    const product = Products.find((p) => p._id === req.params.id);
    res.send(product);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
