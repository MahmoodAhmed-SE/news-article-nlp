var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();


const app = express()

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('dist'))

console.log(__dirname)

//variable for url and api key
const url = ''
const apiKey = ''


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


// POST Route



// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

