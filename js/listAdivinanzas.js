function adivinanza(acertijo, respuesta){
    this.acertijo=acertijo;
    this.respuesta=respuesta;
    respuesta.toUpperCase();
}
const adivinanzas=[]
adivinanzas.push(new adivinanza("Blanca por dentro, verde por fuera.\nSi no sabes, espera.\n¿Qué fruta es?","Pera"));
adivinanzas.push(new adivinanza("Bonita flor que gira buscando el sol. ¿Qué es?","Girasol"));
adivinanzas.push(new adivinanza("cuanto más le quitas más grande es", "Agujero"));
const guardarLocal=(clave,valor)=>{localStorage.setItem(clave,valor)};
guardarLocal("Adivinanzas",JSON.stringify(adivinanzas));


