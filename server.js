require('dotenv').config();
require

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes); 
app.use('/api/sellers', sellerRoutes);
app.use(errorHandler);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('Database connection error:', err));  
