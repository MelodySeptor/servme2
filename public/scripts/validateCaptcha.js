validateCaptcha= function() {
	var response = grecaptcha.getResponse();
	if(response.length == 0){
		window.location.replace("http://www.servme.tk/registro")
		alert('Error: Captcha no verificado.')
		//Funciona muy asi asi, se debe revisar xD.
	}
}