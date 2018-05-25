window.cipher = {

  encode :(offset,string)=>{

    var n =string.length;
    offset = parseInt(offset);
    alert(string);
    alert(offset);

    // CIFRADO DE CESAR o CIPHER CESAR

    var i=0;
    var resultEncode = " " ;
    for(i=0 ; i<n ;i++){

        if (string[i]!= " "){

            var Ascii_letter = string.charCodeAt(i); // Ascii_letter nos mostrara el nro de Ascii de esa Letra
            //console.log(Ascii_letter);
            var cipherCesar_number = (Ascii_letter - 65 + offset )% 26 + 65; //Nro del cifrado Cesar
            //console.log (Ascii_letter - 65 + offset );
            //console.log('El nro de la letra cifrado ASCII es ' + cipherCesar_number);
            //Convertir de codigo ASCII a letra
            var cipherCesar_letter = String.fromCharCode(cipherCesar_number);//Letra del cifrado Cesar
            //console.log('La letra ' + string + ' cifrada es: ' + cipherCesar_letter);
            resultEncode = resultEncode + cipherCesar_letter ;

        }else{
          resultEncode = resultEncode + " " ;
        }
    }
    return(resultEncode);
    /*
    var resultEncode = string + offset;
    return resultEncode;
    */
  } ,

  decode :(offset,string)=>{


    var n =string.length;
    offset = parseInt(offset);
    alert(string);
    alert(offset);

    // DESCIFRADO DE CESAR o DESCIPHER CAESAR
    var i=0;
    var resultDecode = " " ;
    for(i=0 ; i<n ;i++){
        if (string[i]!= " "){

            var Ascii_letter = string.charCodeAt(i); // Ascii_letter nos mostrara el nro de Ascii de esa Letra
            var cipherCesar_number = 90 - (90-Ascii_letter + offset)% 26;  //Nro del cifrado Cesar
            //alert('El nro de la letra cifrado ASCII es ' + cipherCesar_number);
            //Convertir de codigo ASCII a letra
            var cipherCesar_letter = String.fromCharCode(cipherCesar_number);//Letra del cifrado Cesar
            //alert('La letra ' + string+ ' cifrada es: ' + cipherCesar_letter);
            resultDecode = resultDecode + cipherCesar_letter ;

        }else{
          resultDecode = resultDecode + " " ;
        }
    }
    return(resultDecode);


    /*
    var resultDecode = offset + string;
    return resultDecode;
    */
  }
};