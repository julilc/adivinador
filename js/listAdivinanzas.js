function adivinanza(acertijo, respuesta, respInco1, respInco2, pista){
    this.acertijo=acertijo;
    this.respuesta=respuesta;
    this.respInco1=respInco1;
    this.respInco2=respInco2;
    this.pista=pista;
    respuesta.toUpperCase();
}
const adivinanzas=[]
adivinanzas.push(new adivinanza("Blanca por dentro, verde por fuera.\nSi no sabes, espera.\n¿Qué fruta es?","Pera","Limón","Naranja","empieza con P"));
adivinanzas.push(new adivinanza("Bonita flor que gira buscando el sol. ¿Qué es?","Girasol","Margarita","Rosa","se forma sumando Gira+Sol"));
adivinanzas.push(new adivinanza("cuanto más le quitas más grande es", "Agujero","Anillo","Barril","cuando se taladra una pared se forma un..."));
const guardarLocal=(clave,valor)=>{localStorage.setItem(clave,valor)};
guardarLocal("Adivinanzas",JSON.stringify(adivinanzas));


