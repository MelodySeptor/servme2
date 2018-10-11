gestorRegistro=function(req, res){
    if(req.session.datosIndex.logged){res.redirect('/')}
    else{
        res.redirect('/inicio')
    }
}