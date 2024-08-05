const express = require('express')
const cors = require('cors')
const userRouter = require('./router/userRouter')
const db = require('./config/db')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/user', userRouter)

app.listen(5000, () => {
    db()
    console.log('listening on port');
})

