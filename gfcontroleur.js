var fs = require('fs');
var serveur = require("./gfserveur");
clog= console.log;
var lechemin = 'C:/Users/axell/OneDrive/Documents/BTSSIO/2NDEANNEE/STAGE2019/2801GestionDeFichiers/GestionFichier/Dossier/';

var Controller = 
{
    enListe: function ()
    {  
        var result = listeFiles(lechemin); 
        result.push("</ul>");
        return result;
    },
    enGraphe: function()
    {
        var lejson; 
        var result = walkSync(lechemin);
        lejson = JSON.stringify(result);
        lejson = lejson.replace( /\[/g, "{");
        lejson = lejson.replace( /\]/g, "}");
        return result;
    }
}

var walkSync = function(dir, files_) {
    files_ = files_ || {};
    var files = fs.readdirSync(dir);
    for (var i in files){
        var chemin = dir + '/' + files[i];
        if (fs.statSync(chemin).isDirectory()){
            var lesfiles = fs.readdirSync(chemin);
            files_[files[i]] = lesfiles;
            walkSync(chemin, files_);
        } 
    }
    return files_;
  };

function grapheFiles (dir, result, dossier){
    var result = [];
    var files = fs.readdirSync(dir);

    for (var i in files)
    {   
        var chemin = dir + '/' + files[i];  
        if (fs.statSync(chemin).isFile()){
            result.push(files[i]);
        }
        else if(fs.statSync(chemin).isDirectory()){  
            result[files[i]] = grapheFiles(chemin, result, dossier);
        }    
    }     
    return result;
}



function listeFiles (dir, result, dossier, laliste){
    var laliste = laliste || ["<ul>"];
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
            laliste.push("<li>"+ files[i]+"<ul>")    
            result[files[i]] = listeFiles(chemin, result, dossier, laliste);
            laliste.push("</li></ul>")
        }    
    }     
    return laliste;
}



 module.exports = { Controller }