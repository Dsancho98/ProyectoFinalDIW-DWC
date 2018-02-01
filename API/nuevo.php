<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");
//require('functions.php');
if(isset($_POST['submit'])){
	//require('clases/cliente.class.php');
	//include all DAO files
	require_once('include_dao.php');
	//new cliente
	$cliente=new Cliente();	
	$cliente->nombres = htmlspecialchars(trim($_POST['nombres']));
	$cliente->ciudad = htmlspecialchars(trim($_POST['ciudad']));
	$cliente->sexo = htmlspecialchars(trim($_POST['alternativas']));
	$cliente->telefono = htmlspecialchars(trim($_POST['telefono']));
	$cliente->fechaNacimiento = htmlspecialchars(trim($_POST['fecha_nacimiento']));
	$cliente->direccion = htmlspecialchars(trim($_POST['direccion']));
	$cliente->provincia = htmlspecialchars(trim($_POST['provincia']));
	$cliente->fecha_alta = htmlspecialchars(trim($_POST['fecha_alta']));	

	//start new transaction
	$transaction = new Transaction();
	//obtain clienteDAOFactory
	$CLienteDAO=DAOFactory::getClienteDAO();
	//insert cliente
	$id=$CLienteDAO->insert($cliente);
	//commit transaction
	$transaction->commit();
//echo json_encode($clientes, JSON_FORCE_OBJECT);
	//$objCliente=new Cliente;
	if ( $id >0){
    	// require('consulta_inc.php');
    	echo json_encode($cliente);
	}else{
		echo json_encode(array("error"=>"Nuevo:Se produjo un error. Intente más tarde"), JSON_FORCE_OBJECT);
	} 

}
?>