
//console.log(cipher.encode(33,"A"));
//console.log(cipher.decode(33,"K"));

let string = "";
let offset = 0 ;
let btnCipher = document.getElementById("btnC");
let btnDecipher = document.getElementById("btnD");
let resultMessage = document.getElementById("resultM");
let result = "";

function resultC(){
    string=document.getElementById("text").value;
    offset=document.getElementById("position").value;
    //string = string.toUpperCase();
    //result =cipher.encode(offset,string);
    result=cipher.createCipherWithOffset(offset).encode(string)
    resultMessage.innerHTML = result;

}

function resultD(){
    string=document.getElementById("text").value;
    offset=document.getElementById("position").value;
    //string = string.toUpperCase();
    //result =cipher.decode(offset,string);
    result =cipher.createCipherWithOffset(offset).decode(string)
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