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
//////////////////
app.scroll_checker = function(){
	app.wid = $( window ).width();
	if (app.wid <= 620){
		app.hdr = 195;
		// console.log('195!!!!!!!!!!!!!!');
	} else {
		app.hdr = 320;
		// console.log('320!!!!!!!!!!!!!!');
	}
		if( $(window).scrollTop() > app.hdr ) {
		  app.mn.addClass(app.mns);
		  app.cn.addClass(app.cnp);
		  $('.about').removeClass('push');
		} else {
		  app.mn.removeClass(app.mns);
		  app.cn.removeClass(app.cnp);
		};
	}
//STICKY NAV FUNCTIONALITY
app.mn = $('.top_nav');
app.mns = 'main-nav-scrolled';
app.cn = $('.content');
app.cnp = 'push';
//
$(window).scroll(function() {
  app.scroll_checker();
  app.win = $(this).scrollTop();
  app.about = $( ".about" ).offset().top;
  app.scrollNum = app.about - app.win;
});
//END STICKY NAV
app.smoothScroller = function(){
	$("nav a").smoothScroll({ offset: -25 });
	$("h1 a").smoothScroll({ offset: -120 });
}
//////////////////
//WORK EXAMPLES
//////////////////
//ROLLOVERS & OPEN
app.work_piece = function(){
	$('.workItem').on('mouseover', function(){
		app.thisBar = $(this);
		app.cl = app.thisBar[0].className.split(' ');
		app.cl_id = app.cl[1];
		app.thisBarClose = '.' + app.cl_id + ' .work_close_bar';
		app.bgCol = app.thisBar.data('colour');
		app.thisBar.css('background',app.bgCol);
		app.thisBar.addClass('makeWhite');
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
	  		// console.log('bring in the headline for: ' + app.showWp);
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

//
app.startDrawing = function(){
	$('.grid_square').on('mouseenter', function(){
		if (app.brush === 'draw'){
			app.that = $(this);
			app.draw(app.that);
		} else if (app.brush === 'erase'){
			// console.log('ERASE muthafucka');
			app.that = $(this);
			app.draw(app.that);
		}
	});
	$('.grid_square').on('click', function(){
		if(app.brush === 'refine'){
			// console.log('REFINE muthafucka');
			app.that = $(this);
			app.draw(app.that);
		}
	});
}
//
app.mouseEvent = function(){
	$('.draw_btn').on('click', function(){
		$(this).addClass('hide');
		$('.click_label').addClass('hide');
		// console.log('Hide the button!');
		$('.instruct').addClass('show');
		// console.log('Show instructions!');
		app.gridReset();
		app.startDrawing();
		clearInterval(app.delayDraw);
	});
	//
	$('.reset').on('click', function(){
		app.gridReset();
	});
	$('.d').on('click', function(){
		app.brush = 'draw';
	});
	$('.e').on('click', function(){
		app.brush = 'erase';
	});
	$('.r').on('click', function(){
		app.brush = 'refine';
	});
	//
	app.pullUp = $('.about .wrapper');
	$('.nav_shower').on('click', function(){
		console.log('Unhide nav')
		$(this).toggleClass('nav_shower_on');
		$('.main_nav').toggleClass('unhide');
		$(app.pullUp).toggleClass('aboutPull').toggleClass('aboutPush');
	});
};
//
//////////////////
//INIT FUNCTION
//////////////////
app.init = function(){
	if(app.mobileCheck){
		app.work_piece();
		app.scroll_checker();
		app.smoothScroller();
		app.mouseEvent();
	}else{
		app.makeGrid();
		app.work_piece();
		app.scroll_checker();
		app.smoothScroller();
		app.gridMessage();
		app.mouseEvent();
	}
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