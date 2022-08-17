const express = require('express');
const app= express();

app.listen(3000, () => {
    console.log("3000 is the magic port")
});

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('pages/home');
})

app.get('/categorias', function(req, res){
    res.render('pages/categorias')
})
app.get('/listadoPorCategorias', function(req,res){
    res.render('pages/listadoPorCategorias')
})

app.get('/productos', function(req,res){
    res.render('pages/productos')
})

app.get('/comoComprar', function(req,res){
    res.render('pages/comoComprar')
})

app.get('/carrito', function(req,res){
    res.render('pages/carrito')
})

app.get('/finalizarCompra', function(req,res){
    res.render('pages/finalizarCompra')
})