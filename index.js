const express = require('express')
const app = express()
const { sequelize, employees } = require('./models')
const port = process.env.PORT || 8000

// sequelize.sync()

app.use(express.json())

app.get("/", async (req, res) => {
    try {
        const data = await employees.findAll();
        return res.json({
            success: true
            , message: "success lho"
            , data: data
        })
    } catch (error) {
        return res.json({
            success: false
            , message: "nahloh gagal"
            , data: error
        })
    }
})

app.post("/", async (req, res) => {
    try {
        const data = await employees.create(req.body);
        return res.json({
            success: true
            , message: "success lho"
            , data: data
        })
    } catch (error) {
        return res.json({
            success: false
            , message: "nahloh gagal"
            , data: error
        })
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
