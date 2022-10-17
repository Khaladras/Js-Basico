
    var frutas =["Manzana","Platano","Cereza","Fresa"];
    console.log (frutas);
    //(4) ['Manzana', 'Platano', 'Cereza', 'Fresa']
    console.log(frutas.length); para saber la cantidad de elementos en el array
    //4
    console.log(frutas[0]);llamar elemento segun su orden en el index (empezando desde 0cero)
    // Manzana
    console.log(frutas[2]);
    // Cereza


    var masFrutas = frutas.push("Uvas"); añade elementos al final del array
    //(5) ['Manzana', 'Platano', 'Cereza', 'Fresa', 'Uvas']
    

    var ultimo= frutas.pop("Uvas");elimina elemento del array del final
    frutas
    //(4) ['Manzana', 'Platano', 'Cereza', 'Fresa']
   
    var nuevaLongitud = frutas.unshift("Uvas");añade elemento al principio del array
    frutas  
    // (5) ['Uvas', 'Manzana', 'Platano', 'Cereza', 'Fresa']

    var borrarFruta = frutas.shift("Uvas"); elimina el elemento del principio
    frutas
    //(4) ['Manzana', 'Platano', 'Cereza', 'Fresa']

    var posicion= frutas.indexOf("Cereza");indica posicion del elemento en el array
    posicion
    //2