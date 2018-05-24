//acá debes escuchar eventos del DOM, invocar cipher.encode() o cipher.decode() según sea necesario y actualizar el resultado en la UI.

//agarramos los elementos del lado de encriptar
var ingresoText = document.getElementById("normalMes");
var moveEn = document.getElementById("rightMove");
const buttomEn = document.getElementById("butEn"); //aqui
var resultEn = document.getElementById("outputEn");


//agregamos un escuchador de eventos a el textarea de encodificar y me devuelve lo que escribo 

ingresoText.addEventListener("input", ()=>{
	console.log(ingresoText.value);
	})
	
	
	
 //agrego otro escuchador de eventos al boton = cuanta las veces que hago click
buttomEn.addEventListener("click", ()=>{
	resultEn.innerHTML = (ingresoText.value) 
	//console.log(ingresoText.value);
	})


 
//resultEn.innerHTML = (ingresoText.value) si funciona actualiza con el mensaje :)





//buttomEn. onclick = function() {
	
 //al hacer click en el boton el texto ingresa se muestre en el p con variable  resultEn

//resultEn.appendChild(ingresoText)

//}



//agarramos los elementod del lado para deencriptar
var ingresoTextEn = document.getElementById("encripMes");
var moveDe = document.getElementById("leftMove");
const resultDe = document.getElementById("outputDe");
var buttomDe = document.getElementById("butDe");




