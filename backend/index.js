import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
dotenv.config()
const port = 5000


const app = express()
app.use(express.json())
app.use(cors());
app.use('/auth', userRoutes);


mongoose.connect(process.env.MONGOURL).then(()=>{
  console.log('db connected successfuly')
}).catch((err)=>{
  console.log("couldn't connect to db",err)
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})