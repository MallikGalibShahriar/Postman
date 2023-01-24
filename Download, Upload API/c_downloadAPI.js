const express = require('express');
app = express();

app.get("/download", function (req, res) {
    res.download("./uploads/car.png");
})

app.listen(3030, function () {
    console.log("Server Run Success in port 3030")
})
