window.cipher = {
  encode :(offset,string)=>{
    var resultEncode = string + offset;
    return resultEncode;
  } ,

  decode :(offset,string)=>{
    var resultDecode = offset + string;
    return resultDecode;
  }
};