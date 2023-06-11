
function encriptado(){
    const inputtexto = document.getElementById("input-textarea");
    let texto = inputtexto.value;
    let texto_separado = new Array();
    texto_separado = texto.split('');
    if(texto === ''){
        return alert("No hay nada en el texto");
    }
    else if(texto != texto.match(/^[a-z]*$/)){
        return alert("Escribe solo letras minusculas");
    }
    else{
        for (const ix of texto_separado) {
            switch(ix){
                case 'a':
                   const a = texto_separado.indexOf(ix)
                    texto_separado[a] = 'ai'
                    break;
                case 'e':
                    const e = texto_separado.indexOf(ix)
                    texto_separado[e] = 'enter'
                    break;
                case 'i':
                    const i = texto_separado.indexOf(ix)
                    texto_separado[i] = 'imes'
                    break;
                case 'o':
                    const o = texto_separado.indexOf(ix)
                    texto_separado[o] = 'ober'
                    break;
                case 'u':
                    const u = texto_separado.indexOf(ix)
                    texto_separado[u] = 'ufat'
                    break;
                }
                texto = texto_separado.join('');
            }
            document.getElementById("contenedor-texto").style.opacity = '0%';
            document.getElementById("img-lupa").style.opacity = '0%';
            const encriptacion = document.getElementById('encriptacion');
            encriptacion.style.opacity = '100%';
            encriptacion.style.zIndex = '10';
            encriptacion.innerHTML =  texto;
            inputtexto.value = '';           
        }
    }

function desencriptar() {
    const inputtexto = document.getElementById("input-textarea");
    let texto = inputtexto.value;
    if(texto === ''){
        return alert("No hay nada en el texto");
    }
    else{
        texto = texto.replaceAll('ai','a');
        texto = texto.replaceAll('enter','e');
        texto = texto.replaceAll('imes','i');
        texto = texto.replaceAll('ober','o');
        texto = texto.replaceAll('ufat','u');
    }
    document.getElementById("contenedor-texto").style.opacity = '0%';
    document.getElementById("img-lupa").style.opacity = '0%';
    const encriptacion = document.getElementById('encriptacion');
    encriptacion.style.opacity = '100%';
    encriptacion.innerHTML =  texto;
    inputtexto.value = '';    
}

function copiar(){
    const contenido = document.querySelector("#encriptacion").textContent;
    navigator.clipboard.writeText(contenido);
    const boton = document.querySelector('.copybutton');
    boton.className = 'copybuttonpress';
    boton.innerHTML = "Copiado &#10003";
    setTimeout(function(){
        boton.className = 'copybutton';
        boton.textContent = "Copiar"
    }, 1000)
}

