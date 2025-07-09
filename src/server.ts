import dotenv from 'dotenv'
dotenv.config()
import express, { NextFunction } from 'express'
import cors from 'cors'
import { errorHandler } from './middleware/errorHandler'
import { linkRouter } from './routers/linkRouter'
const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use('/', linkRouter)
app.use(errorHandler)

app.listen(PORT, ()=> console.log(`Server running in port: ${PORT}`))