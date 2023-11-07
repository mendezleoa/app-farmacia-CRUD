import Usuario from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createAccesToken } from "../libs/jwt.js";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const passwordHash = await bcrypt.hash(password, 10)

        const newUsuario = await new Usuario({
            username,
            email,
            password: passwordHash
        });
        newUsuario.save();
        const token = await createAccesToken({ id: newUsuario._id })

        res.cookie('token', token)
        res.json({
            id: newUsuario._id,
            username: newUsuario.username,
            email: newUsuario.email
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err);
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userFind = await Usuario.findOne({ email });

        if (!userFind) return res.status(400).json({ message: "Email or password incorrect" })

        const isMatch = await bcrypt.compare(password, userFind.password);

        if (!isMatch) return res.status(400).json({ message: "Email or password incorrect" })

        const token = await createAccesToken({ id: userFind._id })

        res.cookie('token', token)
        res.json({
            id: userFind._id,
            username: userFind.username,
            email: userFind.email
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err);
    }
};

export const logout = async (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0),
    });
    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userFind = await Usuario.findById(req.user.id);

    if (!userFind) return res.status(400).json({ message: "User not found" });

    return res.json({
        id: userFind._id,
        username: userFind.username,
        email: userFind.email
    });
};

export const verifyToken = async (req, res) => {
    const { token } = req.cookies;

    if (!token) return res.status(400).json({ message: "Invalid token" });

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(400).json({ message: "Invalid token" });
        const userFind = await Usuario.findById(user.id);
        if (!userFind) return res.status(400).json({ message: "Invalid token" });

        return res.json({
            id: userFind._id,
            username: userFind.username,
            email: userFind.email
        });
    });
}
