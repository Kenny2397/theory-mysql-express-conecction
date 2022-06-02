const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello World!");
});

app.listen(8000, () => {
    console.log("Server is running at port 8000.");
});