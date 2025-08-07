import express from 'express'
import path,{dirname} from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoute.js'
import todoRoutes from './routes/todoRoute.js'
import dotenv from 'dotenv'
dotenv.config()


const app = express()

const PORT = process.env.PORT || 5000

const __filname = fileURLToPath(import.meta.url)

const __dirname = dirname(__filname)

app.use(express.json())

app.use(express.static(path.join(__dirname,'../public')))


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.use('/auth', authRoutes)



app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})