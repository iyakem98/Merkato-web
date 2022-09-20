import express from 'express'
import dotenv from 'dotenv'
import feed from './data/feed.js'
import Bank from './models/bankModel.js'
import connectDB from './config/db.js'
import colors from 'colors'
import banks from './data/banks.js'
import bankRoutes from './routes/bankRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cryptoRoutes from './routes/cryptoRoutes.js'

dotenv.config()

connectDB()
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running dude')
})

app.use('/api/banks', bankRoutes)
app.use('/api/users', userRoutes)
app.use('/api/crypto', cryptoRoutes)



const PORT = process.env.PORT || 5001
app.listen(PORT, console.log(`server  running on ${process.env.NODE_ENV} port ${PORT}`.yellow.bold))