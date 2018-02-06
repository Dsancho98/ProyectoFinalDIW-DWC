eventos = events.getInstance();
var clienteview = (function() {
    function cargarmodal(context) {
    	if(context.mode=='new'){
    	    var HTML = Handlebars.templates.modalnew();    	    
    	}else{
    		var HTML = Handlebars.templates.modalmod(context.clientes);    		
    	} 		
    	
        $('#modalHandle').html(HTML);
        $('.modal').modal();
		 botones();  
    }
    function mostrarmapa(direccion){    	
    	// $('#mapCustomer').googleMap({
    	// 	zoom:8,
    	// 	coords:[direccion.lat, direccion.lng]
    	// });document.getElementById('mapCustomer')
		map = new google.maps.Map($('#mapCustomer')[0], {
	          center: {lat: direccion.lat, lng: direccion.lng},
	          zoom: 8
	        });    
			var marker = new google.maps.Marker({
			    position:  {lat: direccion.lat, lng: direccion.lng},
			    map: map,
			    title: 'puntero'
			});   
			$("#modalmap").on("shown.bs.modal", function () {
   				google.maps.event.trigger(map, "resize");
 			}); 
		
    	
    	      	
    }
    return {
        init: function() {
            eventos.subscribe('cargarmodal', cargarmodal);
            eventos.subscribe('mostrarmapa',mostrarmapa);
        }
    }
})();
function botones(){
	$("#okcreateuser").click(function() {	    
	    var objeto=recogerValores();
	    clientelist.addCliente(objeto);
	    $(".modal").modal('close');
	});	
	$("#okmodifyuser").click(function() {	    
	    var objeto=recogerValores('mod');
	    clientelist.modCliente(objeto);
	    $(".modal").modal('close');
	});		
	$("#canceluser").click(function(){
		$(".modal").modal('close');
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
	direccion=$("#newdireccion").val();
	provincia=$("#newprovincia").val();	
	if(mode=='mod'){
		id=$("#idoculta").val();
		fechaalta=$("#newfechaalta").val();
		var objeto = { cliente_id:id,nombres: nombre, ciudad: ciudad, alternativas: sexo, telefono: tlf, fecha_nacimiento: fecha, direccion: direccion, provincia: provincia, fecha_alta: fechaalta, submit:true};	
	}else{
		fechaalta=new Date();
		anyo=fechaalta.getFullYear();
		mes=fechaalta.getMonth()+1;
		dia=fechaalta.getDate();
		horas=fechaalta.getHours();
		minutos=fechaalta.getMinutes();
		segundos=fechaalta.getSeconds();
		dia=(dia < 10 ? '0' : '') + dia;
		mes=(mes < 10 ? '0' : '') + mes;
		horas=(horas < 10 ? '0' : '') + horas;
		minutos=(minutos < 10 ? '0' : '') + minutos;
		segundos=(segundos < 10 ? '0' : '') + segundos;
		fechaalta=anyo+"/"+mes+"/"+dia+" "+horas+":"+minutos+":"+segundos;		
		var objeto = { nombres: nombre, ciudad: ciudad, alternativas: sexo, telefono: tlf, fecha_nacimiento: fecha, direccion: direccion, provincia: provincia, fecha_alta: fechaalta, submit:true};	
	}
	
	return objeto;
}