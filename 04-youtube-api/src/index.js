import {connectDB} from './db/index.js';


connectDB();


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