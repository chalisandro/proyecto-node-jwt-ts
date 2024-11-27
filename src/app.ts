import dotenv  from "dotenv";
dotenv.config();
import express  from "express";
const app = express()
import authRoutes from "./routs/authRoutes";

app.use(express.json())

//Rutas
app.use('/auth', authRoutes)
//autentificacion
//usuario
export default app;