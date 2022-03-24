const express = require('express');


const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});
app.get('/braunson', (req,res) => {res.send("Hey Braunson, How is life?")});

app.listen(port, ()=>console.log("Listening"));