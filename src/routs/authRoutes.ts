import express from "express";
import { register } from "../controllers/authController"; // Asegúrate de que la ruta del controlador sea correcta

const router = express.Router();

// Definir la ruta POST para el registro
router.post('/register', register);

// Aquí puedes agregar la ruta de login en el futuro
router.post('/login', () => {});

export default router;
