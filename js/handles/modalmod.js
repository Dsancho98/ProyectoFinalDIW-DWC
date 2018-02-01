(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['modalmod'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form-group\">\r\n	<input id=\"idoculta\" type=\"text\" maxlength=\"50\" class=\"form-control\" value='"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "' hidden>\r\n	<label class=\"control-label\" for=\"newnombres\"><b>Nombre </b></label>\r\n	<input id=\"newnombres\" type=\"text\" maxlength=\"50\" class=\"form-control\" value='"
    + alias4(((helper = (helper = helpers.nombres || (depth0 != null ? depth0.nombres : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombres","hash":{},"data":data}) : helper)))
    + "'>\r\n</div>\r\n<div class=\"form-group\">\r\n	<label class=\"control-label\" for=\"newciudad\"><b>Ciudad</b></label>\r\n	<input id=\"newciudad\"' type=\"text\" maxlength=\"50\" class=\"form-control\" value='"
    + alias4(((helper = (helper = helpers.ciudad || (depth0 != null ? depth0.ciudad : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ciudad","hash":{},"data":data}) : helper)))
    + "'>\r\n</div>\r\n	<div class=\"form-group\">\r\n	<label>\r\n		<input type=\"radio\" name=\"alternativas\" value=\"M\" "
    + alias4((helpers.seleccionarSexo || (depth0 && depth0.seleccionarSexo) || alias2).call(alias1,(depth0 != null ? depth0.sexo : depth0),"M",{"name":"seleccionarSexo","hash":{},"data":data}))
    + "> <b>Masculino</b>\r\n	</label>\r\n	<label>\r\n		<input type=\"radio\" name=\"alternativas\" value=\"F\" "
    + alias4((helpers.seleccionarSexo || (depth0 && depth0.seleccionarSexo) || alias2).call(alias1,(depth0 != null ? depth0.sexo : depth0),"F",{"name":"seleccionarSexo","hash":{},"data":data}))
    + "> <b>Femenino</b>\r\n	</label>\r\n</div>\r\n<div class=\"form-group\">\r\n	<label class=\"control-label\" for=\"newtelefono\"><b>Telefono</b></label>\r\n	<input id=\"newtelefono\" type=\"text\" maxlength=\"25\" class=\"form-control\" length=\"40\" value='"
    + alias4(((helper = (helper = helpers.telefono || (depth0 != null ? depth0.telefono : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"telefono","hash":{},"data":data}) : helper)))
    + "'>\r\n</div>\r\n<div class=\"form-group\">\r\n	<label class=\"control-label\" for=\"newfecha\"><b>Fecha de nacimiento</b></label>\r\n	<input id=\"newfecha\" type=\"text\" maxlength=\"25\" class=\"form-control\" value='"
    + alias4((helpers.convertirFecha || (depth0 && depth0.convertirFecha) || alias2).call(alias1,(depth0 != null ? depth0.fecha_nacimiento : depth0),{"name":"convertirFecha","hash":{},"data":data}))
    + "'>\r\n</div>\r\n<div class=\"form-group\">\r\n	<label class=\"control-label\" for=\"newdireccion\"><b>Direccion</b></label>\r\n	<input id=\"newdireccion\" type=\"text\" maxlength=\"25\" class=\"form-control\" value='"
    + alias4(((helper = (helper = helpers.direccion || (depth0 != null ? depth0.direccion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"direccion","hash":{},"data":data}) : helper)))
    + "'>\r\n</div>\r\n<div class=\"form-group\">\r\n	<label class=\"control-label\" for=\"newprovincia\"><b>Provincia</b></label>\r\n	<input id=\"newprovincia\" type=\"text\" maxlength=\"25\" class=\"form-control\" value='"
    + alias4(((helper = (helper = helpers.provincia || (depth0 != null ? depth0.provincia : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"provincia","hash":{},"data":data}) : helper)))
    + "'>\r\n</div>\r\n<div class=\"form-group\">	\r\n	<input id=\"newfechaalta\" type=\"text\" maxlength=\"25\" class=\"form-control\" value='"
    + alias4(((helper = (helper = helpers.fecha_alta || (depth0 != null ? depth0.fecha_alta : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fecha_alta","hash":{},"data":data}) : helper)))
    + "' hidden>\r\n</div>\r\n<div class=\"form-group\">\r\n	<button type='button' id=\"okmodifyuser\" value=\"submit\">Modificar</button>\r\n	<input type=\"reset\" id='canceluser' value='Cancelar'>\r\n</div>\r\n";
},"useData":true});
})();