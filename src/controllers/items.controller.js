import Producto from "../models/producto.model.js";

export const itemsListGet = async (req, res) => {
    try {
        const productosFind = await Producto.find({});
        res.json(productosFind);
    } catch (err) {
        console.log(err);
    }
};

export const itemsGET = async (req, res) => {
    try {
        const productoFind = await Producto.findOne({ "nombreprod": req.params.nombreprod });
        if (!productoFind) return res.status(400).json({ message: "Producto no encontrado" });
        res.json(productoFind);
    } catch (err) {
        console.log(err);
    }
};

export const itemsPOST = async (req, res) => {
    const { nombreprod, categoria, precio, cantidad, descripcion } = req.body;
    console.log(req.body);
    try {
        const newProducto = await new Producto({
            nombreprod,
            categoria,
            precio,
            cantidad,
            descripcion
        });
        newProducto.save();
        res.json(newProducto);
    } catch (err) {
        console.log(err);
    }
};

export const itemsPUT = async (req, res) => {
    try {
        const productoUpdated = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!productoUpdated) return res.status(400).json({ message: "Producto no encontrado" });
        res.json(productoUpdated);
    } catch (err) {
        console.log(err);
    }
};

export const itemsDELETE = async (req, res) => {
    try {
        const productoDelete = await Producto.findByIdAndDelete(req.params.id);
        if (!productoDelete) return res.status(400).json({ message: "Producto no encontrado" });
        res.json(productoDelete);
    } catch (err) {
        console.log(err);
    }
};