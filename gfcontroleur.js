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
    var lechemin = 'C:/Users/axell/OneDrive/Documents/BTSSIO/2NDEANNEE/STAGE2019/2801GestionDeFichiers/Gestion-fichiers/Dossier';
    var objet = {};

    function getFiles (dir, files_){
        files_ = files_ || {};
        var files = fs.readdirSync(dir);
        for (var i in files){
            var chemin = dir + '/' + files[i];
            if (fs.statSync(chemin).isDirectory()){
                var lesfiles = fs.readdirSync(chemin);
                files_[files[i]] = lesfiles;
                getFiles(chemin, files_);
            } 
        }
        return files_;
    }

    clog(getFiles(lechemi));




}

 module.exports = { Controller }