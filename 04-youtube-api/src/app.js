import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// use method is use for middleware or to configure the middleware
// app.use(cors()) // this will allow all the request from all the origins
// here further cors will have an object with origin key and value as the origin of the request
// origin is the domain of the request that is allowed to access the server
// it is usually the frontend domain that is allowed to access the server
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    // credentials are true meaning that the server will accept the cookies from the frontend
    // creadentials are false meaning that the server will not accept the cookies from the frontend
    credentials:true
}));
// 
// if the request is in json format then it will be parsed by the express.json() middleware
// if the request is in urlencoded format then it will be parsed by the express.urlencoded() middleware
// if the request is in cookie format then it will be parsed by the cookieParser() middleware
// limit is used to limit the size of the request
// 16kb is the limit of the request
// if the request is larger than 16kb then the request will be rejected
// this is done to prevent the server from crashing due to large requests
// this is a security measure
// we can extend the limit to any size we want but it is recommended to keep it low because it is a security measure

app.use(express.json({
    limit: '16kb'
}))

// extended is true meaning that the query string will be parsed by the qs library
// extended is false meaning that the query string will be parsed by the querystring library
// limit is used to limit the size of the request
// 16kb is the limit of the request
// example of query string is ?name=abc&age=20 it will be parsed by the express.urlencoded() middleware
// and the result will be {name:'abc',age:'20'}
app.use(express.urlencoded({
    extended: true,
    limit:'16kb'
}))

// this is used to serve the static files from the public folder
// this is used to serve the images, css, js files 
// this is used to serve the files that are not changing
// here public is the folder that contains the static files
app.use(express.static('public'));

// cookieParser() is used to parse the cookies from the request and send the cookies in the response
// it allow us to access and set the cookies in the request and response
app.use(cookieParser())

export default app;
