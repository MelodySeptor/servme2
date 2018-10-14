var express = require('express')
var session = require('express-session')
var helmet = require('helmet')
const bodyParser = require("body-parser");
require('./private/datosVariables')
require('./private/gestorLoginRegistro/gestorRegistro')
var app = express()

var expireDate = new Date(Date.now() + 60 * 60 * 1000)
//Iniciar parametros
app.use(express.static(__dirname + '/public'));
app.use(session({secret:'servme', resave:false, saveUninitialized:false}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(helmet())
app.set('views', __dirname + '/public/views')
app.set('view engine', 'pug')
var port = 5000

//Peticion general
app.all('/', function(req, res){
	if(req.session.datosIndex==undefined){
		req.session.datosIndex = JSON.parse(JSON.stringify(datosIndex))
	}
	req.session.datosIndex.tituloPagina='Servme'
	res.render('index', req.session.datosIndex)
})

//Pagina principal
app.get('/inicio', function(req, res){
	if(req.session.datosIndex==undefined){
		req.session.datosIndex = JSON.parse(JSON.stringify(datosIndex))
	}
	req.session.datosIndex.tituloPagina='Servme - Inicio'
	res.render('principal', req.session.datosIndex)	
})

//Pagina login
app.get('/acceder', function(req, res){
	if(req.session.datosIndex==undefined){
		req.session.datosIndex = JSON.parse(JSON.stringify(datosIndex))
	}
	req.session.datosIndex.tituloPagina='Servme - Acceder'
	res.render('acceder', req.session.datosIndex)
})

//Pagina registro
app.get('/registro', function(req, res){
	if(req.session.datosIndex==undefined){
		req.session.datosIndex = JSON.parse(JSON.stringify(datosIndex))
	}
	req.session.datosIndex.tituloPagina='Servme - Registro'
	res.render('registro', req.session.datosIndex)
})

//Gestion del registro
app.post('/registroPeticion', function(req, res){
	gestorRegistro(req, res)
})

//Gestion del login
app.post('/accederPeticion', function(req, res){
	res.redirect('./acceder')
})

//Obtiene los terminos y redirije al registro.
app.get('/terminos', function(req, res){
	/*
	https://arjunphp.com/download-file-node-js-express-js/
	*/
	res.redirect('./registro')
})

//Server
app.listen(port, function(){
	console.log("Server started on: " + port)
})