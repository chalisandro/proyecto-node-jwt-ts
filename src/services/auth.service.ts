import { User } from "../models/user.interface"
import jwt from "jsonwebtoken"

const JWR_SECRET = process.env.JWT_SECRET || 'default-secret'

export const generateToken = (user: User): string => {
    return jwt.sign({id: user.id, email: user.email}, JWR_SECRET,{expiresIn: '1hora'})
}