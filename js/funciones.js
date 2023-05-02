
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
            text_area_ingreso.style.border = "3px red solid";
            text_area_ingreso.style.boxShadow = "0 3px 0 0 #e81d1d, 0 6px 4px -1px rgba(240, 6, 6, 0.3), 0 4px 16px rgba(241, 0, 0, 0.5), 0 1px 2px 1px rgba(196, 15, 15, 0) inset, 0 18px 32px -2px rgba(245, 16, 16, 0.14) inset";
            texto_indicaciones.style.color = "red";
            texto_indicaciones.style.fontSize = '1.3em';
            texto_indicaciones.style.fontWeight = "bold";
            letras = "";
            document.getElementById("img_contenedor").style.display = "block";
            document.getElementById("oculto").style.display = "none";
            document.getElementById("oculto2").style.display = "none";

            document.getElementById("texto_oculto").style.visibility = "hidden";
            document.getElementById("texto_oculto").style.display = "block";
            document.getElementById("texto_oculto2").style.display = "none";
           
            break;
        }
    }

    if (letras !== ""){

        text_area_ingreso.style.border = "3px solid #ffffff";
        text_area_ingreso.style.boxShadow = "0 3px 0 0 #b7c3d1, 0 6px 4px -1px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.5), 0 1px 2px 1px rgba(0, 0, 0, 0) inset, 0 18px 32px -2px rgba(255, 255, 255, 0.14) inset";
        texto_indicaciones.style.color = "black";
        texto_indicaciones.style.fontSize = '1.3em';
        texto_indicaciones.style.fontWeight = "bold";

        let textArea = document.getElementById("resultado");
        textArea.style.border = "";
        textArea.style.boxShadow = "0 3px 0 0 #b7c3d1, 0 6px 4px -1px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.5), 0 1px 2px 1px rgba(0, 0, 0, 0) inset, 0 18px 32px -2px rgba(255, 255, 255, 0.14) inset";

        document.getElementById("texto_oculto").style.visibility = "hidden";
        document.getElementById("texto_oculto2").style.visibility = "hidden";
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
            text_area_ingreso.style.boxShadow = "0 3px 0 0 #e81d1d, 0 6px 4px -1px rgba(240, 6, 6, 0.3), 0 4px 16px rgba(241, 0, 0, 0.5), 0 1px 2px 1px rgba(196, 15, 15, 0) inset, 0 18px 32px -2px rgba(245, 16, 16, 0.14) inset";

            texto_indicaciones.style.fontSize = '1.3em';
            texto_indicaciones.style.fontWeight = "bold";
            letras = "";
            document.getElementById("img_contenedor").style.display = "block";
            document.getElementById("oculto").style.display = "none";
            document.getElementById("oculto2").style.display = "none";

            document.getElementById("texto_oculto").style.display = "none";
            document.getElementById("texto_oculto2").style.display = "none";

            break;
        }
    }

    if (letras !== ""){

        text_area_ingreso.style.border = "3px solid #ffffff";
        text_area_ingreso.style.boxShadow = "0 3px 0 0 #b7c3d1, 0 6px 4px -1px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.5), 0 1px 2px 1px rgba(0, 0, 0, 0) inset, 0 18px 32px -2px rgba(255, 255, 255, 0.14) inset";

        texto_indicaciones.style.color = "black";
        texto_indicaciones.style.fontSize = '1.3em';
        texto_indicaciones.style.fontWeight = "bold";
        
        let textArea = document.getElementById("resultado");
        textArea.style.border = "";
        textArea.style.boxShadow = "0 3px 0 0 #b7c3d1, 0 6px 4px -1px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.5), 0 1px 2px 1px rgba(0, 0, 0, 0) inset, 0 18px 32px -2px rgba(255, 255, 255, 0.14) inset";

        document.getElementById("texto_oculto").style.visibility = "hidden";
        document.getElementById("texto_oculto2").style.visibility = "hidden";
        document.getElementById("img_contenedor").style.display = "none";
        document.getElementById("oculto").style.display = "block";
        document.getElementById("oculto2").style.display = "block";

        txt_area_resultado.value += letras.join("");
    }

}

function copiar_al_portapapeles(){
    
    let textArea = document.getElementById("resultado");
    if (textArea.value == ""){
        textArea.style.border = "3px red solid";
        textArea.style.boxShadow = "0 3px 0 0 #e81d1d, 0 6px 4px -1px rgba(240, 6, 6, 0.3), 0 4px 16px rgba(241, 0, 0, 0.5), 0 1px 2px 1px rgba(196, 15, 15, 0) inset, 0 18px 32px -2px rgba(245, 16, 16, 0.14) inset";

        document.getElementById("texto_oculto").style.visibility = "hidden";
        document.getElementById("texto_oculto2").style.visibility = "visible";
        document.getElementById("texto_oculto").style.display = "none";
        document.getElementById("texto_oculto2").style.display = "block";
    }
    else{

    textArea.select();
    document.execCommand("copy");

    textArea.style.border = "3px solid #00cc00";
    textArea.style.boxShadow = "0 3px 0 0 #01c20e, 0 6px 4px -1px rgba(0, 255, 68, 0.3), 0 4px 16px rgba(31, 188, 0, 0.5), 0 1px 2px 1px rgba(3, 246, 19, 0) inset, 0 18px 32px -2px rgba(16, 221, 1, 0.14) inset";

    document.getElementById("texto_oculto").style.visibility = "visible";
    document.getElementById("texto_oculto2").style.visibility = "hidden";
    document.getElementById("texto_oculto").style.display = "block";
    document.getElementById("texto_oculto2").style.display = "none";
    }

}