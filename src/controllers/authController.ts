import { Request, Response } from "express";
import { hashPassword } from "../services/password.service";
// Usar PrismaClient directamente desde Prisma
import { PrismaClient } from "@prisma/client";
import { generateToken } from "../services/auth.service";

// Instancia de PrismaClient
const prisma = new PrismaClient();

export const register = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    // Hashear la contraseña
    const hashedPassword = await hashPassword(password);
    console.log("Contraseña hasheada:", hashedPassword);

    // Crear el usuario usando el método correcto de Prisma
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    console.log("Usuario creado:", user);

    // Generar el token JWT
    const token = generateToken(user);
    console.log("Token generado:", token);

    // Enviar el token como respuesta
    res.status(201).json({ token });

  } catch (error) {
    console.error("Error en el registro:", error);
    res.status(500).json({ error: "Hubo un error en el registro" });
  }
};
