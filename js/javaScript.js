let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let nombreCompleto= (nombre+" "+apellido);
let contrasenia =prompt("ingrese la contrasenia");
let adivinanza= ("pera");
while(nombre=="" || apellido==""||contrasenia!="admin"){alert ("falta un dato o contraseña incorrecta")
    nombre=prompt("ingrese su nombre");
    apellido = prompt("ingrese su apellido");
    contrasenia= prompt("ingrese la contrasenia");
    }
if ((nombre!="")&&(apellido!="")&&(contrasenia=="admin")){
    alert("Buen dia "+nombreCompleto+".\nHora de hacer la adivinanza del dia");
    alert("Blanca por dentro, verde por fuera.\nSi no sabes, espera.\n¿Qué fruta es?")
    adivinanza=prompt("");

    for (let i=0; i<3; i++, adivinanza!="pera"||adivinanza!="Pera"||adivinanza!="la pera"||adivinanza!="La pera" )
    {  if( adivinanza=="pera"||adivinanza=="Pera"||adivinanza=="la pera"||adivinanza=="La pera"){
        alert("Respuesta correcta! Vuelva mañana para más adivinanzas. Que tenga buen día :)")
        break;         
        }
    alert ("respuesta incorrecta. Quedan "+(3-i)+"intentos");
    adivinanza=prompt("") }
    alert("se ha excedido en intentos, regrese mañana para más adivinanzas!")  }
else{alert("se ha terminado, recargue la pagina.")}