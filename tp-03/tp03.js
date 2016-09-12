var operandoA = prompt('Ingrese un número');
var operandoB = prompt('Ingrese otro número');
var operacion = prompt('Ingrese el tipo de operacion que quiere realizar: sumar, restar, multiplicar ó dividir.');


function sumar(operandoA, operandoB){
	console.log(parseInt(operandoA) + parseInt(operandoB));
}

function restar(operandoA, operandoB){
	console.log(operandoA - operandoB);
}

function multiplicar(operandoA, operandoB){
	console.log(operandoA * operandoB);
}

function dividir(operandoA, operandoB){
	console.log(operandoA / operandoB);
}

switch (operacion) {
	case 'sumar', '+':
	sumar(operandoA, operandoB);
	break;

	case 'restar':
	restar(operandoA, operandoB);
	break;

	case 'multiplicar':
	multiplicar(operandoA, operandoB);
	break;

	case 'dividir':
	dividir(operandoA, operandoB);
	break;
}