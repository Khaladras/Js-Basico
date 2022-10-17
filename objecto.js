var Objecto={};---->sintaxsis de objecto

var miAuto={
    marca:"Toyota",
    modelo:"Etios",
    annio:"2022",
    color:"blanco",};
miAuto.marca
//'Toyota'
miAuto.color
//'blanco'
miAuto.annio
//'2022'

METODO:se llama a la function dentro de un objeto
var miAuto={
        marca:"Toyota",
        modelo:"Etios",
        annio:"2022",
        color:"blanco",
        detalleDelAuto:function () {
                console.log(`Auto ${this.modelo} ${this.annio}`)}
            };

miAuto.detalleDelAuto();
// Auto Etios 2022
this --->es una var que hace referencia al objeto

----------------------------------------------------------
                    function Constructora
    
                    function auto(marca,modelo,annio,color) {
                        this.marca= marca;
                        this.modelo=modelo;
                        this.annio=annio;
                        this.color=color;
                    }
                    var AutoNuevo = new auto("citroen","c3",2000,"negro");
                    var autoNuevo2= new auto("renault",11,1990,"verde");
                    var autoNuevo3= new auto("ford","focus",2019,"rojo");
