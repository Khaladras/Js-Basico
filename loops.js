
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