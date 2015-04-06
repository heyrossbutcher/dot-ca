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
		$(app.hideCopy).toggle( 'slide');
	});
}
//BLOG FUNCTIONALITY
//ROLLOVERS & OPEN
app.blog_piece = function(){
	$('.blog_post').on('mouseenter', function(){
		$(this).css('background-size','230%');
		$(this).addClass('blog_border');
		app.bpNum = $(this).data('num');
		app.bpShow = '.bp_' + app.bpNum + ' .blog_copy';
		// $(app.bpShow).toggle( 'slide' );
	});
	$('.blog_post').on('mouseleave', function(){
		$(this).css('background-size','220%');
		$(this).removeClass('blog_border');
		// $(app.bpShow).toggle( 'slide' );
	});
}
//
//STICKY NAV FUNCTIONALITY
app.mn = $('.top_nav');
app.mns = 'main-nav-scrolled';
app.cn = $('.content');
app.cnp = 'push';
app.hdr = 360;
//
$(window).scroll(function() {
  if( $(this).scrollTop() > app.hdr ) {
    app.mn.addClass(app.mns);
    app.cn.addClass(app.cnp);
  } else {
    app.mn.removeClass(app.mns);
    app.cn.removeClass(app.cnp);

  };
  app.win = $(this).scrollTop();
  app.about = $( ".thoughts" ).offset().top;
  app.scrollNum = app.about - app.win;

	console.log(app.offsetNum);		
});
//END STICKY NAV
app.smoothScroller = function(){
	$("nav a").smoothScroll({ offset: -25 });
}
//////////////////
//INIT FUNCTION
//////////////////
app.init = function(){
	app.work_piece();
	app.blog_piece();
	app.smoothScroller();
	//app.setNavWidth();
};
//////////////////
//DOCUMENT READY
//////////////////
$(function() {
	app.init();
	FastClick.attach(document.body);
});