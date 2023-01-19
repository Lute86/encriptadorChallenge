const lowercaseOnly = /^[a-z\s]+$/g;
const soloEspacios = /^\s+$/g;
let input = ''
let condicion = true
let infoChar = document.getElementById('infoChar')
let infoMsg = document.getElementById('infoMsg')
let ingresos = document.getElementById('ingresos')
let imagenes = document.getElementById('imagenes')
let copia = document.getElementById('copiar')
let mostrar = document.getElementById('mostrar')
let inner = '<img src="./imagenes/info1.svg" id="logo-info">Solo letras minusculas. (Ningun otro caracter, ej. numeros, acentos)'
let impurezas = document.getElementById('impurezas')


//Revisa la condicion para ingreso > correcto(true)/incorrecto
function check(){
  if(input===''){
    return condicion = true
  }
  if(lowercaseOnly.test(input)){
    return condicion = true
  }
  if(!lowercaseOnly.test(input)){
    return condicion = false  }
}

//Cambia color msg info segun ingreso correcto/incorrecto
function ingreso(){
  input = ingresos.value
  check()
  if(input === ''){
    infoChar.style.color = 'white'
    infoChar.innerHTML=inner
  }
  else if(condicion){
    infoChar.style.color = 'lightgreen'
    infoChar.innerHTML=inner
  }
  else{
    infoChar.style.color = '#ffbfbd'
    infoChar.innerHTML=inner+' <img id="impurezas" onclick="impuro()" src="./imagenes/cleanIcon.png" width="15px" height="12px" alt="Eliminar codigo erroneo" />'
  }
  
}

function impuro(){
  const caracteres = {'á':'a','à':'a','è':'e', 'ì':'i','í':'i','ò':'o','ó':'o','ù':'u','ú':'u','é':'e','ã':'a', 'ñ':'n', 'õ':'o'};
  console.log(ingresos.value)
  input = ingresos.value.toLowerCase().replace(/[^a-z\s]/g, m => caracteres[m]).replaceAll('undefined', '')
  ingresos.value=input
  ingreso()
  /* Texto prueba =>MAYUSÉ í viendo Si todos lo-=/s cambios funci[on{án  $/7&%#És un ãcentõ eñie */
}

//Encriptador
function encriptarReplace(param){
  //Toma el valor de ingreso
  let frase = ingresos.value
  
  //solo asi funciona PORQUE?????
  !lowercaseOnly.test(frase)

  //EScribe el mensaje en 'resultados' > pinta info verde
  if(lowercaseOnly.test(frase) && !soloEspacios.test(frase)){
    //verdadero encripta
    if(param){
      mostrar.value = frase.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('o', 'ober').replaceAll('a','ai').replaceAll('u','ufat')
      infoChar.style.color = 'lightgreen'
    }
    //falso desencripta
    else{
      mostrar.value=frase.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ober', 'o').replaceAll('ai','a').replaceAll('ufat','u')
      infoChar.style.color = 'lightgreen'
    }
  }
  //Si no hay ingreso
  else if(frase==='' || frase===soloEspacios.test(frase)){
    infoChar.style.color = '#ffbfbd'
    infoChar.innerHTML = 'Por favor ingrese algun caracter'
  }
  else{
    //Tira 'error' > pintando info de rojo
    infoChar.style.color = '#ffbfbd'
    infoChar.innerHTML = 'Ingreso incorrecto (caracteres no validos)'
  }

  //Borra el textarea
  if(condicion){
    ingresos.value = ''
  }

  //Devuelve el mensaje error/exito a blanco
  setTimeout(()=>{
    infoChar.style.color = 'white'
    infoChar.innerHTML = inner
    ingreso()
  },1000)

  //Estilo resultados
     
  if(mostrar.value.length>0){
    copia.style.visibility = 'visible'
    infoMsg.style.visibility = 'hidden'
    mostrar.style.visibility= 'visible'
    imagenes.style.visibility= 'visible'     
  }
  else{
    copia.style.visibility = 'hidden'
    infoMsg.style.visibility='visible'
    mostrar.style.visibility= 'hidden'  
    imagenes.style.visibility= 'hidden'
  }
  console.log(frase+' frase')

}

//copia al clipboard
function copiar(){
  let str=mostrar.value
  navigator.clipboard.writeText(str);
}
//Borrar mensaje descifrado
function eliminar() {
  mostrar.value=''
  infoMsg.style.visibility='visible'
  imagenes.style.visibility='hidden'  
  copia.style.visibility = 'hidden'  
}
