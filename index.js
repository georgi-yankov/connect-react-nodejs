const dotenv = require("dotenv").config();
const express = require("express")
const app = express()
const port = process.env.PORT || 4000
const cors = require("cors")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get("/", cors(), async (req, res) => {
	res.send("This is working")
})

app.get("/home", cors(), async (req, res) => {
	res.send("This is the data for the home page")
})

app.post("/post_name", async (req, res) => {
	let { name } = req.body
	console.log(name)
})

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})
