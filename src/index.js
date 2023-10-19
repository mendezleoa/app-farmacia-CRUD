import app from './app.js'
import { connectDB } from './db.js'

connectDB();
const port = 3000;

app.listen(port);
console.log('El servidor se inició en ', port);