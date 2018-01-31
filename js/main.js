clientelistview.init();
clienteview.init();
eventos = events.getInstance();

$("#nuevocliente").click(function() {
    id = $("#id").val();
    nombre = $("#nombre").val();
    ciudad = $("#ciudad").val();
    sexo = $("#sexo").val();
    tlf = $("#tlf").val();
    fecha = $("#fecha").val();
    var objeto = { id: id, nombres: nombre, ciudad: ciudad, sexo: sexo, telefono: tlf, fechaNacimiento: fecha };
    clientelist.addToArray(objeto);
});
           
  		
Handlebars.registerHelper('convertirFecha', function(fecha) {
    if(fecha){
        if (fecha.length > 11) {
            return fecha.substring(8, 11) + "/" + fecha.substring(5, 7) + "/" + fecha.substring(0, 4);
        } else {
            return fecha.substring(3, 5) + "/" + fecha.substring(0, 2) + "/" + fecha.substring(6, 11);
        }
    }else return fecha;
});
Handlebars.registerHelper('seleccionarSexo',function(sexo,where){
    if(sexo==where){
        return "checked";
    }else return "";
});