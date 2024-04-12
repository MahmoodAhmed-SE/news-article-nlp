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
const url = "https://api.meaningcloud.com/sentiment-2.1"
const apiKey = process.env.API_KEY


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


const processArticle = async (text) => {
    const formdata = new FormData();

    formdata.append("key", apiKey);
    formdata.append("txt", text);
    formdata.append("lang", "en");  // 2-letter code, like en es fr ...

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    try {
        const response = await fetch(url, requestOptions)
        return response
    } catch (error) {
        console.log('error', error)
    }
}

// POST Route
app.post('/post-article', async (req, res) => {
    const text = req.body.text;


    const res = await processArticle(text)

    // if there is response
    if (res) {
        
    }

})


// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})


