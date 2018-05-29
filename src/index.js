
//console.log(cipher.encode(33,"A"));
//console.log(cipher.decode(33,"K"));

var string = "";
var offset = 0 ;
var btnCipher = document.getElementById("btnC");
var btnDecipher = document.getElementById("btnD");
var resultMessage = document.getElementById("resultM");

function resultC(){
    string=document.getElementById("text").value;
    offset=document.getElementById("position").value;
    string = string.toUpperCase();
   
    var result =cipher.encode(offset,string);
    resultMessage.innerHTML = result;

}

function resultD(){
    string=document.getElementById("text").value;
    offset=document.getElementById("position").value;
    string = string.toUpperCase();
    
    var result =cipher.decode(offset,string);
    resultMessage.innerHTML = result;
}


btnCipher.addEventListener("click",resultC);
btnDecipher.addEventListener("click",resultD);

/*
function result(){
    document.getElementById("demo1").innerHTML = "Hello heydy";
}
document.getElementById("btnC").addEventListener("click",result);
*/