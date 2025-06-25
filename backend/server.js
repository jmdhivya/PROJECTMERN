const express = require('express');
const dotenv = require('dotenv');
const router = require('./Routers/egRouters');      
// const todorouter = require('./routes/todoRouters'); 
const connectDB = require('./config/db');

const app = express();
dotenv.config();

const PORT = process.env.PORT;

connectDB();

app.use(express.json());

app.use(router);       
// app.use('/todo', todorouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
