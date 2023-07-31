const express = require('express')
const cors = require('cors')
const sequelize = require("./config/config")
const accountRouter = require("./routes/accountRoutes")
const userRouter = require("./routes/userRoutes")
// use syncTable to create tables in Database
const { syncTable } = require("./models")

const PORT = 3002

const app = express()
const path = require('path')


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, "../build")))


app.use('/accounts', accountRouter)
app.use('/users', userRouter);

// app.use("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"))
// })

app.get('/', (req, res) => {
  res.json({ hello: "world" })
})

app.listen(process.env.PORT || PORT, async () => {
  // await connectDB();
  syncTable();
  console.log(`server is running at ${PORT}`)
})