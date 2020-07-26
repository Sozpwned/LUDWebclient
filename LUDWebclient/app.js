const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000

app.get('/', (req,res) => res.sendFile('../index.html'))

app.listen(port, () => console.log('Example app listening on port: ${port}'))