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
/*Ingreso de fondos*/
alert("Buenos días! Hora de registrar sus fondos!");
/*ingreso fondo banco*/
let ingreso1=parseFloat(prompt("ingrese su fondo en el banco"));
console.log(ingreso1);
while(isNaN(ingreso1)==true){
    alert("debe ser un numero")
    ingreso1=parseFloat(prompt("ingrese su fondo en el banco"));
}
let banco;
ingresoBanco(ingreso1);
function ingresoBanco(ingreso1){
return banco=ingreso1;
}
console.log(banco);
alert("sus fondos iniciales en el banco son: $"+banco);
/*ingreso fondo billetera*/
let billetera;
let ingreso2=parseFloat(prompt("ingrese su fondo en la billetera"));
while(isNaN(ingreso2)==true){
    alert("debe ser un numero")
    ingreso2=parseFloat(prompt("ingrese su fondo en la billetera"));
}
ingresoBilletera(ingreso2);
function ingresoBilletera(ingreso2){
return billetera=ingreso2;
}
console.log(billetera);
alert("sus fondos iniciales en la billetera son: $"+billetera);
/*mostrar fondos iniciales totales*/
let fondosTotales=billetera+banco;
alert("sus fondos totales iniciales son: $"+fondosTotales);

/*Ingreso de gastos*/
alert("Ahora, registre sus gastos del dia.");
/*gastos alimentos*/
let alimentos=parseFloat(prompt("ingrse dinero gastado en alimentos"));
while(isNaN(alimentos)==true){
    alert("debe ser un nuúmero");
    alimentos=parseFloat(prompt("ingrse dinero gastado en alimentos"));
}
let respuestaGasto=parseInt(prompt("Su gasto fue en (seleccione el numero)\n 1.Billetera.\n2.Banco."));
while(isNaN(respuestaGasto)==true){
    alert("debe ser un 1 o 2");
    respuestaGasto=parseInt(prompt("Su gasto fue en (seleccione el numero)\n 1.Billetera.\n 2.Banco."));
}
if (respuestaGasto==1){
billetera=billetera-alimentos;
console.log(billetera);
}
else{
    banco=banco-alimentos;
    console.log(banco);}
alert("sus fondos restante en el banco son: "+banco+"\n "+"sus fondos restante en la billetera son: "+billetera);
/*gastos transporte*/
let transporte=parseFloat(prompt("ingrse dinero gastado en trasnporte"));
while(isNaN(transporte)==true){
    alert("debe ser un número");
    transporte=parseFloat(prompt("ingrse dinero gastado en transporte"));
}
respuestaGasto=parseInt(prompt("Su gasto fue en (seleccione el numero)\n 1.Billetera.\n2.Banco."));
while(isNaN(respuestaGasto)==true){
    alert("debe ser un 1 o 2");
    respuestaGasto=parseInt(prompt("Su gasto fue en (seleccione el numero)\n 1.Billetera.\n 2.Banco."));
}
if (respuestaGasto==1){
billetera=billetera-transporte;
console.log(billetera);
}
else{
    banco=banco-transporte;
    console.log(banco);}
alert("sus fondos restante en el banco son: "+banco+"\n "+"sus fondos restante en la billetera son: "+billetera);
/*gastos salud*/
let salud=parseFloat(prompt("ingrse dinero gastado en salud"));
while(isNaN(salud)==true){
    alert("debe ser un número");
    salud=parseFloat(prompt("ingrse dinero gastado en salud"));
}
respuestaGasto=parseInt(prompt("Su gasto fue en (seleccione el numero)\n 1.Billetera.\n2.Banco."));
while(isNaN(respuestaGasto)==true){
    alert("debe ser un 1 o 2");
    respuestaGasto=parseInt(prompt("Su gasto fue en (seleccione el numero)\n 1.Billetera.\n 2.Banco."));
}
if (respuestaGasto==1){
billetera=billetera-salud;
console.log(billetera);
}
else{
    banco=banco-salud;
    console.log(banco);}
alert("sus fondos restante en el banco son: "+banco+"\n "+"sus fondos restante en la billetera son: "+billetera);
/*gastos salidas*/
let salidas=parseFloat(prompt("ingrse dinero gastado en salidas"));
while(isNaN(salidas)==true){
    alert("debe ser un número");
    salidas=parseFloat(prompt("ingrse dinero gastado en salidas"));
}
respuestaGasto=parseInt(prompt("Su gasto fue en (seleccione el numero)\n 1.Billetera.\n2.Banco."));
while(isNaN(respuestaGasto)==true){
    alert("debe ser un 1 o 2");
    respuestaGasto=parseInt(prompt("Su gasto fue en (seleccione el numero)\n 1.Billetera.\n 2.Banco."));
}
if (respuestaGasto==1){
billetera=billetera-salidas;
console.log(billetera);
}
else{
    banco=banco-salidas;
    console.log(banco);}
alert("sus fondos restante en el banco son: "+banco+"\n "+"sus fondos restante en la billetera son: "+billetera);
/*otros gastos*/
let otro=parseFloat(prompt("ingrse dinero gastado en otros conceptos"));
while(isNaN(otro)==true){
    alert("debe ser un número");
    otro=parseFloat(prompt("ingrse dinero gastado en otros conceptos"));
}
respuestaGasto=parseInt(prompt("Su gasto fue en (seleccione el numero)\n 1.Billetera.\n2.Banco."));
while(isNaN(respuestaGasto)==true){
    alert("debe ser un 1 o 2");
    respuestaGasto=parseInt(prompt("Su gasto fue en (seleccione el numero)\n 1.Billetera.\n 2.Banco."));
}
if (respuestaGasto==1){
billetera=billetera-otro;
console.log(billetera);
}
else{
    banco=banco-otro;
    console.log(banco);}
alert("sus fondos restante en el banco son: "+banco+"\n "+"sus fondos restante en la billetera son: "+billetera);

/*Revelar datos*/
alert("usted ha gastado en el dia en los siguientes conceptos:\n Alimentos: $"+alimentos+"\n Transporte: $"+transporte+"\n Salud: $"+salud+"\nSalidas: $"+salidas+
"\nOtros conceptos: $"+otro);
alert("usted ha gastado desde:\nBanco: $"+(ingreso1-banco)+"\nLo que representa un: %"+((banco/(ingreso1+ingreso2))*100)+"de sus fondos"+"\nBilletera: $"+
(ingreso2-billetera)+"\nLo que representa un: %"+((billetera/(ingreso1+ingreso2))*100)+"de sus fondos");
if(billetera>ingreso2){alert("usted se encuentra en deuda")}
else if(banco>ingreso1){alert("usted se encuentra en deuda")}
else
alert("Gracias por usar nuestra web, que tenga buen dia!");
