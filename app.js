const express = require('express');

const app = express();
const port = 8081;


app.set('view engine', 'pug');

app.get("/", (req,res) => {
    res.send("Hello from Express!")
})


app.listen(port,() => {
    console.log(`Listening at Port ${port}`)
})