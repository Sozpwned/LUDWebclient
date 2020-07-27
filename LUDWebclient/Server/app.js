const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const port = 3000

//Serve the website on request
app.get('/', (req,res) => res.sendFile(path.join(__dirname, '../Website', 'index.html')))

app.listen(port, () => console.log('Example app listening on port: ${port}'))