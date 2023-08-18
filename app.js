const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/contato", function(req, res){
    res.send("Página de contato")
})

app.get("/produtos/:item/:quantidade", function(req, res){
    res.send("item: " + req.params.item + "<br> Quantidae: " + req.params.quantidade)
})

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081")
})