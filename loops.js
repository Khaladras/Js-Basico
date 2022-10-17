
For sintaxis
for ([expresiónInicial];[expresiónCondicional];[expresiónDeActualización]){ instrucción }


var estudiantes = ["maria","sergio","rosa","daniel"];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);}

for(var i=0; i<estudiantes.length; i++) {saludarEstudiantes(estudiantes[i]);}
// Hola, maria
// Hola, sergio
// Hola, rosa
// Hola, daniel
                        --------------------------------

                        
For Of
var estudiantes= ["Maria","Sergio","Rosa","Daniel"];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiantes);}
// Hola, maria
// Hola, sergio
// Hola, rosa
// Hola, daniel
                    -----------------------------------

While
var estudiantes= ["Lio","Marcos","Bruno","Coco"];
function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);}

    while (estudiantes.length>0) 
    {var estudiante =estudiantes.shift();------>el .shift va eliminando elementos
    saludarEstudiantes(estudiante);}
// Hola, Lio
// Hola, Marcos
// Hola, Bruno
// Hola, Coco

