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
  if(offset >0 && string!=""){
    result=cipher.createCipherWithOffset(offset).encode(string);
    resultMessage.innerHTML = result; 
  }else if(string == ""){
    document.getElementById("warning").innerHTML = "Error !! No ingreso el texto a Cifrar ";
  }else if(offset == 0 ){
    document.getElementById("warning").innerHTML = "Error !! No ingreso el numero ";
  }else if(offset <= 0){
    document.getElementById("warning").innerHTML = "Error !! Ingrese un nro mayor que 0  ";
  }else{
    document.getElementById("warning").innerHTML = "Error !!  ";
  }
}

function resultDecipher(){
  string=document.getElementById("text").value;
  offset=document.getElementById("position").value;

  if(offset >0 && string!=""){
    result =cipher.createCipherWithOffset(offset).decode(string)
    resultMessage.innerHTML = result;
  }else if(string == ""){
    resultMessage.innerHTML = "Error !! No ingreso el texto a Cifrar "; 
  }else if(offset == 0 ){
    resultMessage.innerHTML = "Error !! No ingreso el numero "; 
  }else if(offset <= 0){
    resultMessage.innerHTML = "Error !! Ingrese un nro mayor que 0  ";
  }else{
    resultMessage.innerHTML = "Error !!"; 
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
