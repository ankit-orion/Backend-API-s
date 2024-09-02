import connectDB from './db/index.js';
import app from './app.js';

connectDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        // res.send("Server is running on port");
        console.log("Server is running on port", process.env.PORT);
    })
    app.on("error", (err)=>{
        console.log("Error connecting to the database", err);
        throw err;
    })
    app.get('/', (req, res)=>{
        res.send('Hello application is running on port', process.env.PORT);
    })
})
.catch((err)=>{
    console.log("Mongodb database connection failed", err);
    throw err;
})


// ONE WAY OF CONNECTING TO THE DATABASE
// (async()=>{
//     try{
//         await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
//         app.on("error", (err) => {
//             console.log("Error connecting to the database", err);
//             throw err;
//         })
//         app.listen(process.env.PORT, () => {
//             console.log("Server is running on port", process.env.PORT);
//         })
//     }
//     catch(err){
//         console.log("Error connecting to the database", err); 
//         throw err;
//     }
// })()