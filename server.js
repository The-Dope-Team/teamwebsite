import express from 'express'; 

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});
app.get('/braunson', (req,res) => {res.send("Hello Braunson")});
app.get('/gilber', (req,res) => {res.send("Hello Gilber")});
app.get('/logan', (req,res) => {res.send("Hello Logan")});
app.listen(port, ()=>console.log("Listening"));
