const express = require('express');
const app= express();

app.listen(3000, () => {
    console.log("3000 is the magic port")
});

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('pages/index');
})

app.get('/categorias', function(req, res){
    res.render('pages/categorias')
})
app.get('/listadoPorCategoría', function(req,res){
    res.render('pages/listadoPorCategorías')
})

app.get('/productos', function(req,res){
    res.render('pages/productos')
})

app.get('/cómoComprar', function(req,res){
    res.render('pages/cómoComprar')
})

app.get('/carrito', function(req,res){
    res.render('pages/carrito')
})

app.get('/finalizarCompra', function(req,res){
    res.render('pages/finalizarCompra')
})

