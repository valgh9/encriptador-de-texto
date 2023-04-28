
let diccionario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', ''];


function encriptar(){

    let text_area_ingreso = document.getElementById("encriptar");
    let contenido = text_area_ingreso.value; 
    let letras = contenido.split("");

    let txt_area_resultado = document.getElementById("resultado");
    txt_area_resultado.value = '';
    
    let texto_indicaciones = document.getElementById("indicaciones");


    for (let i = 0; i < letras.length; i++) {

         if (diccionario.includes(letras[i]))  {

         
            if (letras[i] === 'a') {
                letras[i] = 'ai';
            }
            if (letras[i] === 'e') {
                letras[i] = 'enter';
            }
            if (letras[i] === 'i') {
                letras[i] = 'imes';
            }
            if (letras[i] === 'o') {
                letras[i] = 'ober';
            }
            if (letras[i] === 'u') {
                letras[i] = 'ufat';
            }
            
           
        }

        else{
            text_area_ingreso.style.border = "3px solid red";
            texto_indicaciones.style.color = "red";
            texto_indicaciones.style.fontSize = '1.3em';
            texto_indicaciones.style.fontWeight = "bold";
            letras = "";
            document.getElementById("img_contenedor").style.display = "block";
            document.getElementById("oculto").style.display = "none";
            document.getElementById("oculto2").style.display = "none";
           
            break;
        }
    }

    if (letras !== ""){

        text_area_ingreso.style.border = "1px solid white";
        texto_indicaciones.style.color = "black";
        texto_indicaciones.style.fontSize = '1.3em';
        texto_indicaciones.style.fontWeight = "bold";

        let textArea = document.getElementById("resultado");
        textArea.style.border = "";
        document.getElementById("texto_oculto").style.display = "none";
        document.getElementById("texto_oculto2").style.display = "none";
        document.getElementById("img_contenedor").style.display = "none";
        document.getElementById("oculto").style.display = "block";
        document.getElementById("oculto2").style.display = "block";


        txt_area_resultado.value += letras.join("");
    }

    

}

function desencriptar(){
    
    let text_area_ingreso = document.getElementById("encriptar");
    let contenido = text_area_ingreso.value; 
    let letras = contenido.split("");

    let txt_area_resultado = document.getElementById("resultado");
    txt_area_resultado.value = '';
    
    let texto_indicaciones = document.getElementById("indicaciones");


    for (let i = 0; i < letras.length; i++) {

         if (diccionario.includes(letras[i]))  {

         
            if (letras[i] === 'a' && letras[i+1] === 'i') {
                letras[i+1] = "";
            }
            if (letras[i] === 'e' && letras[i+1] === 'n' && letras[i+2] === 't' && letras[i+3] === 'e' && letras[i+4] === 'r') {
                letras[i+1] = '';
                letras[i+2] = '';
                letras[i+3] = '';
                letras[i+4] = '';
            }
            if (letras[i] === 'i' && letras[i+1] === 'm' && letras[i+2] === 'e' && letras[i+3] === 's') {
                letras[i+1] = '';
                letras[i+2] = '';
                letras[i+3] = '';
            }
            if (letras[i] === 'o' && letras[i+1] === 'b' && letras[i+2] === 'e' && letras[i+3] === 'r') {
                letras[i+1] = '';
                letras[i+2] = '';
                letras[i+3] = '';
            }
            if (letras[i] === 'u' && letras[i+1] === 'f' && letras[i+2] === 'a' && letras[i+3] === 't') {
                letras[i+1] = '';
                letras[i+2] = '';
                letras[i+3] = '';
            }
            
        }

        else{
            text_area_ingreso.style.border = "3px solid red";
            texto_indicaciones.style.color = "red";
            texto_indicaciones.style.fontSize = '1.2em';
            texto_indicaciones.style.fontWeight = "bold";
            letras = "";
            document.getElementById("img_contenedor").style.display = "block";
            document.getElementById("oculto").style.display = "none";
            document.getElementById("oculto2").style.display = "none";
            break;
        }
    }

    if (letras !== ""){

        text_area_ingreso.style.border = "1px solid white";
        texto_indicaciones.style.color = "black";
        texto_indicaciones.style.fontSize = '1.3em';
        texto_indicaciones.style.fontWeight = "bold";
        
        let textArea = document.getElementById("resultado");
        textArea.style.border = "";
        document.getElementById("texto_oculto").style.display = "none";
        document.getElementById("texto_oculto2").style.display = "none";
        document.getElementById("img_contenedor").style.display = "none";
        document.getElementById("oculto").style.display = "block";
        document.getElementById("oculto2").style.display = "block";

        txt_area_resultado.value += letras.join("");
    }

}

function copiar_al_portapapeles(){
    
    let textArea = document.getElementById("resultado");
    if (textArea.value == ""){
        document.getElementById("texto_oculto").style.display = "none";
        document.getElementById("texto_oculto2").style.display = "block";
    }
    else{

    textArea.select();
    document.execCommand("copy");
    textArea.style.border = "3px solid #00cc00"
    document.getElementById("texto_oculto").style.display = "block";
    document.getElementById("texto_oculto2").style.display = "none";
    }

}