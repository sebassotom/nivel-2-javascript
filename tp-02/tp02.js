/* var finDeSemana = ['sabado', 'domingo'];
var input = prompt('Ingrese un día de la semana');
var semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
var mensaje = 'Usted ingresó un valor no válido.'

for(i = 0; i < semana.length; i++) {
	if(input === semana[i]) {
		alert('Es un día hábil.');
		break;
	}
	
	else if(i < finDeSemana.length && input === finDeSemana[i]) {
		alert('Es un día de fin de semana.');
		break;
	}
} */

var input = prompt('Ingrese un día de la semana');
var semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];


for(i = 0; i < semana.length; i++) {

	if(input === semana[i] && i < 5) {
		alert('Es un día hábil.');
		break;
	}

	else if(input === semana[i] && i > 4) {
		alert('Es un día de fin de semana.');
		break;
	}
}