window.cipher = {
  encode: (offset, texto) => {
    texto = String(texto);
    offset = Math.abs(offset);
    let message = texto.split('');
    let encodedMessage = [];
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
      // para caracteres 33 a 64
      else if (letter.charCodeAt() >= 33 && letter.charCodeAt() <= 64) {
        let codigoLetra = letter.charCodeAt();
        codigoLetra = codigoLetra + (offset % 32);
        if (codigoLetra>64) {
          codigoLetra -= 32;
        }
        encodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para caracteres 91 a 96
      else if (letter.charCodeAt() >= 91 && letter.charCodeAt() <= 96) {
        let codigoLetra = letter.charCodeAt();
        codigoLetra = codigoLetra + (offset % 6);
        if (codigoLetra>96) {
          codigoLetra -= 6;
        }
        encodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para carcteres 123 a 126
      else if (letter.charCodeAt() >= 123 && letter.charCodeAt() <= 126) {
        let codigoLetra = letter.charCodeAt();
        codigoLetra = codigoLetra + (offset % 4);
        if (codigoLetra>126) {
          codigoLetra -= 4;
        }
        encodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para caracteres 128 a 254
      else if (letter.charCodeAt() >= 128 && letter.charCodeAt() <= 254) {
        let codigoLetra = letter.charCodeAt();
        codigoLetra = codigoLetra + (offset % 127);
        if (codigoLetra>254) {
          codigoLetra -= 127;
        }
        encodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para caracteres no contenidos aca
      else encodedMessage.push(letter);
    })
    return encodedMessage.join('');
  },
  decode: (offset, texto) => {
    texto = String(texto);
    offset = Math.abs(offset);
    let message = texto.split('');
    let decodedMessage = [];
    message.forEach (letter => {
      if (letter.charCodeAt() >= 65 && letter.charCodeAt() <=90) {
        let codigoLetra = letter.charCodeAt();
        codigoLetra = codigoLetra - (offset % 26);
        if (codigoLetra<65) {
          codigoLetra += 26;
        }
        decodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para minusculas:
      else if (letter.charCodeAt() >= 97 && letter.charCodeAt() <=122) {
        let codigoLetra = letter.charCodeAt();
        codigoLetra = codigoLetra - (offset % 26);
        if (codigoLetra<97) {
          codigoLetra += 26;
        }
        decodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para caracteres 33 a 64
      else if (letter.charCodeAt() >= 33 && letter.charCodeAt() <=64) {
        let codigoLetra = letter.charCodeAt();
        codigoLetra = codigoLetra - (offset % 32);
        if (codigoLetra<33) {
          codigoLetra += 32;
        }
        decodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para caracteres 91 a 96
      else if (letter.charCodeAt() >= 91 && letter.charCodeAt() <=96) {
        let codigoLetra = letter.charCodeAt();
        codigoLetra = codigoLetra - (offset % 6);
        if (codigoLetra<91) {
          codigoLetra += 6;
        }
        decodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para caracteres 123 126
      else if (letter.charCodeAt() >= 123 && letter.charCodeAt() <=126) {
        let codigoLetra = letter.charCodeAt();
        codigoLetra = codigoLetra - (offset % 4);
        if (codigoLetra<123) {
          codigoLetra += 4;
        }
        decodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para caracteres 128 a 254
      else if (letter.charCodeAt() >= 128 && letter.charCodeAt() <=254) {
        let codigoLetra = letter.charCodeAt();
        codigoLetra = codigoLetra - (offset % 127);
        if (codigoLetra<128) {
          codigoLetra += 127;
        }
        decodedMessage.push(String.fromCharCode(codigoLetra));
      }
      else {
        decodedMessage.push(letter);
      }
    })
    return decodedMessage.join('');
  }
};
