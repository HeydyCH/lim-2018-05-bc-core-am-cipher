let string = "";
let offset = 0 ;
let btnCipher = document.getElementById("btnC");
let btnDecipher = document.getElementById("btnD");
let resultMessage = document.getElementById("resultM");
let btnClean = document.getElementById("limpiar");
let btnRecharge = document.getElementById("recargar");
let result = "";

function resultCipher(){
  string=document.getElementById("text").value;
  offset=document.getElementById("position").value;
  if(offset<1){
    alert("Ingrese un nro mayor que 0");
  }else if(string==""){
    alert("Ingrese el texto a encriptar");
  }else{
    result=cipher.createCipherWithOffset(offset).encode(string);
    resultMessage.innerHTML = result;
  }
}

function resultDecipher(){
  string=document.getElementById("text").value;
  offset=document.getElementById("position").value;
  if(offset<1){
    alert("Ingrese un nro mayor que 0");
  }else if(string==""){
    alert("Ingrese el texto a desincriptar");
  }else{
    result =cipher.createCipherWithOffset(offset).decode(string)
    resultMessage.innerHTML = result;
  } 
}

function cleanField(){
    resultMessage.innerHTML = "";
}

function RechargeField(){
    
    //alert("el string es : " + string + " -> yo : " + result);
    document.getElementById("text").value= result;
    resultMessage.innerHTML = "";

    
}

btnCipher.addEventListener("click",resultCipher);
btnDecipher.addEventListener("click",resultDecipher);
btnClean.addEventListener("click",cleanField);
btnRecharge.addEventListener("click",RechargeField);
