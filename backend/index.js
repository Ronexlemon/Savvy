const express = require("express");
const App = express();
const cors = require("cors");
const authroute = require("./routes/user")
const transaction  = require("./routes/transaction")

require('dotenv').config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const connectToDb = require("./lib/config/db")

App.use(express.urlencoded({ extended: true }));
// parse requests of content-type - application/json



App.use(express.json());
// CORS configuration
const allowedOrigins = ["http://localhost:3000", "https://atlas-ke.net","http://localhost:3000/", "https://atlas-ke.net/"];
App.use(cors({
    origin: allowedOrigins,
    exposedHeaders: 'Set-Cookie'
}));
App.options('*', cors());

// Body parsing middleware
App.use(bodyParser.urlencoded({ extended: true, limit:"50mb",parameterLimit:50000 }));
App.use(bodyParser.json({limit: '50mb'}));
App.use(cookieParser());



const PORT = 3000;

(async=async ()=>{
    try{
        await connectToDb();

    }catch(error){
        console.log("error connecting to database")
    }

})()

App.use("/api/auth",authroute);
App.use("/api/transaction",transaction);

App.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


