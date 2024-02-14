const express = require('express')
const app = express()
const port = 4000
const connectDb = require("./configs/dbConnection")
const taskRoute = require("./routes/taskManager")

app.use(express.json())
app.use("/tasks", taskRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
connectDb()

