let btnP = document.getElementById("btnP");
btnP.addEventListener("click", bkgPrincipal);
function bkgPrincipal(){
    document.body.style.backgroundImage= 'url("../src/img/bkgDesktop.png")';
    title.style.color="white";
}
document.getElementById("title")
let btnWM = document.getElementById ("btnWM");
function WhiteMode(){
    document.body.style.backgroundImage='url("../src/img/bkgDesktopWM.png")';
    title.style.color="blue";
};
let btnDM = document.getElementById ("btnDM");
btnDM.addEventListener("click", darkMode);
function darkMode(){
    document.body.style.backgroundImage='url("../src/img/bkgDesktopDM.png")';
    title.style.color="white";
};
let btnDT = document.getElementById ("btnDT");
btnDT.addEventListener("click", accesibleMode);
function accesibleMode(){
    document.body.style.backgroundImage='url("../src/img/bkgDesktopDT.png")';
    title.style.color="white";
};
