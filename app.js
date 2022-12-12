const { name } = require('ejs');
const express = require('express');
const { title } = require('process');
const app= express();



app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public'));

let info = {
    'title': "Inicio - Tierra Mojada",
    'categories': [
        {
            link: '/listadoPorCategorias/1', 
            category: 'Harinas',
            img : 'fotosHome/categoriaharinas.png',
        },

        {
            link: '/listadoPorCategorias/2', 
            category: 'Frutos Secos',
            img: 'fotosHome/categoriaFrutosSecos.png',
        },
        {
            link: '/listadoPorCategorias/3', 
            category: 'Cereales',
            img: 'fotosHome/categoriaCereales.png',
        },
        {
            link: '/listadoPorCategorias/4', 
            category: 'Granos',
            img: 'fotosHome/categoriaGranos.png',
        },
    ],
};

 let listados = [
        {
            id: 1,
            title: 'Harinas',
            'lista': [
                {               
                    name: 'Harina Integral',
                    link: '/',
                    img: 'https://www.shutterstock.com/image-photo/wheat-flour-bowl-spikelets-isolated-260nw-1723548994.jpg',
                },            
                {
                    name: 'Harina de Arroz',
                    img: 'https://media.istockphoto.com/id/1194276409/es/foto/cuenco-de-harina-aislada-sobre-fondo-blanco-vista-superior.jpg?s=612x612&w=0&k=20&c=lMGFX0GtqWN8Bn1DMjKI6y4Cy04raYXkx-AOmkyYvM0=',
                    link: '/',
                },
            ],
        },

        {
            id: 2,
            title: 'Frutos Secos',
            'lista': [
                {               
                    name: 'Mix Deluxe',
                    link: '/',
                    img: 'https://media.istockphoto.com/id/496689738/es/foto/variado-de-tuercas.jpg?s=612x612&w=0&k=20&c=txikKXuoEJp1du4fzP9tLPxZ9PF847FnIHpHbsNYeuk=',
                },            
                {
                    name: 'Mix Tradicional',
                    img: 'https://i.pinimg.com/736x/ab/c3/b2/abc3b2d25e31089f5a931a1d68378b6e--recipies-mix.jpg',
                    link: '/',
                },
            ],
        },
];



app.get('/', function(req, res){

   res.render('pages/home', info,);
}) 

app.get('/categorias', function(req, res){
    res.render('pages/categorias')
})

app.get('/listadoPorCategorias/:id', function(req,res){
    let listaId = req.params.id;

    let data = {};
    for(let x = 0; x<listados.length; x++) {
        if (listados[x].id === Number(listaId) ) {
            data = listados[x]
        }
    };


    res.render('pages/listadoPorCategorias', data,)
});

app.get('/productos/:id', function(req,res){

    let listaId = req.params.id;
    
    res.render('pages/productos')
});

app.get('/comoComprar', function(req,res){
    res.render('pages/comoComprar')
});

app.get('/carrito', function(req,res){
    res.render('pages/carrito')
});

app.get('/finalizarCompra', function(req,res){
    res.render('pages/finalizarCompra')
});

app.listen(3000, () => {
    console.log("3000 is the magic port")
});
