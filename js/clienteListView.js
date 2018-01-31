eventos = events.getInstance();
var clientelistview = (function() {
    function showClients() {
        var HTML = Handlebars.templates.one(clientelist.clientesarr);
        $('#handle').html(HTML);    
        botonesModal();  
    }
    return {
        init: function() {
            eventos.subscribe('mostrarclientes', showClients);
        }
    }
})();
function botonesModal(){
	$("#table").on('click','.editarIc',function() {
       var numero=$(this).data("id");
       var context={mode:'mod',clientes:clientelist.clientesarr[numero]}
       eventos.publish('cargarmodal',context);
       $("#newfecha").datepicker({ dateFormat: 'dd/mm/yy' });
    });	
	$("#table").on('click','.borrarIc',function() {
      	var numero=$(this).data("id");
 		var objeto = { id: numero};   
	    clientelist.removeCliente(objeto);   
    });
    $('#modaluserbutton').click(function(){
    	var context={mode:'new'}
    	eventos.publish('cargarmodal',context);
    	$("#newfecha").datepicker({ dateFormat: 'dd/mm/yy' });
    });

}