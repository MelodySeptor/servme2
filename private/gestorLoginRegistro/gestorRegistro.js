gestorRegistro=function(req, res){
    if(req.session.datosIndex.logged){res.redirect('/')}
    else{
        if(compruebaFormulario(req)){
            //Añadir en base de datos
        }
        else{res.redirect('/registro')}
    }
}

compruebaFormulario = function(req){
    correcto = false
    //Comprobar que los campos sean correctos y que el usuario no se encuentre ya registrado.
    return correcto
}