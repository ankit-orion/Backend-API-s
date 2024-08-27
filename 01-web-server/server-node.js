const express = require('express');
// we can write import express from 'express' it's just a way to write code with ES6

const app = express();
const port = 3000;
app.get('/',(req, res)=>{
    res.send('Hello World');
})
app.get('/about', (req, res)=>{
    res.send("Hello my name is Ankit Mihsra")
})
app.get('/twitter', (req, res)=>{
    res.send("this is my twitter account")
})
app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
    
})