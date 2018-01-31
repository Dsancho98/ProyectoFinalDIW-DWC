$(document).ready(function(){
	var clientes={clientes:[{nombres:'Dani',ciudad:'Valencia',sexo:'H',telefono:'666666666',fecha_nacimiento:'1998-01-23 00:00:00'}]};
	var HTML= Handlebars.templates.one(clientes);
	$('#handlebars').html(HTML);
});
$('#modaluserbutton').click(function(){
	$('#modaluser').modal('show');
});