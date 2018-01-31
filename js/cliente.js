	var cliente=(function(){		
		function newcliente(ajax) {
		    return {
		        id: ajax.id,
		        nombres: ajax.nombres,
		        ciudad: ajax.ciudad,
		        sexo: ajax.sexo,
		        telefono: ajax.telefono,
		        fecha_nacimiento: ajax.fechaNacimiento
		    }
		}
		return{
			newcliente:newcliente
		}		
	})();