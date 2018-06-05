//acá debes escuchar eventos del DOM, invocar cipher.encode() o cipher.decode() según sea necesario y actualizar el resultado en la UI.

//agarramos los elementos del lado de encriptar
const ingresoText = document.getElementById("normalMess");
const moveEn = document.getElementById("rightMove");
const buttomEn = document.getElementById("butEn"); //aqui
const resultEn = document.getElementById("outputEn");


//agregamos un escuchador de eventos a el textarea de encodificar y me devuelve lo que escribo 

/*ingresoText.addEventListener("input", ()=>{
	console.log(ingresoText.value);
	})
		
ingresoText.addEventListener("input", ()=>{
	console.log(moveEn.value);
	})
*/


//agrego otro escuchador de eventos al boton = cuanta las veces que hago click
//resultEn.innerHTML = (ingresoText.value) si funciona actualiza con el mensaje :)
buttomEn.addEventListener("click", () => {
	let letter = ingresoText.value;
	let numbers = moveEn.value;
	let messEncod = cipher.encode(letter, numbers);
	resultEn.innerHTML = messEncod;
})
//buttomEn. onclick = function() {

//al hacer click en el boton el texto ingresa se muestre en el p con variable  resultEn
//--------------------------------------------------------------------------------------------------
//agarramos los elementod del lado para deencriptar
const ingresoTextEn = document.getElementById("encripMes");
const moveDe = document.getElementById("leftMove");
const resultDe = document.getElementById("outputDe");
const buttomDe = document.getElementById("butDe");
/*ingresoTextEn.addEventListener("input", ()=>{
	console.log(ingresoTextEn.value);
	})
	
ingresoTextEn.addEventListener("input", ()=>{
	console.log(moveDe.value);
	})	
*/
//agrego otro escuchador de eventos al boton = cuanta las veces que hago click
//resultDe.innerHTML = (ingresoTextEn.value) si funciona actualiza con el mensaje :)
buttomDe.addEventListener("click", () => {
	let letter2 = ingresoTextEn.value;
	let numbers2 = moveDe.value;
	let messDecod = cipher.decode(letter2, numbers2);
	resultDe.innerHTML = messDecod;
})
