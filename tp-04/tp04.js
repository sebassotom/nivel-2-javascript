// El objeto pelicula Debera tener ID, titulo, descripcion, año, duracion,
// actores, director
// Debera tener metodos para editar todas sus propiedades, menos su ID,
// y para los actores tendra que ir agregando uno a uno


function Pelicula(id, titulo, descripcion, anio, duracion, actores, director) {

	// Atributos

	this.id = id;
	this.titulo = titulo;
	this.descripcion = descripcion;
	this.anio = anio;
	this.duracion = duracion;
	this.actores = [];
	this.director = director;

	// Metodos

	this.cambiarTitulo = function () {

		this.titulo = titulo;

	}

	this.cambiarDescripcion = function () {

		this.descripcion = descripcion;

	}

	this.cambiarAnio = function () {

		this.anio = anio;

	}

	this.cambiarDuracion = function () {

		this.duracion = duracion;

	}

	this.agregarActores = function () {


		do {

			var actor = prompt('Ingrese el nombre del actor o ingrese 0 para salir');

			if (actor !== '0') {

				this.actores.push(actor);
			}

		} while(actor !== '0');
	}

	this.cambiarDirector = function () {

		this.director = director;
	}
}

var miPelicula = new Pelicula(001, 'The Dark Knight', 'Batman wins', 2008, '2h 32min', [], 'Christopher Nolan');
miPelicula.agregarActores();