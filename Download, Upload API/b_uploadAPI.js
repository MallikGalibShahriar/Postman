const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();


const storage = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, './uploads');
    },
    filename: function (req, file, callBack) {
        callBack(null, file.originalname)
    }
});

const upload = multer({
    storage: storage, fileFilter: function (req, file, callback) {
        const ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg') {
            return callback(new Error())
        }
        callback(null, true)
    }
}).single('myfile')
app.post('/upload', function (req, res) {
    upload(req, res, function (error) {
        if (error) {
            res.send("File Upload Failed (check your file format if png or jpg!)")
        }
        else {
            res.send("File Upload Success")
        }
    });
});


app.listen(5000, function () {
    console.log("Server Run Success in port 5000")
})
