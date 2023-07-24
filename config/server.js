const express = require('express')
const cors = require('cors')


const app = express()
const path = require('path')


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../build")))


app.use('/accounts', accountRouter)
app.use('/imageUpload', uploadRouter);
app.use('/users', userRouter);

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"))
})

// app.get('/', (req, res) => {
// res.send('hello trucks')
// })

app.listen(process.env.PORT || PORT, async () => {
    await connectDB();
    // console.log(`server is running at ${PORT}`)
  })