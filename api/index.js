import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import CategoryRoutes from './routes/category.js';
import Product from './models/product.model.js';
import ProductRoutes from './routes/product.js'
const app = express();

app.use(express.json())
app.use(cors())

const PORT = 5454;
app.listen(PORT, () => {
    console.log("Server is running on port" , PORT);
});

app.get("/",(req,res)=>{
    return res.status(200).send({message : "welcome to apala bazar api - node", status: true})
})

// "mongodb+srv://shivamofficial285:VhAqQlSd7UO4mSO7@apalabazar.jcypil6.mongodb.net/";
// const MONGO = "mongodb+srv://apalabazar:IAKQKP3lF4hcyKg2@cluster0.k8mosmp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongodb+srv://apalabazar:IAKQKP3lF4hcyKg2@cluster0.k8mosmp.mongodb.net/
const MONGO = "mongodb://localhost:27017/apalabazar";
mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

  const JWT_SECRET="fnojfnmaokokmdkmfad"

  const generateToken=(userId)=>{
      const token=jwt.sign({userId},JWT_SECRET,{expiresIn:"48h"})
      return token; 
  }

  const getUserIdFromToken=(token)=>{
    
  }
  app.use('/api/category',CategoryRoutes);  
  app.use('/api/product', ProductRoutes);  