import express from 'express'
import mongoose from 'mongoose'
import methodOverride from 'method-override'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

//Middleware
app.use(cors())
app.use(express.json())
app.use(methodOverride('_method'))
app.use(morgan('dev'))

// Connects to MongoDB Database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log(`Connected to MongoDB: ${mongoose.connection.name}`))
    .catch((error) => console.error('Error connecting to MongoDB:', error))

// API Routes (only JSON responses for frontend)

