var articulos = [
    {nombre:"Bici",costo:2500},
    {nombre:"TV",costo:2500},
    {nombre:"Libro",costo:320},
    {nombre:"Celular",costo:10000},
    {nombre:"Laptop",costo:20000},
    {nombre:"Teclado",costo:500},
    {nombre:"Audifonos",costo:1700},
];
            //METODO FILTER
var articulosFiltrados= articulos.filter(function (articulo) {
    return articulo.costo <= 500
});

//articulosFiltrados
(2) [{…}, {…}]
    0: {nombre: 'Libro', costo: 320}
    1: {nombre: 'Teclado', costo: 500}
    length: 2
[[Prototype]]: Array(0)

            //METODO MAP
var nombreArticulos= articulos.map(function (articulo) {
    return articulo.nombre
})
//nombreArticulos
(7) ['Bici', 'TV', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos']