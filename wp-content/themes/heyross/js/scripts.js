var app ={};//Why hello namespace
//
//WORK FUNCTIONALITY
//ROLLOVERS & OPEN
app.work_piece = function(){
	$('.workItem').on('mouseover', function(){
		app.bgCol = $(this).data('colour');
		$(this).css('background',app.bgCol);
		$(this).addClass('makeWhite');
	});
	$('.workItem').on('mouseout', function(){
		$(this).css('background','#ffffff');
		$(this).removeClass('makeWhite');
	});
	$('.workItem').on('click', function(){
		app.wpNum = $(this).data('num');
		app.showWp = '.wp_' + app.wpNum;
		console.log(app.showWp);
		$(app.showWp).slideToggle(300);
	});
}





//STICKY NAV FUNCTIONALITY
app.mn = $(".top_nav");
app.mns = "main-nav-scrolled";
app.hdr = 333;
//
$(window).scroll(function() {
  if( $(this).scrollTop() > app.hdr ) {
    app.mn.addClass(app.mns);
  } else {
    app.mn.removeClass(app.mns);
  }
});
//END STICKY NAV
//
//////////////////
//INIT FUNCTION
//////////////////
app.init = function(){
	app.work_piece();
}
//
//////////////////
//DOCUMENT READY
//////////////////
$(function() {
	app.init();
});