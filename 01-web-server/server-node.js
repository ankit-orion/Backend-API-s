require('dotenv').config();
const express = require('express');
// we can write import express from 'express' it's just a way to write code with ES6

const app = express();
// in case we don't have the port free on others server so we have to change the port number
app.get('/',(req, res)=>{
    res.send('Hello World');
})
app.get('/about', (req, res)=>{
    res.send("Hello my name is Ankit Mihsra")
})
app.get('/twitter', (req, res)=>{
    res.send("this is my twitter account")
})
app.get('/login', (req, res)=>{
    res.send('<h1>this is my login page</h1>')
})
app.listen(process.env.PORT, ()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
    
})