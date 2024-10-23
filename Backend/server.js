import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'; // Ensure correct import path
import ProductRoutes from './routes/Productroutes.js'
import cors from "cors";
import path from 'path'

// Load environment variables
dotenv.config({ path: './Backend/.env' });

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json())
const PORT = process.env.PORT || 5001;
const __dirname=path.resolve()

app.use('/api/product',ProductRoutes)

if(process.env.NODE_ENV ==="production"){
  app.use(express.static(path.join(__dirname,"/Frontend/dist")))

  app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"Frontend","dist", "index.html"))
  })
}


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
