const { animals } = require('./data/animals')
const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
const fs = require('fs');
const path = require('path');
//parse incoming string or array data
app.use(express.urlencoded({extended: true}));
//parse incoming JSON data
app.use(express.json());

app.use(express.static('public'))

function handleAnimalSubmit() {

}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
app.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, './public/animals.html'))
});
app.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, './public/zookeepers.html'));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})