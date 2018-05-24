
console.log(cipher.encode(33,"A"));
console.log(cipher.decode(33,"K"));

var btnCipher = document.getElementById("btnC");

function result(){
    var string=document.getElementById("text").value;
    alert(string);
    var offset=document.getElementById("position").value;
    alert(offset);
    console.log(cipher.encode(offset,string));

}

btnCipher.addEventListener("click",result);


/*
function result(){
    document.getElementById("demo1").innerHTML = "Hello heydy";
}
document.getElementById("btnC").addEventListener("click",result);
*/