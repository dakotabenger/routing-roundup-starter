const express = require('express');

const app = express();
const port = 8081;


app.set('view engine', 'pug');

app.get("/", (req, res) => {
    res.send("Hello from Express!")
})


app.all(/^\/[A-Za-z0-9\-]*$/, (req, res) => {
    let randomNum = Math.floor(Math.random() * 100);
    const layoutVars = { randomNum, method: req.method, path: req.path };
    res.render('layout', layoutVars);
});



app.listen(port, () => {
    console.log(`Listening at Port ${port}`)
})