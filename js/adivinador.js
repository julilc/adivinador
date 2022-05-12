function adivinanza(acertijo, respuesta){
    this.acertijo=acertijo;
    this.respuesta=respuesta;
}
const adivinanza1=new adivinanza("Blanca por dentro, verde por fuera.\nSi no sabes, espera.\n¿Qué fruta es?","Pera");
const adivinanza2= new adivinanza("Bonita flor que gira buscando el sol. ¿Qué es?","Girasol");
const adivinanza3= new adivinanza("cuanto más le quitas más grande es", "Agujero");
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

/*Ingreso usuario*/
let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let nombreCompleto= (nombre+" "+apellido);
let contrasenia =prompt("ingrese la contrasenia");
while(nombre=="" || apellido==""||contrasenia==""){alert ("falta un dato")
    nombre=prompt("ingrese su nombre");
    apellido = prompt("ingrese su apellido");
    contrasenia= prompt("ingrese la contrasenia");
    }
alert("su informacion de cuenta es la siguiente:\n Nombre: "+nombreCompleto+"\n Contraseña: " +contrasenia +"\nPor favor recuerde estos datos para inicio de sesión.");
alert("Hora de iniciar sesion!");
let nombreInicio=prompt("ingrese su nombre de usuario");
let contraseniaInicio=prompt("ingrese su contrasenia");
while(nombreInicio!=nombreCompleto || contraseniaInicio!=contrasenia){alert ("falta un dato o datos incorrectos intente de nuevo, de no recordar algun dato, recargue la pagina.")
    nombreInicio=prompt("ingrese su nombre de usuario");
    contraseniaInicio=prompt("ingrese su contrasenia");
    }
let preguntaInicial;
while((preguntaInicial!=1) &&(preguntaInicial!=2)&&(preguntaInicial!=3)&&(preguntaInicial!=4)){
    preguntaInicial= parseInt(prompt("Que desea hacer hoy?\n1.Contestar adivinanza.\n2.Crear adivinanza\n3.Ver adivinanzas y respuestas.\n4.Datos curiosos."));}
/*Contestar adivinanza*/
if (preguntaInicial==1){
    /*adivinanza1*/
    alert(adivinanza1.acertijo);
    respuesta=prompt("ingrese su respuesta");
    for(let i=0; i<3; i++,respuesta!=adivinanza1.respuesta){
        if(respuesta==adivinanza1.respuesta){
            alert("respuesta correcta! pasemos a la siguiente adivinanza!");
            break;
        }
        alert("respuesta incorrecta, le quedan "+(3-i)+" intentos");
        respuesta=prompt("ingrese su respuesta");
    };
    alert("Sigamos con la nueva adivinanza!")
        
    /*adivinanza2*/
    alert(adivinanza2.acertijo);
    respuesta=prompt("ingrese su respuesta");
    for(let i=0; i<3; i++,respuesta!=adivinanza2.respuesta){
        if(respuesta==adivinanza2.respuesta){
            alert("respuesta correcta! pasemos a la siguiente adivinanza!");
            break;
        }
        alert("respuesta incorrecta, le quedan "+(3-i)+" intentos");
        respuesta=prompt("ingrese su respuesta");
    }
    alert("Sigamos con la nueva adivinanza!")
    /*adivinanza3*/
    alert(adivinanza3.acertijo);
    respuesta=prompt("ingrese su respuesta");
    for(let i=0; i<3; i++,respuesta!=adivinanza3.respuesta){
        if(respuesta==adivinanza3.respuesta){
            break;
        }
        alert("respuesta incorrecta, le quedan "+(3-i)+" intentos");
        respuesta=prompt("ingrese su respuesta");
    }
    alert("Se terminaron las adivinanzas! Pruebe conocer las otras partes del juego!");
}  

/*Crea tu adivinanza*/

else if (preguntaInicial==2){
alert("Bienvenido/a a crea tu propia adivinanza");
let acertijoN=prompt("ingrese su acertijo");
while(acertijoN==""){
    alert("debe ingresar un acertijo");
    acertijoN=prompt("ingrese su acertijo");
}
let respuestaN=prompt("ingrese su respuesta");
while(respuestaN==""){
    alert("debe ingresar una respuesta");
    respuestaN=prompt("ingrese su respuesta");
}
const adivinanza4= new adivinanza(acertijoN,respuestaN);
adivinanza(acertijoN,respuestaN);
alert("su adivinanza:\n"+adivinanza4.acertijo+"\n"+adivinanza4.respuesta+"\n Ha sido registrada! Muchas gracias!");
adivinanza.push(new adivinanza(acertijo=acertijoN,respuesta=respuestaN));
}   

/*lista de adivinanzas y respuestas*/
else if (preguntaInicial==3){
alert("El listado de adivinanzas son las siguientes");
for (const adivinanza of adivinanzas){
    alert(adivinanza.acertijo+"\n"+adivinanza.respuesta);
}
alert("Esas son todas, muchas gracias por venir!")}

/*datos curiosos*/
else if (preguntaInicial==4){
for (const datoCurioso of datosCuriosos){
    alert(datoCurioso.dato);
}
alert("Gracias por visitar nuestro sitio! Vuelve mañana para más adivinanzas y datos curiosos!")
}
else{
    alert("Hubo un error, intente recargando la p[agina. Disculpe las molestias.")
}
