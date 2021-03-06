//src/cipher.js: acÃ¡ debes implementar el objeto cipher, el cual debe estar
// exportado en el objeto global (window). Este objeto (cipher) debe contener dos mÃ©todos:
//cipher.encode(offset, string): offset es el nÃºmero de posiciones que 
//queremos mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.
//cipher.decode(offset, string): offset es el nÃºmero de posiciones que 
//queremos mover a la izquierda en el alfabeto y string el mensaje (texto) que queremos decifrar

window.cipher = {
      // poniendo objetosvc
      encode: (offset, string) => {
            let textDecodificado = []; //array contenedor

            for (let i = 0; i < string.length; i++) {
                  let ascii = string[i].charCodeAt();
                  if (ascii >= 65 && ascii <= 90) { //para las mayusculas!!!

                        //console.log(ascii)
                        let encodeNum = ((ascii - 65) + parseInt(offset)) % 26 + 65;
                        //console.log(encodeNum)         
                        textDecodificado.push(String.fromCharCode(encodeNum));

                  } else if (ascii >= 97 && ascii <= 122) { //para las minunculas
                        //console.log(ascii)
                        let encodeNum = ((ascii - 97) + parseInt(offset)) % 26 + 97;
                        textDecodificado.push(String.fromCharCode(encodeNum));

                  } else { //espacio y todo lo demas
                        textDecodificado.push(string[i]);
                  }
            }
            return textDecodificado.join("")
      },
      //console.log(encode("B z",2));
      //console.log(encode("A z",2));
      //console.log(encode("A z",2));
      //----------------------------DECODIFICANDO----------
      decode: (offset, string) => {
            let textDecodificado = []; //array contenedor

            for (let i = 0; i < string.length; i++) {
                  let ascii = string[i].charCodeAt();
                  if (ascii >= 65 && ascii <= 90) { //para las mayusculas!!!
                        let decodeNum = ((ascii - 65) - parseInt(offset)) % 26;
                        if (decodeNum < 0) {
                              decodeNum = decodeNum + 26 + 65;
                        } else {
                              decodeNum = ((ascii - 65) - parseInt(offset)) % 26 + 65;
                        }
                        textDecodificado.push(String.fromCharCode(decodeNum));

                  } else if (ascii >= 97 && ascii <= 122) { //para las minunculas
                        let decodeNum = ((ascii - 97) - parseInt(offset)) % 26;
                        if (decodeNum < 0) {
                              decodeNum = decodeNum + 26 + 97;
                        } else {
                              decodeNum = ((ascii - 97) - parseInt(offset)) % 26 + 97;
                        }
                        textDecodificado.push(String.fromCharCode(decodeNum));

                  } else { //espacio
                        textDecodificado.push(string[i]);
                  }
            }
            return textDecodificado.join("")
      },
      createCipherWithOffset: (offset) => {
            let objCip ={
                  encode: (string) => cipher.encode(offset, string),
                  decode: (string) => cipher.decode(offset, string)
            };
            return objCip;
      }
};
