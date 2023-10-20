import Producto from "../models/producto.model.js";

export const itemsList = async (req, res) => {
    try {
        const productofind = await Producto.find({});
        res.json(productofind);
    } catch (err) {
        console.log(err);
    }
};

export const itemsGET = async (req, res) => {
    const { nombreprod } = req.query;
    try {
        const productofind = await Producto.findOne({"nombreprod": nombreprod});
        res.json(productofind);
    } catch (err) {
        console.log(err);
    }
};

export const itemsPOST = async (req, res) => {
    const { nombreprod, categoria, precio, descripcion } = req.body;
    console.log(req.body);
    try {
        const newProducto = await new Producto({
            nombreprod,
            categoria,
            precio,
            descripcion
        });
        newProducto.save();
        res.send("Producto guardado");
    } catch (err) {
        console.log(err);
    }
};