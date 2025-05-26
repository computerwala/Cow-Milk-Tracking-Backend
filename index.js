const express = require('express');
const cors = require('cors');
require('./db');
require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'https://cow-milk-tracking-frontend.vercel.app',
    methods: ['GET', 'POST'],
    credentials: true,
  }));
  
app.use(express.json());
app.use('/sessions', require('./routes/sessions'));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});