//Establece la connexion con la base de datos.
estableceConexion = function(){

}

//Añade un usuario a la base de datos.
anadirUsuario = function(req){
//Añade usuario a la base de datos
}

//Comprueba si un usuario se encuentra registrado, si es asi
//devuelve False, sino true.
compruebaUsuario = function(req){
    //Guardar registrado en req
    registrado = false
    req.session.registrado = registrado

    return req.session.registrado
}