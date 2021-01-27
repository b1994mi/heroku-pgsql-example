const express = require('express')
const app = express()
const { sequelize, employee } = require('./models')
const port = process.env.PORT || 8000

sequelize.sync()

app.use(express.json())

app.get("/", async (req, res) => {
    try {
        const data = await employee.findAll();
        return res.send([data, "HOrraaay"])
    } catch (error) {
        return res.send(["Sesuatu ada yang salah, tapi sudah jalan?", error])
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
