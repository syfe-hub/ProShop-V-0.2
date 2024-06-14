//! init npm
//*insert "type": "module", in [package.json]
//creat a backend folder in root with server.js o n it
    //* npm init -y
    //* npm i express
    //* npm i mongoose
    //* npm i dotenv    
    //* npm i nodemon
    //* npm i cors
    //* npm i concurrently //Run multiple commands concurrently (at the same time)
    //* Adjust the start script in the root folder
        //? "scripts": {
        //?      "start": "node ./backend/server.js ",
        //?      "server": "nodemon ./backend/server.js ",
        //?      "client": "npm start --prefix frontend",
        //?      "dev": "concurrently \"npm run server\" \"npm run client\""
        //? }
        //todo and now we can run the client and the server at the same time using >> npm run dev
    //* create a.env file in the root folder
    //* create a file name .env in root
            //* write this lines on .env file
                //?NODE_ENV=development
                //?PORT=5000
    //* create the backbone of express server 
        //?import express from 'express';
        //?import dotenv from "dotenv";
        //?dotenv.config();
        //?import cors from 'cors';
        //? const PORT  =  process.env.PORT;
        //? const app = express();         
        //? app.use(cors());
        //? app.get('/', (req, res) => {
        //?     res.send('Hello World');
        //? });


        //? app.listen(PORT, () => {
        //?     console.log(`Server is running on port ${PORT}`);
        //? });
    //* copy the porducts data in folder inside the backend folder and name it data
    //*import Products from "./data/products.js"
    //* Add to routers for products and product:id
         //? app.get('/api/products', (req, res) => {
         //?     res.send(Products);
         //? });
    
         //? app.get('/api/product/:id', (req, res) => {
         //?     const product = Products.find((p) => p._id === req.params.id);
         //?     res.send(product);
         //? });

//!  Fetch Products         
    //* in the frontend npm i axios package
    //* in the packge.json Frontend add 
        //? "proxy": "http://localhost:5000"
    //* in HomeScreen import axios from 'axios';
    //* in HomeScreen import { useEffect, useState } from 'react';
    //* in the App fn
        //? useEffect(() => {
        //?     const fetchProducts = async () => {
        //?       const { data } = await axios.get('/api/products');
        //?       setProducts(data);
        //?     }
        //?     fetchProducts();
        //?   },[])
 
