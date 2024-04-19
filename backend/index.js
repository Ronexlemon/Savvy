const express = require("express");
const App = express();

require('dotenv').config();

const connectToDb = require("./lib/config/db")

App.use(express.urlencoded({ extended: true }));
// parse requests of content-type - application/json



App.use(express.json());


const PORT = 3000;

(async=async ()=>{
    try{
        await connectToDb();

    }catch(error){
        console.log("error connecting to database")
    }

})()


App.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


