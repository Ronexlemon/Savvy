const express = require("express");
const App = express();

App.use(express.json());


const PORT = 3000;


App.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


