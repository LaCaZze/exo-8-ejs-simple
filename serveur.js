


var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    toto(res);

});

function toto(res) {
    res.render('index', {
        prenom: 'michael', nom: 'ISSALY'
    })
}



app.listen(8240);
console.log('8240 is the magic port');
