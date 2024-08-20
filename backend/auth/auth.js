
import jwt from 'jsonwebtoken';
import { Users } from '../models/adminModel.js';

export const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.json({
        success: false,
        message: "login first!"
    })
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = await Users.findById(decoded._id);
    next();
}