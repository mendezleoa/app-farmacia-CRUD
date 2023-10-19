import Producto from "../models/producto.model.js";

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
        res.json("Producto guardado");
    } catch (err) {
        console.log(err);
    }
}