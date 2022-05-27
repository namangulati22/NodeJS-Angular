const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/getData', (req, res) => {
    res.json({
        "statusCode" : 200,
        "statusMessage" : "SUCCESS",
        "message" : "Hello World!"
    })
})

app.listen(3000, (req, res) => {
    console.log('Express API is running at port 3000');
})