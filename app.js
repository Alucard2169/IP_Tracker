const express = require('express');
const app = express();
const PORT = 8000 || process.env.PORT;
require('dotenv').config();
const axios = require('axios')

app.get('/api/:ip', async (req, res) => {
    const ipAddress = req.params.ip
    const data = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.API_KEY}&ipAddress=${ipAddress}`);
    res.send(data.data)
})

app.listen(PORT, () => {
    console.log('server runing on PORT: ',PORT)
})