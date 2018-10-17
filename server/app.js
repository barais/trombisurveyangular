const nano = require('nano')('http://localhost:5984');

const express = require('express')
var bodyParser = require('body-parser');
var path = require('path');
var app = express()
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(bodyParser.json({
    limit: '50mb'
}));


var port = process.env.PORT || 3002; // set our port
var router = express.Router(); // get an instance of the express Router

const dbName = 'trombi';

router.get('/', function (req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
});

app.use('/api', router);



nano.db.create(dbName);

router.post('/photo', function (req, res) {
    nano.uuids(2).then((ids) => {
        var trombi = nano.use(dbName)
        var data = req.body;
        data._id = ids[0];
        trombi.insert(data)
    }).then((response) => {
        res.json({
            message: 'ok'
        });
    })
});

router.post('/photos', function (req, res) {
    var trombi = nano.use(dbName)
    const mangoQuery = req.body.query;
    const parameters = req.body.parameters;
    trombi.find(mangoQuery).then((doc) => {
        res.send(doc);
    });

});


app.listen(port, function () {
    console.log('Example app listening on port ' + port)
})