function saludo() {
    const e = document.querySelector("header h1");
    if (e.innerHTML === "Práctica Javascript") {
        e.innerHTML = "Hola Mundo";
    }
    else {
        e.innerHTML = "Práctica Javascript";
    }
}

function openMenu(menuId){
	const submenus = document.querySelectorAll("nav ul li ul");
    for(let i=0;i<submenus.length;i++){
		submenus[i].setAttribute("style", "display:none;");
	}
	document.getElementById(menuId).setAttribute("style", "display:block;");
}

function changeType(type){
    document.querySelectorAll("section p").forEach(function(p){
        p.style.fontFamily = type;
    });
}


function changeColors(bg, fg){
    document.querySelector("section").setAttribute("style", "background-color:" + bg + ";"); 
    parrafos.style.color = "#333333";
}

let parrafos = document.getElementById("parrafos");
function blancoo(){
    parrafos.style.color = "#ffffff";
}

function changeImg (fileName){
    document.querySelector("section p img").setAttribute("src", "img/" + fileName);
}

let sizes = [10, 11, 12, 13, 14, 15, 16, 17, 18];
let idx = Math.floor(sizes.length/ 2);
function changeFontSize(direction) {
    if(direction === 0){
        idx = Math.floor(sizes.length / 2);
    }
    else if(direction === 1){
        idx++;
        if(idx === sizes.length){
            idx--;
        }
    }
    else{
        idx--;
        if(idx === -1){
            idx = 0;
        }
    }
    const ps = document.querySelectorAll("section p");
    for(let i = 0; i < ps.length; i++){
        ps[i].setAttribute("style", "font-size:" + sizes[idx] + "px;");
    }
    console.log(idx);
}



