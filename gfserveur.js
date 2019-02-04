// Charge le module HTTP
var http = require("http");
var fs = require('fs');
var vm = require('vm');
var express = require('express');
var app = express();
var controleur = require("./gfcontroleur");
var clog = console.log;

var leresult = controleur.Controller.gestiondossiers();
clog(leresult);



app.get('/', function (req, res) {
  res.send(leresult[0]);
  
})
app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})

// Crée un serveur HTTP qui écoute les requêtes sur le port 8000
http.createServer(function(request, response) {
 
  // Envoie le corps de la réponse "Hello World"
  response.end('ok');
}).listen(8000);

// app.get('/trc', ifiofiyfifiyf)

// Édite l'URL pour accéder au serveur
console.log('Server running at http://127.0.0.1:8000/');



module.exports = {fs}
