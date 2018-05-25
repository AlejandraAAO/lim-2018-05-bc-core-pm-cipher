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
	
	
ingresoText.addEventListener("input", ()=>{
	console.log(moveEn.value);
	})
	
	

 //agrego otro escuchador de eventos al boton = cuanta las veces que hago click
 //resultEn.innerHTML = (ingresoText.value) si funciona actualiza con el mensaje :)
buttomEn.addEventListener("click", ()=>{
	//resultEn.innerHTML = (ingresoText.value) 
	//console.log(ingresoText.value);

// para ver si llegan los valores a la funcion
//  alert("ingresos: " + ingresoText.value + "  " + moveEn.value);
  
	resultEn.innerHTML = encode(ingresoText,moveEn);
	})









//buttomEn. onclick = function() {
	
 //al hacer click en el boton el texto ingresa se muestre en el p con variable  resultEn
//--------------------------------------------------------------------------------------------------


//agarramos los elementod del lado para deencriptar
var ingresoTextEn = document.getElementById("encripMes");
var moveDe = document.getElementById("leftMove");
const resultDe = document.getElementById("outputDe");
var buttomDe = document.getElementById("butDe");


ingresoTextEn.addEventListener("input", ()=>{
	console.log(ingresoTextEn.value);
	})
	
ingresoTextEn.addEventListener("input", ()=>{
	console.log(moveDe.value);
	})	
	
 //agrego otro escuchador de eventos al boton = cuanta las veces que hago click
 //resultDe.innerHTML = (ingresoTextEn.value) si funciona actualiza con el mensaje :)
buttomDe.addEventListener("click", ()=>{
	//resultDe.innerHTML = (ingresoTextEn.value) 
	//console.log(ingresoTextEn.value);
	//})
	resultDe.innerHTML = decode(ingresoTextEn,moveDe);
})
