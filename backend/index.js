import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';

const app = express()
const port = 5000

dotenv.config()
mongoose.connect(process.env.MONGOURL).then(()=>{
  console.log('db connected successfuly')
}).catch((err)=>{
  console.log("couldn't connect to db",err)
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



// Routes
app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
  res.send('Hello World! -----------')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})