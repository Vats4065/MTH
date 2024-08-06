const express = require('express')
const cors = require('cors')
const userRouter = require('./router/userRouter')
const db = require('./config/db')
const adminRouter = require('./router/adminRouter')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)

app.listen(5000, () => {
  db()
  console.log('listening on port');
})

