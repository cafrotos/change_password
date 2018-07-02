const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3002;
let app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./router/index'));
app.use((err, req, res, next) => {
    res.status = err.status || 500;
    res.json({
        message: err.message,
        err: {}
    })
})

app.listen(port, console.log('running on port: ' + port));