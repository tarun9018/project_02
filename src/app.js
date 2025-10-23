import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import { use } from "react"

const app = express()

app.use( cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"10kbs"}))
app.use(express.urlencoded({extended:true,limit:"10kbs"}))
app.use(express.static("public"))
app,use(cookieParser())

export { app }