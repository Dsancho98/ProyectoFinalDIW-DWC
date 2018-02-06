eventos = events.getInstance();
var clientelistview = (function() {
    function showClients() {
        var HTML = Handlebars.templates.one(clientelist.clientesarr);
        $('#handle').html(HTML);   
        $('.modal').modal(); 
        botonesModal();  
    }
    return {
        init: function() {
            eventos.subscribe('mostrarclientes', showClients);
        }
    }
})();
function botonesModal(){
	$(".tableview").on('click','.editarIc',function() {
       var numero=$(this).data("id");
       var context={mode:'mod',clientes:clientelist.clientesarr[numero]}
       eventos.publish('cargarmodal',context);
       $("#newfecha").datepicker({ dateFormat: 'dd/mm/yy' });
    });	
	$(".tableview").on('click','.borrarIc',function() {
      	var numero=$(this).data("id");
 		var objeto = { id: numero};   
	    clientelist.removeCliente(objeto);   
    });
  $(".tableview").on('click','.mapIc',function() {
      var direccion=$(this).data("id");
      // direccion=direccion.split(" ").join("%20%");        
      clientelist.mapCliente(direccion);   
    });  
    $('#modaluserbutton').click(function(){
    	var context={mode:'new'}
    	eventos.publish('cargarmodal',context);
    	$("#newfecha").datepicker({ dateFormat: 'dd/mm/yy' });
    });

}