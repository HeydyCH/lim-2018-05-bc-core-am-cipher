window.cipher = {

  encode :(offset,string)=>{

    var n =string.length;
    offset = parseInt(offset);

    // CIFRADO DE CESAR o CIPHER CESAR

    var i=0;
    var resultEncode = "" ;
    var Ascii_letter =0;
    var cipherCesar_number=0;
    var cipherCesar_letter = "";

    for(i=0 ; i<n ;i++){
        if (string[i]!= " "){
          Ascii_letter = string.charCodeAt(i); // Ascii_letter nos mostrara el nro de Ascii de esa Letra
          //console.log(Ascii_letter);
          if(Ascii_letter>=65 && Ascii_letter<=90 ){
            cipherCesar_number = (Ascii_letter - 65 + offset )% 26 + 65; //Nro del cifrado Cesar
            //console.log (Ascii_letter - 65 + offset );
            //console.log('El nro de la letra cifrado ASCII es ' + cipherCesar_number);
            //Convertir de codigo ASCII a letra
            cipherCesar_letter = String.fromCharCode(cipherCesar_number);//Letra del cifrado Cesar
            //console.log('La letra ' + string + ' cifrada es: ' + cipherCesar_letter);
            resultEncode = resultEncode + cipherCesar_letter ;

          }/*else if(Ascii_letter>=97 && Ascii_letter<=122 ){
            //resultEncode  = resultEncode + "*" ;
            cipherCesar_number = (Ascii_letter - 97 + offset )% 26 + 97;
            cipherCesar_letter = String.fromCharCode(cipherCesar_number);
            resultEncode = resultEncode + cipherCesar_letter ;

          }else{
            resultEncode  = resultEncode + string[i] ;
          }*/
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

    // DESCIFRADO DE CESAR o DESCIPHER CAESAR
    var n =string.length;
    offset = parseInt(offset);
    var Ascii_letter =0;
    var cipherCesar_number=0;
    var cipherCesar_letter = "";
    var i=0;
    var resultDecode = "" ;

    for(i=0 ; i<n ;i++){
        if (string[i]!= " "){

            Ascii_letter = string.charCodeAt(i); // Ascii_letter nos mostrara el nro de Ascii de esa Letra

            if(Ascii_letter>=65 && Ascii_letter<=90 ){
              cipherCesar_number = 90 - (90-Ascii_letter + offset)% 26;  //Nro del cifrado Cesar
              //alert('El nro de la letra cifrado ASCII es ' + cipherCesar_number);
              //Convertir de codigo ASCII a letra
              cipherCesar_letter = String.fromCharCode(cipherCesar_number);//Letra del cifrado Cesar
              //alert('La letra ' + string+ ' cifrada es: ' + cipherCesar_letter);
              resultDecode = resultDecode + cipherCesar_letter ;

            }/*else if(Ascii_letter>=97 && Ascii_letter<=122 ){

              cipherCesar_number = 122 - (122-Ascii_letter + offset)% 26;  
              cipherCesar_letter = String.fromCharCode(cipherCesar_number);
              resultDecode = resultDecode + cipherCesar_letter ;

            }else{

              resultDecode = resultDecode + string[i] ;

            }*/ 
        }else{
          resultDecode = resultDecode + " " ;
        }
    }
    return(resultDecode);    
  },

  createCipherWithOffset:(offset)=>{

    // window.result ={}
    return {
      //encode:(string)=>{ cipher.encode(offset,string)},
      //decode:(string)=>{ cipher.decode(offset,string)}
      encode(string){ return cipher.encode(offset,string)},
      decode(string){ return cipher.decode(offset,string)}
    }
  }

  /*
    var resultDecode = offset + string;
    return resultDecode;
    */
};