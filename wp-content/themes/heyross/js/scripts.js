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
		//
		app.timeout = setTimeout(function(){
			app.showCopy = app.showWp + ' .work_copy';
	  		console.log('bring in the headline for: ' + app.showWp);
	  		$(app.showCopy).toggle( 'slide' );	  		
		},500);
	});
	//
	$('.work_close').on('click', function(){
		app.closeNum = $(this).parent().data('num');
		app.closeIt = '.wp_' + app.closeNum;
		app.hideCopy = app.closeIt + ' .work_copy';
		$(app.closeIt).slideToggle(300);
		$(app.hideCopy).toggle( 'slide' );
	});
}
//BLOG FUNCTIONALITY
//ROLLOVERS & OPEN
app.blog_piece = function(){
	$('.blog_post').on('mouseover', function(){
		$(this).css('background-size','210%');
	});
	$('.blog_post').on('mouseout', function(){
		$(this).css('background-size','220%');
	});

}
//
//STICKY NAV FUNCTIONALITY
app.mn = $(".top_nav");
app.mns = "main-nav-scrolled";
app.hdr = 360;
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
	app.blog_piece();
}
//
//////////////////
//DOCUMENT READY
//////////////////
$(function() {
	app.init();
});