import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    "nombreprod": {
        "type": String,
        "required": true,
        "unique": true
    },
    "categoria": {
        "type": String,
        "required": true
    },
    "precio": {
        "type": Number,
        "required": true
    },
    "cantidad": {
        "type": Number,
        "required": true
    },
    "descripcion": {
        "type": String,
        "default": "N/A",
        "maxLength": 80
    }
});

export default mongoose.model('Producto', productoSchema);