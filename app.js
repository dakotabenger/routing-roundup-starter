const express = require('express');

const app = express();
const port = 8081;


app.set('view engine', 'pug');

app.get("/", (req, res) => {
    res.send("Hello from Express!")
})

app.get(/(xyz)$/,(req,res) => {
    res.send("That's all I wrote.")
})

app.get("/capital-letters/:word",(req,res) => {
    let upperCase = req.params.word.toUpperCase()
    res.send(upperCase);
})

app.get("/:name/contact",(req,res) => {
    res.send("Contact")
})

app.get("/:name/bio",(req,res) => {
    res.send("Bio")
})

app.all(/^\/[A-Za-z0-9\-_]*$/, (req, res) => {
    let randomNum = Math.floor(Math.random() * 100);
    const layoutVars = { randomNum, method: req.method, path: req.path };
    res.render('layout', layoutVars);
});



app.listen(port, () => {
    console.log(`Listening at Port ${port}`)
})