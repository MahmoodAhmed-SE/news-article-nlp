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
require('dotenv').config()
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?"
const apiKey = process.env.API_KEY


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})



// POST Route
app.post('/article', async (req, res) => {
    const articleUrl = req.body.url
    
    const apiURL = `${baseURL}key=${apiKey}&url=${articleUrl}&lang=en`

    try {
        const cloudapiResponse = await fetch(apiURL)
        const articleInfo = await cloudapiResponse.json()

        res.status(200).json(articleInfo)
    }
    catch (error) {
        console.error("CloudApi Error", error)
        res.status(500).json("unavailable article info")
    }
})