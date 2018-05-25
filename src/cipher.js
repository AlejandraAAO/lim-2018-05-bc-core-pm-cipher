
//src/cipher.js: acá debes implementar el objeto cipher, el cual debe estar
// exportado en el objeto global (window). Este objeto (cipher) debe contener dos métodos:
//cipher.encode(offset, string): offset es el número de posiciones que 
//queremos mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.
//cipher.decode(offset, string): offset es el número de posiciones que 
//queremos mover a la izquierda en el alfabeto y string el mensaje (texto) que queremos decifrar

//window.cipher = {
  // poniendo objetos
  //encodificar: function encode (offset, string)
  //decodificar:function
//};



//var ingresoTextEn = document.getElementById("encripMes");// el texto encriptado /valor=ingresoTextEn.value
//var moveEn = document.getElementById("leftMove");  //desplazamiento o offset /valor=moveDe.value

function encode(ingresoTextEn,moveEn){ //agarra el valor ingresado de texto y desplaamiento
	var textDecodificado = [];

//  alert("ingresos: " + ingresoTextEn.value + "  " + moveEn.value);

//  alert("longitud var: " + ingresoTextEn.value.length);

	for(var i = 0; i < ingresoTextEn.value.length; i++){
		var mayus = ingresoTextEn.value.toUpperCase();
		var asi = mayus.charCodeAt(i);
		var asidos = (asi - 65 + moveEn.value) % 26 + 65;
		textDecodificado.push(String.fromCharCode(asidos));
		}
		
  //alert("arreglo: " + (textDecodificado.join("")));		
		
	return textDecodificado.join("");

	}
//console.log(encode(A,2));

//--------------------------------------
//-------------------------------------Decodificando

function decode(ingresoTextEn,moveDe){ //agarra el valor ingresado de texto y desplaamiento
	var textDecodificado = [];

//  alert("ingresos: " + ingresoTextEn.value + "  " + moveEn.value);

//  alert("longitud var: " + ingresoTextEn.value.length);

	for(var i = 0; i < ingresoTextEn.value.length; i++){
		var mayus = ingresoTextEn.value.toUpperCase();
		var asi = mayus.charCodeAt(i);
		var asidos = (asi - 65 - moveEn.value) % 26 + 65;
		textDecodificado.push(String.fromCharCode(asidos));
		}
		
  //alert("arreglo: " + (textDecodificado.join("")));		
		
	return textDecodificado.join("");

	}

