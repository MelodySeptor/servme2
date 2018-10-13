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

//Comprueba que los campos del formulario sean correctos
//de no ser así, devuelve false y añade a la session los campos incorrectos.
compruebaFormulario = function(req){
    correcto = true
    //Comprobar que los campos sean correctos y que el usuario no se encuentre ya registrado.
    return correcto
}