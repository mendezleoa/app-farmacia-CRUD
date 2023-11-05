import mongoose from 'mongoose';
import 'dotenv/config';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MongoDB_URI);
        console.log("Se conecto a la base de datos");
    }
    catch(err) {
        console.log(err);
    }
}
