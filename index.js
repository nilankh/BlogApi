const express = require('express');
const port = 8000;
const mongoose = require('mongoose');
const app = express();


app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server:${err}`);
    }
    console.log(`Server started on port ${port}`);
})