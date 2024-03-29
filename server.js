const { animals } = require('./data/animals')
const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/index')
//parse incoming string or array data
app.use(express.urlencoded({extended: true}));
//parse incoming JSON data
app.use(express.json());
app.use(express.static('public'))

app.use('/api', apiRoutes);
app.use('/',htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})