const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multiparty = require('connect-multiparty');
const multipart = require('connect-multiparty');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const corsOpt = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsOpt));

const multiPartMiddleware = multipart({uploadDir: './uploads'});
app.post('/upload', multiPartMiddleware, (req, res) => {
    const files = req.files;
    console.log(files);
    res.json({message: files});
});

app.use((err, req, res, next) => {
    res.json({error: err.message})
})

app.listen(8000, () => {
    console.log('server on port 8000')
})