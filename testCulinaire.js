// Configuration de l'API
var express = require('express'); 
var hostname = 'localhost'; 
var port = 3000; 
var app = express(); 
 
// Création du router
var myRouter = express.Router(); 

// Gestion du parsing des body envoyés
var bodyParser = require("body-parser"); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

myRouter.route('/recettes')
// GET
.get(function(req,res){ 
      res.json({
      message : "Liste les recettes :",
      id : req.query.id, 
      methode : req.method});
})
//POST
.post(function(req,res){
      res.json({message : "Ajoute une nouvelle recette", 
      nom : req.body.nom, 
      description : req.body.description,
      methode : req.method});
})
//PUT
.put(function(req,res){ 
      res.json({message : "Mise à jour des informations d'une recette", methode : req.method});
})
//DELETE
.delete(function(req,res){ 
      res.json({message : "Suppression d'une recette", methode : req.method});  
}); 
 
// L'application utilise le routeur
app.use(myRouter);  
 
// Démarrer le serveur 
app.listen(port, hostname, function(){
	console.log("Launched on http://"+ hostname +":"+port); 
});
 