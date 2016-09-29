var request = require('request');
var xpath = require('xpath');
var dom = require('xmldom').DOMParser;
var fs = require('fs');

var parser = require('./parseRequest.js');
var app = require('http').createServer(handler);
var io = require('socket.io')(app);

var wsdl = 'https://sws-crt.cert.sabre.com';
var openRequest = fs.readFileSync('OpenRequest.xml', 'utf-8');

io.listen(1032);
io.on('connection', function(socket)  {
  resultado = {};
  io.emit('produto', resultado);
});

function handler()  {}

request.post({
	headers: {
		'content-type' : 'text/xml;charset=utf-8',
	},
	url: wsdl,
	body: openRequest,
}, function(error, response, body){
  var select = xpath.useNamespaces({'wsse' : 'http://schemas.xmlsoap.org/ws/2002/12/secext'});
  var doc = new dom().parseFromString(body);

  var key = select('//wsse:BinarySecurityToken/text()', doc)[0].nodeValue;

  console.log('Key: ' + key);

  var req = { 'key':      key,
              'pessoas':  4,
              'iata':     'MIA',
              'end':      '11-24',
              'start':    '11-22',
        };

  requestBody = fs.readFileSync('Request.xml', 'utf-8');
  requestBody = parser(requestBody, req);


  request.post({
    headers: {
  		'content-type' : 'text/xml;charset=utf-8',
  	},
  	url: wsdl,
  	body: requestBody,
    }, function(error, response, body){

      var resp = {
        hotels:  []
      };

      var doc = new dom().parseFromString(body);
      var nome = xpath.select("//*[local-name(.)='BasicPropertyInfo']/@HotelName", doc),
          preco_min = xpath.select("//*[local-name(.)='RateRange']/@Min", doc),
          preco_max = xpath.select("//*[local-name(.)='RateRange']/@Max", doc),
          currency = xpath.select("//*[local-name(.)='RateRange']/@CurrencyCode", doc);
      for (var i = 0; i < nome.length; ++i)  {
        resp.hotels[i] = {};
        resp.hotels[i].nome = nome[i].nodeValue;
        resp.hotels[i].preco_min = preco_min[i] ? preco_min[i].nodeValue : 0;
        resp.hotels[i].preco_max = preco_max[i] ? preco_max[i].nodeValue : 0;
        resp.hotels[i].currency = currency[i] ? currency[i].nodeValue : 0;
      }

      console.log(resp.hotels);
      req = {
        'key': key,
      };
      requestBody = fs.readFileSync('CloseRequest.xml', 'utf-8');
      requestBody = parser(requestBody, req);


      request.post({
        headers: {
      		'content-type' : 'text/xml;charset=utf-8',
      	},
      	url: wsdl,
      	body: requestBody,
        }, function(error, response, body){
        });
    })
});
