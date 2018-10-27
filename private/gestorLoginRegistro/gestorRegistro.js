require('../gestorDataBase')

//Gestiona el registro de un nuevo usuario.
gestorRegistro=function(req, res){
    if(req.session.datosIndex.logged){res.redirect('/')}
    else{
        if(compruebaFormulario(req)){
            anadirUsuario(req)
        }
        else{res.redirect('/registro')}
    }
}

//Comprueba que el formulario sea correcto
//de no ser así, devuelve false y añade a la session los campos incorrectos.
compruebaFormulario = function(req){
    correcto = true
    //Correcto en sesion. Ya que sino habria un problema de seguridad.
    req.session.correctoRegistro = correcto

    //Comprobar que los campos sean correctos y que el usuario no se encuentre ya registrado.
    if(compruebaUsuario(req)){
        //Comprobar campos.
        if(compruebaCamposFormulario(req)){

        }
    }
    else{
        req.session.correctoRegistro = false
        req.session.usuarioExistente = true
    }
    return req.session.correctoRegistro
}

//Si campos son correctos devuelve true, sino false.
compruebaCamposFormulario = function(req){

}