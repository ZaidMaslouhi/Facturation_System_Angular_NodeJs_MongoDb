import express from 'express';
import router from './config/routes';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/invoices', {useNewUrlParser: true,useUnifiedTopology:true});
const db = mongoose.connection;

db.on('error',(err)=>{
    console.log(err);
});
db.once('open',()=>{
    console.log('Database is connected succesfully !!');
});

// Custom Middleware
app.use((req, res, next)=>{
    console.log('Custo Middleware is running !!');
    next();
});

// express json Middelware
app.use(express.json());
app.use(express.urlencoded());

// Cors Middleware
app.use(cors());

// Run the Server
const PORT = 3000;
app.listen(PORT, ()=>
    console.log(`Server is running at port : ${PORT}`)
);

// API Routing Middleware
app.use('/api', router);
app.use((req, res, next)=>{
    const error = Error('Not Found !!');
    error.message = 'Invalide Route';
    error.status = 404;
    next(error);
});

