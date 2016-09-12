var diaDeLaSemana = prompt('Ingrese un día de la semana');
var diasDeLaSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

for(position = 0; position < diasDeLaSemana.length; position++) {
	if(diaDeLaSemana === diasDeLaSemana[position]) {
		alert('Es un día hábil.');
	}
	else {
		alert('Es un día de fin de semana.');
	}
}