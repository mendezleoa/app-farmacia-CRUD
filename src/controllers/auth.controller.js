import Usuario from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";

export const usersList = async (req, res) => {
    try {
        const usuariofind = await Usuario.find({});
        res.json(usuariofind);
    } catch (err) {
        console.log(err);
    }
};

export const usersGET = async (req, res) => {
    const { nombreprod } = req.query;
    try {
        const usuariofind = await Usuario.findOne({"nombreprod": nombreprod});
        res.json(usuariofind);
    } catch (err) {
        console.log(err);
    }
};

export const usersPOST = async (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body);
    try {
        const passwordHash = await bcrypt.hash(password, 10)

        const newUsuario = await new Usuario({
            username,
            email,
            password: passwordHash
        });
        newUsuario.save();
        const token = await createAccesToken({id: newUsuario._id})
        res.cookie('token', token)
        res.send({
            id: newUsuario._id,
            username: newUsuario.username,
            email: newUsuario.email
        });
    } catch (err) {
        console.log(err);
    }
};

export const usersPUT = async (req, res) => {
    const { _id } = req.query;
    const { nombreprod, categoria, precio, cantidad, descripcion } = req.body;
    try {
        const usuarioput = await Usuario.updateOne({"_id": _id},{
            nombreprod,
            categoria,
            precio,
            cantidad,
            descripcion
        });
        res.json(usuarioput);
    } catch (err) {
        console.log(err);
    }
};

export const usersDELETE = async (req, res) => {
    const { _id } = req.query;
    try {
        const usuariodelete = await Usuario.deleteOne({"_id": _id});
        res.json(usuariodelete);
    } catch (err) {
        console.log(err);
    }
};