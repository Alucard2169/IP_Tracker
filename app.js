const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;

const axios = require('axios')
const path = require('path')



app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname+'/public')))


app.get('/', (req, res) => {
    res.redirect('/api')
})


app.get(`/api/:ip`, async (req, res) => {
    const ipAddress = req.params.ip
    const data = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.API_KEY}&ipAddress=${ipAddress}`);
    res.send(data.data)
})

app.listen(PORT, () => {
    console.log('server runing on PORT: ',PORT)
})
