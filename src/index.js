import dotenv from "dotenv";
import connectDB from "./db/connection.js"; // Corrected path to the renamed file

dotenv.config({ path: "./.env" }); // Load environment variables first

// Call the database connection function
connectDB()
.then(() => {
    // Start your server here, e.g., if you have an app instance
    // app.listen(process.env.PORT || 8000, () => {
    //     console.log(`Server is running on port ${process.env.PORT || 8000}`);
    // });
})
.catch((err) => {
    console.log("MongoDB connection failed !!! ", err);
});

// Other application logic (e.g., express app setup, routes) will go here
// For now, it just connects to the DB.



// import express from "express";

// const app = express();

// ;( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error", (err) => {
//             console.error("Error in Express server:", err);
//             throw err;
//         });

//        app.listen(process.env.PORT, () => {
//         console.log(`Server is running on port ${process.env.PORT}`);
//        })

//     }catch(err){
//         console.error("Error connecting to MongoDB:", err);
//         throw err;
//     }
// })();``