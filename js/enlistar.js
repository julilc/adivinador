let espacioAcertijo=document.getElementById("espacioAcertijo1");
let listAdivinanzas =JSON.stringify(localStorage.getItem("Lista adivinanzas"));
listAdivinanzas=JSON.parse(listAdivinanzas);
espacioAcertijo.innerText=(listAdivinanzas);

