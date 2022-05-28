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
const datosCuriosos=[
    {dato:"Los juegos de ingenio son excelentes formas de mantenernos mentalmente activos" , autor:"curiosidadescuriosas"},
    {dato:"Las adivinanzas mejoran la lógica y el pensamiento crítico.", autor:"editorial geu"},
    {dato:"Favorecen el desarrollo y la asociación de ideas y conceptos.", autor:"Bosque de Fantasias"},
    {dato:"Jugar a las adivinanzas ayuda a desarrollar la paciencia, darse tiempo para escuchar, aprender a memorizar, interpretar, razonar, prestar atención, concentrarse, comprender el lenguaje articulado, asociar ideas, motivarse, y así sucesivamente.",autor:"eresmama.com"}

]
