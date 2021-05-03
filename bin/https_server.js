/* Jeffery John experimenting w/ https */
var https = require('https');

var fs = require('fs');

var https_options = {

    key: fs.readFileSync("/home/ssrl/SSRL_Site/bin/PRIVATEKEY.key"),

    cert: fs.readFileSync("/home/ssrl/SSRL_Site/bin/www_smallsat_uga_edu_cert.cer"),

    ca: [

        fs.readFileSync('/home/ssrl/SSRL_Site/bin/www_smallsat_uga_edu_cert.cer'),

        fs.readFileSync('/home/ssrl/SSRL_Site/bin/www_smallsat_uga_edu_cert.cer')

    ]
};

https.createServer(options, function (req, res) {

    res.writeHead(200);

    res.end("Welcome to Node.js HTTPS Server");

}).listen(8443)