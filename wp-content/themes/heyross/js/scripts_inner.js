var app ={};//Why hello namespace
//
//////////////////
//DEVICE CHECK
//////////////////
app.device_check = function(){
		console.log('checking');
	if( /Android|webOS|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		app.mobileCheck = true;
		console.log('mobile');
		
	} else {
		app.mobileCheck = false;
		console.log('desktop');
	}
}
//////////////////
//NAV
////////////////
//
app.mouseEvent = function(){
	$('.nav_shower').on('click', function(){
		$(this).toggleClass('nav_shower_on');
		$('.main_nav').toggleClass('unhide');
		$('.my_post').toggleClass('postPull');
	});
};
//
//////////////////
//INIT FUNCTION
//////////////////
app.init = function(){
		app.mouseEvent();
};
//////////////////
//DOCUMENT READY
//////////////////
$(function() {
	app.device_check();
	app.init();
	FastClick.attach(document.body);
	//
});