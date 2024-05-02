// funcion para cambiar el header, recordar incorporarla en el html dentro del h como (onclick)
function saludo() {
    let e = document.querySelector("header h1");
    if (e.innerHTML === "Práctica Javascript") {
        e.innerHTML = "Hola Mundo";
    }
    else {
        e.innerHTML = "Práctica Javascript";
    }
}

//variables con los ul que quiero mostrar y esconder del nav
let caja = document.getElementById("caja");
let texto = document.getElementById("texto");
let imagen = document.getElementById("imagen");
let navesconde = document.getElementsByClassName("navesconde");

//Funcion que abre menu caja
function abremenu() {
    caja.setAttribute("style", "display:block");
    texto.setAttribute("style", "display:none");
    imagen.setAttribute("style", "display:none");
}
/*{
    if(caja === caja.getAttribute("style", "display:none")){
        caja.setAttribute("style","display:none");
        texto.setAttribute("style","display:none");
        imagen.setAttribute("style","display:none");
    }
    else{
       caja.setAttribute("style","display:block");
        texto.setAttribute("style","display:none");
        imagen.setAttribute("style","display:none");
    }
}
*/

//variables para usar las opciones de la caja
let cajaabierta = document.getElementsByClassName("cajaabierta");
let fondo = document.getElementById("fondo");
let coloresdeFondo = ["#999;",
    "#777;",
    "#555;"] //array con los colores de fondo
let fondoElegido = 0;

//opcion 1 de caja                   
function cajaAbierta1() {
    fondo.setAttribute("style", "background-color:" + coloresdeFondo[0]);
    if (cajaAbierta1 == true) {
        fondoElegido = 1;
    }
    parrafos.style.color = "#333333";
}
// opcion2 de caja
function cajaAbierta2() {
    fondo.setAttribute("style", "background-color:" + coloresdeFondo[1]);
    parrafos.style.color = "#333333";
}

//opcion3 de caja
function cajaAbierta3() {
    fondo.setAttribute("style", "background-color:" + coloresdeFondo[2]);
    parrafos.style.color = "#ffffff";
}

//funcion que abre menu texto
function muestratexto() {
    caja.setAttribute("style", "displey:none");
    texto.setAttribute("style", "display:block");
    imagen.setAttribute("style", "display:none");
}

//variables que uso para la opciones de texto
let cambiotextos = document.getElementsByClassName("cambiotextos");
let fuentes = ["font-family:'Arial Narrow Bold'", "font-family:Helvetica", "font-family: monospace'"];
let parrafos = document.getElementById("textos-container");

//funcion para el primer cambio de tipografia
function cambiotexto1() {
    parrafos.setAttribute("style", fuentes[0]);
    console.log(parrafos);
}

//funcion para el segundo cambio de tipografia
function cambiotexto2() {
    parrafos.setAttribute("style", fuentes[1]);
}

//funcion para el tercer cambio de texto
function cambiotexto3() {
    parrafos.setAttribute("style", fuentes[2]);
}

//funcion que abre menu imagenes
function abreimagen() {
    caja.setAttribute("style", "displey:none");
    texto.setAttribute("style", "display:none");
    imagen.setAttribute("style", "display:block");
}

//variables para imagenes
var imagenes = document.querySelector("img");
var srcimagenes = ["img/33.jpg","img/36.jpg","img/37.jpg","img/38.jpg","img/39.jpg","img/40.jpg","img/44.jpg","img/45.jpg","img/46.jpg"];

function foto1(){
    imagenes.setAttribute("src",srcimagenes[0]);
}

function foto2(){
    imagenes.setAttribute("src",srcimagenes[1]);
}

function foto3(){
    imagenes.setAttribute("src",srcimagenes[2]);
}

function foto4(){
    imagenes.setAttribute("src",srcimagenes[3]);
}

function foto5(){
    imagenes.setAttribute("src",srcimagenes[4]);
}

function foto6(){
    imagenes.setAttribute("src",srcimagenes[5]);
}

function foto7(){
    imagenes.setAttribute("src",srcimagenes[6]);
}
 //agranda letras
 let aumenta = document.getElementById("agranda");
 let achica = document.getElementById("achica");
 let fuentesGrandes = ["18px;","20px","22px","24px"];
 let fuentesChicas = ["14px","12px","10px","8px"];

    aumenta.addEventListener("click", function(){
        for(i=0; i<fuentesGrandes.length;i++){
            parrafos.setAttribute("font-size",fuentesGrandes[i]);
        }
    })

 