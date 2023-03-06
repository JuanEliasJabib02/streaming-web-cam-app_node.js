const express = require("express")
const { router } = require("./routes/littlezoomroutes")
const http = require("http")
const app = express()


/* Make a server http using express */

const server = http.Server(app)

const io = require("socket.io")(server)


/* Routes */

app.use(router)


app.use(express.static(__dirname + "/public"));




module.exports = { app }