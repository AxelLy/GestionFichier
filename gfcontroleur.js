var fs = require('fs');
var serveur = require("./gfserveur");

var Controller = 
{
    gestiondossiers: function ()
    {
        clog= console.log;
        var lechemin = 'C:/Users/axell/OneDrive/Documents/BTSSIO/2NDEANNEE/STAGE2019/2801GestionDeFichiers/GestionFichier/Dossier/';
        var result = getFiles(lechemin);   
        return result;
    }
}

function getFiles (dir, result, dossier, laliste){
    var laliste = laliste || [];
    var result = [];
    var files = fs.readdirSync(dir);
    for (var i in files)
    {   
        var chemin = dir + '/' + files[i];  
        if (fs.statSync(chemin).isFile()){
            laliste.push("<li>"+files[i] +"</li>")
            result.push(files[i]);
        }
        else if(fs.statSync(chemin).isDirectory()){  
            laliste.push("<ul><li>"+ files[i]+"")    
            result[files[i]] = getFiles(chemin, result, dossier, laliste);
            laliste.push("</li></ul>")
        }   
      
    }   
     
    return laliste;
}

 module.exports = { Controller }