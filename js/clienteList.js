eventos = events.getInstance();
// $.post(URL,data,callback);
var clientelist = (function() {
    var api = "localhost/Tarde/DWC/ProyectoFinalAdds/API";
    clientesarr = new Array();
    $.post("http://" + api + "/consulta.php", function(data) {        
        for (ajax in data) {
            if (data.hasOwnProperty(ajax)) {
                addToArray(data[ajax]);
            }
        }
        eventos.publish('mostrarclientes');
        eventos.publish('cargarmodal');
    },"json");
    function addNewCliente(objeto){        
        $.post("http://" + api + "/nuevo.php",objeto,function(contenido){           
            obj= { id:contenido.id, nombres: contenido.nombres, ciudad: contenido.ciudad, sexo: contenido.sexo, telefono: contenido.telefono, fechaNacimiento: contenido.fechaNacimiento,direccion: contenido.direccion, provincia: contenido.provincia, fecha_alta: contenido.fecha_alta};
            addToArray(obj);
            eventos.publish('mostrarclientes');            
        },"json");        
    }
    function removeCliente(objeto){           
        $.post("http://" + api + "/eliminar.php",objeto,function(contenido){
            removeFromArray(objeto.id);
            eventos.publish('mostrarclientes');
        });        
    }
    function modCliente(objeto){        
        $.post("http://" + api + "/actualizar.php",objeto,function(contenido){           
            obj= { id:contenido.id, nombres: contenido.nombres, ciudad: contenido.ciudad, sexo: contenido.sexo, telefono: contenido.telefono, fechaNacimiento: contenido.fechaNacimiento,direccion: contenido.direccion, provincia: contenido.provincia, fecha_alta: contenido.fecha_alta};
            addToArray(obj);
            eventos.publish('mostrarclientes');            
        },"json");        
    }   
    function mapCliente(direccion){
        $.post("https://maps.googleapis.com/maps/api/geocode/json?address="+direccion+"&key=AIzaSyBkSOM-8e5xPz-Gw7M7wnG5c-_lfJgoypM&language=es",function(data){
            resultado={lat: data.results[0].geometry.location.lat, lng:data.results[0].geometry.location.lng};
            eventos.publish('mostrarmapa',resultado);
        },"json");

    }
    function addToArray(ajax) {
        clientesarr[ajax.id] = cliente.newcliente(ajax);
    }
    function removeFromArray(id){
        clientesarr[id]=undefined;
    }
    function getArray() {
        return clientesarr;
    }
    return {
        addToArray: addToArray,
        clientesarr: getArray(),
        addCliente: addNewCliente,
        removeCliente: removeCliente,
        modCliente:modCliente,
        mapCliente:mapCliente
    }    
})();
