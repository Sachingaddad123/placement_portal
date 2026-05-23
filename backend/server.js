const express = require('express')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require('./routes/auth')
const studentRoutes = require('./routes/students')
const companyRoutes = require('./routes/companies')
const jobRoutes = require('./routes/jobs')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/students', studentRoutes)
app.use('/api/companies', companyRoutes)
app.use('/api/jobs', jobRoutes)

app.get('/', (req, res) => {
  res.send('College Placement API Running')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))