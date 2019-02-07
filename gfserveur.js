// Charge le module HTTP
var http = require("http");
var fs = require('fs');
var vm = require('vm');
var express = require('express');
var app = express();
var controleur = require("./gfcontroleur");
var clog = console.log;
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);





app.get('/list-json', (req, res) => {
  console.log(controleur.Controller.enGraphe());
  res.json(controleur.Controller.enGraphe());
});
app.get('/liste', function (req, res) {
  var leresult = controleur.Controller.enListe();
  clog(leresult);
  
  var lestring = "";
  leresult.forEach(function(element) {
   lestring = lestring + element;
  });
  res.send(lestring);
})

app.get("/", function(req, res){
  var leresult = controleur.Controller.enGraphe();
  clog(leresult);
  res.render("Test1", { result: leresult });
});


/*app.get('/graphe', function (req, res) {


  fs.readFile('./views/Test1.html', null, function (error, data) {
    if (error) {
        res.writeHead(404);
        res.write('Whoops! File not found!');
    } else {
        res.write(data);
    }
    res.end();
});

})
*/


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
