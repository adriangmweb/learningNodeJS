/*
MAKE IT MODULAR
 Ejercicio 6 de 13

Este problema es similar al anterior e introduce la idea de módulos. Deberás crear dos archivos para resolver el ejercicio.

El programa debe imprimir el listado de archivos de un directorio filtrando por extensión. 
Nuevamente el primer argumento será la ruta al directorio (ej: '/path/dir/') y el segundo la extensión a filtrar, 
por ejemplo si recibes 'txt' deberás filtrar todos los archivos que terminen en .txt. Debes usar Async I/O.

Deberás escribir un archivo modular para hacer la tarea. 
Dicho módulo debe exportar una función que reciba tres parámetros en orden: la ruta del directorio, 
la extensión para filtrar y una función de callback. La idea es encapsular toda la lógica dentro del módulo.

En Node, los callbacks suelen tener una firma convencional de tener (error, data). 
Esto implica que si hay un error el primer parámetro devuelve el error sino viene null y el segundo parámetro son los datos. Para este ejercicio los datos a devolver es la lista de archivos en forma de Array. Si occurre un error, por ejemplo en la llamada a fs.readdir(), el callback debe llamarse con dicho error.

Para completar el ejercicio debes imprimir desde el módulo y no desde el programa principal. 
En caso de que el módulo devuelva un error el programa deberá imprimir en consola la información del error.

El módulo debe cumplir el siguiente contrato:

  * Exportar una función que reciba los parámetros mencionados.
  * Llamar al callback una única vez cuando ocurre un error o con la lista correspondiente.
  * No debe modificar variables globales o stdout.
  * Capturar los posibles errores y devolverlos en el callback.

La ventaja de usar contratos es que el módulo puede ser usado por cualquiera que asuma este contrato.

*/
var mymodule = require('./exercise6-module.js');


mymodule(process.argv[2], process.argv[3], function(err,data) {
	if (err) {
		console.log(err);
	}else{
		data.forEach (function (element, index, element){
			console.log(element[index]);
		})
	}
});