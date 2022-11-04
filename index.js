import express from 'express';

import dotenv from 'dotenv';

const app=express();
dotenv.config();

app.unsubscribe(express.json({extended:false}));


const PORT= process.env.PORT || 5000;

app.listen(PORT,console.log(`Server running on ${PORT}`));
