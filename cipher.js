window.cipher = {
  encode: (offset, texto) => {
    texto = String(texto);
    // offset = Math.abs(offset);
    let message = texto.split('');
    let encodedMessage = [];
    message.forEach (letter => {
      if (letter.charCodeAt() >= 65 && letter.charCodeAt() <=90) {
        let codigoLetra = letter.charCodeAt();
        let offset1 = offset;
        if (offset1%26 === 0){
          offset1++;
        }
        codigoLetra =  codigoLetra + (offset1 % 26);
        if (codigoLetra>90) {
          codigoLetra -= 26;
        }
        // para que funcione con offsets negativos
        if (codigoLetra<65) {
          codigoLetra += 26;
        }
        encodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para minusculas:
      else if (letter.charCodeAt() >= 97 && letter.charCodeAt() <=122) {
        let codigoLetra = letter.charCodeAt();
        let offset2 = offset;
        if (offset2%26 === 0) {
          offset2--;
        }
        codigoLetra =  codigoLetra + (offset2 % 26);
        if (codigoLetra>122) {
          codigoLetra -= 26;
        }
        if (codigoLetra<97) {
          codigoLetra += 26;
        }
        encodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para caracteres 33 a 64
      else if (letter.charCodeAt() >= 33 && letter.charCodeAt() <= 64) {
        let codigoLetra = letter.charCodeAt();
        let offset3 = offset;
        if (offset3%32 === 0) {
          offset3++;
        }
        codigoLetra = codigoLetra + (offset3 % 32);
        if (codigoLetra>64) {
          codigoLetra -= 32;
        }
        if (codigoLetra<33) {
          codigoLetra += 32;
        }
        encodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para caracteres 91 a 96
      else if (letter.charCodeAt() >= 91 && letter.charCodeAt() <= 96) {
        let codigoLetra = letter.charCodeAt();
        let offset4 = offset;
        if (offset4%6 === 0) {
          offset4--;
        }
        codigoLetra = codigoLetra + (offset4 % 6);
        if (codigoLetra>96) {
          codigoLetra -= 6;
        }
        if (codigoLetra<91) {
          codigoLetra += 6;
        }
        encodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para carcteres 123 a 126
      else if (letter.charCodeAt() >= 123 && letter.charCodeAt() <= 126) {
        let codigoLetra = letter.charCodeAt();
        let offset5 = offset;
        if (offset5%4 === 0) {
          offset5++;
        }
        codigoLetra = codigoLetra + (offset5 % 4);
        if (codigoLetra>126) {
          codigoLetra -= 4;
        }
        if (codigoLetra<123) {
          codigoLetra += 4;
        }
        encodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para caracteres 161 a 255
      else if (letter.charCodeAt() >= 161 && letter.charCodeAt() <= 255) {
        let codigoLetra = letter.charCodeAt();
        let offset6 = offset;
        if (offset6%95 === 0) {
          offset6--;
        }
        codigoLetra = codigoLetra + (offset6 % 95);
        if (codigoLetra>255) {
          codigoLetra -= 95;
        }
        if (codigoLetra<161) {
          codigoLetra += 95;
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
    // offset = Math.abs(offset);
    let message = texto.split('');
    let decodedMessage = [];
    message.forEach (letter => {
      if (letter.charCodeAt() >= 65 && letter.charCodeAt() <=90) {
        let codigoLetra = letter.charCodeAt();
        let offset1 = offset;
        if (offset1%26 === 0){
          offset1++;
        }
        codigoLetra = codigoLetra - (offset1 % 26);
        if (codigoLetra<65) {
          codigoLetra += 26;
        }
        // para que funcione con offsets negativos
        if (codigoLetra>90) {
          codigoLetra -= 26;
        }
        decodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para minusculas:
      else if (letter.charCodeAt() >= 97 && letter.charCodeAt() <=122) {
        let codigoLetra = letter.charCodeAt();
        let offset2 = offset;
        if (offset2%26 === 0){
          offset2--;
        }
        codigoLetra = codigoLetra - (offset2 % 26);
        if (codigoLetra<97) {
          codigoLetra += 26;
        }
        if (codigoLetra>122) {
          codigoLetra -= 26;
        }
        decodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para caracteres 33 a 64
      else if (letter.charCodeAt() >= 33 && letter.charCodeAt() <=64) {
        let codigoLetra = letter.charCodeAt();
        let offset3 = offset;
        if (offset3%32 === 0) {
          offset3++;
        }
        codigoLetra = codigoLetra - (offset3 % 32);
        if (codigoLetra<33) {
          codigoLetra += 32;
        }
        if (codigoLetra>64) {
          codigoLetra -= 32;
        }
        decodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para caracteres 91 a 96
      else if (letter.charCodeAt() >= 91 && letter.charCodeAt() <=96) {
        let codigoLetra = letter.charCodeAt();
        let offset4 = offset;
        if (offset4%6 === 0) {
          offset4--;
        }
        codigoLetra = codigoLetra - (offset4 % 6);
        if (codigoLetra<91) {
          codigoLetra += 6;
        }
        if (codigoLetra>96) {
          codigoLetra -= 6;
        }
        decodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para caracteres 123 126
      else if (letter.charCodeAt() >= 123 && letter.charCodeAt() <=126) {
        let codigoLetra = letter.charCodeAt();
        let offset5 = offset;
        if (offset5%4 === 0) {
        offset5++;
        }
        codigoLetra = codigoLetra - (offset5 % 4);
        if (codigoLetra<123) {
          codigoLetra += 4;
        }
        if (codigoLetra>126) {
          codigoLetra -= 4;
        }
        decodedMessage.push(String.fromCharCode(codigoLetra));
      }
      // para caracteres 161 a 255
      else if (letter.charCodeAt() >= 161 && letter.charCodeAt() <=255) {
        let codigoLetra = letter.charCodeAt();
        let offset6 = offset;
        if (offset6%95 === 0) {
          offset6--;
        }
        codigoLetra = codigoLetra - (offset6 % 95);
        if (codigoLetra<161) {
          codigoLetra += 95;
        }
        if (codigoLetra>255) {
          codigoLetra -= 95;
        }
        decodedMessage.push(String.fromCharCode(codigoLetra));
      }
        else {
          decodedMessage.push(letter);
        }
    })
    return decodedMessage.join('');

  }

}
