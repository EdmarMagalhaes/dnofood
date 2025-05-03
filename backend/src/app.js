const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API DnoFood funcionando!');
});

module.exports = app;