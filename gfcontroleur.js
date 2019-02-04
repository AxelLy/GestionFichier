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
    var result = getFiles(lechemin);
    clog(result);   
}


function getFiles (dir, result, dossier){
    var result = [];
    var files = fs.readdirSync(dir);
    for (var i in files)
    {   
        var chemin = dir + '/' + files[i];  
        if (fs.statSync(chemin).isFile()){
            result.push(files[i]);
        }
        else if(fs.statSync(chemin).isDirectory()){      
            result[files[i]] = getFiles(chemin, result, dossier);
        }   
    }    
    return result;
}





 module.exports = { Controller }