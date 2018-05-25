
//console.log(cipher.encode(33,"A"));
//console.log(cipher.decode(33,"K"));

var btnCipher = document.getElementById("btnC");
var btnDecipher = document.getElementById("btnD");

function resultC(){
    var string=document.getElementById("text").value;
    var offset=document.getElementById("position").value;
    var string = string.toUpperCase();
    alert(cipher.encode(offset,string));

}

function resultD(){
    var string=document.getElementById("text").value;
    var offset=document.getElementById("position").value;
    var string = string.toUpperCase();
    alert(cipher.decode(offset,string));
}



btnCipher.addEventListener("click",resultC);
btnDecipher.addEventListener("click",resultD);

/*
function result(){
    document.getElementById("demo1").innerHTML = "Hello heydy";
}
document.getElementById("btnC").addEventListener("click",result);
*/