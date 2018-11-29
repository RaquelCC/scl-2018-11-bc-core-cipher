window.cipher = {
  encode: (offset, texto) => {
    // offset = Number(offset);
    // if (Number.isNaN(offset)) {
    //   alert('Debes ingresar un número en el offset.');
    // }
    // else {
    texto = String(texto);
    offset = Math.abs(offset);
    let message = texto.split('');
    let encodedMessage = [];
    // resulto no ser necesario
    // while (offset>26){
    //   offset -= 26;
    // };
    message.forEach (letter => {
      if (letter.charCodeAt() >= 65 && letter.charCodeAt() <=90) {
        let codigoLetra = letter.charCodeAt();
        codigoLetra =  codigoLetra + (offset % 26);
        if (codigoLetra>90) {
          codigoLetra -= 26;
        }
        encodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para minusculas:
      else if (letter.charCodeAt() >= 97 && letter.charCodeAt() <=122) {
        let codigoLetra = letter.charCodeAt();
        codigoLetra =  codigoLetra + (offset % 26);
        if (codigoLetra>122) {
          codigoLetra -= 26;
        }
        encodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para caracteres no contenidos aca
      else encodedMessage.push(letter);
    })
    return encodedMessage.join('');
  // }
  },
  decode: (offset, texto) => {
    // offset = Number(offset);
    // if (Number.isNaN(offset)) {
    //   alert('Debes ingresar un número en el offset.');
    // }
    // else {
    texto = String(texto);
    offset = Math.abs(offset);
    let message = texto.split('');
    let decodedMessage = [];
    // resulto no ser necesario
    // while (offset>26){
    //   offset -= 26;
    // };
    message.forEach (letter => {
      if (letter.charCodeAt() >= 65 && letter.charCodeAt() <=90) {
        let codigoLetra = letter.charCodeAt();
        codigoLetra = codigoLetra - (offset % 26);
        if (codigoLetra<65) {
          codigoLetra += 26;
        }
        // lo que sigue es util solo para encode
        // if (codigoLetra>90) {
        //   codigoLetra -= 26;
        // };
        // esto era para saber porq no funcionaba...
        // console.log(String.fromCharCode(codigoLetra) + codigoLetra);
        decodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para minusculas:
      else if (letter.charCodeAt() >= 97 && letter.charCodeAt() <=122) {
        let codigoLetra = letter.charCodeAt();
        codigoLetra = codigoLetra - (offset % 26);
        if (codigoLetra<97) {
          codigoLetra += 26;
        }
        // lo que sigue es util solo para encode
        // if (codigoLetra>122) {
        //   codigoLetra -= 26;
        // };
        decodedMessage.push(String.fromCharCode(codigoLetra));
      }
      else {
        decodedMessage.push(letter);
      }
    })
    return decodedMessage.join('');
  }
  // }
};
