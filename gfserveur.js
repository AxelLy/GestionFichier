// Charge le module HTTP
var http = require("http");
var fs = require('fs');
var vm = require('vm');
var controleur = require("./gfcontroleur");




//var app = require('express');

// Crée un serveur HTTP qui écoute les requêtes sur le port 8000
http.createServer(function(request, response) {

 
  // Envoie le corps de la réponse "Hello World"
  response.end('ok\n');
}).listen(8000);

// app.get('/trc', ifiofiyfifiyf)

// Édite l'URL pour accéder au serveur
console.log('Server running at http://127.0.0.1:8000/');

controleur.Controller.gestiondossiers();

module.exports = { fs}
