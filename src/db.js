import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/FarmaciaDB");
        console.log("Se conecto a la base de datos");
    }
    catch(err) {
        console.log(err);
    }
}
