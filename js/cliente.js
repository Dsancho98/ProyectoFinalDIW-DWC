	var cliente=(function(){		
		function newcliente(ajax) {
		    return {
		        id: ajax.id,
		        nombres: ajax.nombres,
		        ciudad: ajax.ciudad,
		        sexo: ajax.sexo,
		        telefono: ajax.telefono,
		        fecha_nacimiento: ajax.fechaNacimiento,
		        direccion: ajax.direccion,
		        provincia: ajax.provincia,
		        fecha_alta: ajax.fecha_alta
		    }
		}
		return{
			newcliente:newcliente
		}		
	})();