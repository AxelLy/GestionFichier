var fs = require('fs');
var serveur = require("./gfserveur");

var Controller = 
{
    gestiondossiers: function ()
    {
        //ouvrir et écrire dans un fichier   
        recupereContenuDossier();      
    }
}

function recupereContenuDossier() {
    clog= console.log;
    var lechemin = 'C:/Users/axell/OneDrive/Documents/BTSSIO/2NDEANNEE/STAGE2019/2801GestionDeFichiers/GestionFichier/Dossier/';
    var files_ = [];
   // clog(getFiles(lechemin, files_, recupere));

    clog(walkSync(lechemin));
    //clog(getFiles(lechemin));
}


function walkSync(dir, directorylist,truc) {
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir); 
    var estdossier = false;
    var directorylist = directorylist || {};
    var lesfichiers = [];
    
   if(truc != null){
        directorylist[truc] = lesfichiers;
   }

    files.forEach(function(file) {
        if (fs.statSync(dir + '/' + file).isDirectory()) {
        estdossier = true;
      }
      else {
        lesfichiers.push(file);
        estdossier = false;
      }
      if(estdossier == true)
      {      
        var truc = file;
        walkSync(dir + file + '/', directorylist, truc);
      }
    });
    return directorylist;
  };



function getFiles (dir, files_, recupere){
    var files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files)
    {   
        var chemin = dir + '/' + files[i];  
        if (fs.statSync(chemin).isDirectory()){
            var lesfiles = fs.readdirSync(chemin);
            files_[files[i]] = lesfiles;
            getFiles(chemin, files_, recupere);
        }
            
    }       
    return files_;
}





 module.exports = { Controller }