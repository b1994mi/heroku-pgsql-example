const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.get("/", (req, res) => {res.send("Hello World using Heroku")})

console.log("lah kok")

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
