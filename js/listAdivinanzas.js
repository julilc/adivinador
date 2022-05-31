function adivinanza(acertijo, respuesta){
    this.acertijo=acertijo;
    this.respuesta=respuesta;
    respuesta.toUpperCase();
}
const adivinanza1=new adivinanza("Blanca por dentro, verde por fuera.\nSi no sabes, espera.\n¿Qué fruta es?","Pera");
const adivinanza2= new adivinanza("Bonita flor que gira buscando el sol. ¿Qué es?","Girasol");
const adivinanza3= new adivinanza("cuanto más le quitas más grande es", "Agujero");
console.log (adivinanza1);
let respuesta;

const adivinanzas=[
    {acertijo:"Blanca por dentro, verde por fuera.\nSi no sabes, espera.\n¿Qué fruta es?",respuesta:"Pera"},
    {acertijo:"Bonita flor que gira buscando el sol. ¿Qué es?",respuesta:"Girasol"},
    {acertijo:"cuanto más le quitas más grande es",respuesta:"Agujero"},
]

