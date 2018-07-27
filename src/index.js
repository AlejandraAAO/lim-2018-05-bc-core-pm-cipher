//acá debes escuchar eventos del DOM, invocar cipher.encode() o cipher.decode() según sea necesario y actualizar el resultado en la UI.

//agarramos los elementos del lado de encriptar
const ingresoText = document.getElementById("normalMess");
const moveEn = document.getElementById("rightMove");
const buttomEn = document.getElementById("butEn"); //aqui
const resultEn = document.getElementById("outputEn");


//resultEn.innerHTML = (ingresoText.value) si funciona actualiza con el mensaje :)
buttomEn.addEventListener("click", () => {
	let text = ingresoText.value;
	let number = moveEn.value;
	let messEncod = cipher.encode(number, text);
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


//resultDe.innerHTML = (ingresoTextEn.value) si funciona actualiza con el mensaje :)
buttomDe.addEventListener("click", () => {
	let text2 = ingresoTextEn.value;
	let number2 = moveDe.value;
	let messDecod = cipher.decode(number2, text2);
	resultDe.innerHTML = messDecod;
})
