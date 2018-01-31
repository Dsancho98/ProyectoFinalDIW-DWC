eventos = events.getInstance();
var clienteview = (function() {
    function cargarmodal(context) {
    	if(context.mode=='new'){
    	    var HTML = Handlebars.templates.modalnew();    	    
    	}else{
    		var HTML = Handlebars.templates.modalmod(context.clientes);    		
    	} 		
    	
        $('#modalHandle').html(HTML);
		 botones();  
    }
    return {
        init: function() {
            eventos.subscribe('cargarmodal', cargarmodal);
        }
    }
})();
function botones(){
	$("#okcreateuser").click(function() {	    
	    var objeto=recogerValores();
	    clientelist.addCliente(objeto);
	     $("#modaluser").modal('hide');
	});	
	$("#okmodifyuser").click(function() {	    
	    var objeto=recogerValores('mod');
	    clientelist.modCliente(objeto);
	    $("#modaluser").modal('hide');
	});		
	$("#canceluser").click(function(){
		$("#modaluser").modal('hide');
	});
}
function recogerValores(mode='new'){
	if(mode=='mod')id=$("#idoculta").val();
	nombre = $("#newnombres").val();
	ciudad = $("#newciudad").val();
	sexo = $("input[name=alternativas]:checked").val();
	if(!sexo) sexo='M';
	tlf = $("#newtelefono").val();
	fecha = $("#newfecha").val();
	fecha=fecha.split("/").reverse().join("-")+" 00:00:00";
	if(mode=='mod'){
		id=$("#idoculta").val();
		var objeto = { cliente_id:id,nombres: nombre, ciudad: ciudad, alternativas: sexo, telefono: tlf, fecha_nacimiento: fecha, submit:true};	
	}else{
		var objeto = { nombres: nombre, ciudad: ciudad, alternativas: sexo, telefono: tlf, fecha_nacimiento: fecha, submit:true};
	}
	
	return objeto;
}