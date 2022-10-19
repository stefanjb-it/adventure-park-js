const express = require('express')
const app = express()
const attractions = require('./routes/attractions')
const reservations = require('./routes/reservations')
const guides = require('./routes/guides')
const html = require('./routes/html')
const PORT = process.env.PORT || 15500
process.env.rootdir = __dirname

app.use(express.json())
app.use("/api/attractions", attractions)
app.use("/api/reservations", reservations)
app.use("/api/guides", guides)
app.use(express.static('./css'))
app.use("/",html)

app.listen(PORT)