var app ={};//Why hello namespace

//////////////////
//NAV
//////////////////
app.scroll_checker = function(){
	if( $(window).scrollTop() > app.hdr ) {
	  app.mn.addClass(app.mns);
	  app.cn.addClass(app.cnp);
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
app.hdr = 360;
//
$(window).scroll(function() {
  app.scroll_checker();
  app.win = $(this).scrollTop();
  app.about = $( ".thoughts" ).offset().top;
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
//////////////////
//BANNER GRID
//////////////////
app.makeGrid = function(){
	//variables
	app.wid = 110;
	app.hgt = 30;
	app.gridNum = app.wid*app.hgt;
	app.v_counter = -1;
	app.counter = -1;
	//actions
	for (var n = 0; n < app.gridNum; n++) {
		app.div = $('<div>').addClass('grid_square');
		app.counter++;
		//
		if (app.counter%app.wid === 0){
			app.v_counter++;
			app.counter = 0;
		}
		app.spacer_h = app.counter*10;
		app.spacer_v = app.v_counter*10;
		app.col = app.counter+1;
		app.row = app.v_counter+1;
		//
		app.div.addClass('gridRlvr');
		app.div.addClass('c' + app.col);
		app.div.addClass('r' + app.row);
		app.div.addClass('n' + n);
		app.div.css('left', app.spacer_h + 'px');
		app.div.css('top', app.spacer_v + 'px');
		//
		app.div.appendTo('.jumbotron');
	};
};
//COLOUR CHANGE
app.gridList = [
	'bg_one',
	'bg_two',
	'bg_three',
	'bg_four',
	'bg_five',
	'bg_six',
	'bg_seven',
	'bg_eight',
	'bg_nine',
	'bg_ten'
];
app.gridPattern = [
	design_pattern = ['n100','n2170','n503','n340'],
	dev_pattern = ['.n2000'],
	meesage_pattern = ['.n3000']
];
//
app.gridWipe = function(){
	var i = 0;
	app.colourRan = Math.floor(Math.random()*app.gridList.length);//Get the random colour
	//
				console.log('GRIDWIPEEEEEEEEE')
	for (var n = 1; n <= 30; n++) {//run through the rows
		//
		for (var i = 1; i <= 110; i++) {//run through the columns
			(function(i,n){//Start closure 
				//
				app.timeOut = setTimeout(function () { //start the delay for the wipe effect 
					app.grabSquare = $('.c' + i + '.r' + n);//get the divs class name
					//
					//Create the array to check for the overall div number
					app.griddy = app.grabSquare[0].className.split(' ');//
					app.arr = [];
					app.arr = app.griddy;
					//
					//Check the div class against the arrays to find the exceptions
					if( (new RegExp( '\\b' + design_pattern.join('\\b|\\b') + '\\b') ).test(app.griddy[4]) ){
						app.grabSquare.addClass('bg_black');
					}
					else{
						app.grabSquare.addClass(app.gridList[app.colourRan]);
					}
				}, 10 * i);//end settimeout
			}(i,n));//End closure
		};
	};
};
//
app.mouseEvent = function(){
	$('.gridRlvr').on( "click", function() {
		clearInterval(app.timeOut);
		app.gridWipe();
		console.log(app.colourRan);
		// alert('Something funny should happen');
	});
};
//	
//////////////////
//INIT FUNCTION
//////////////////
app.init = function(){
	app.work_piece();
	app.scroll_checker();
	app.smoothScroller();
	app.gridWipe();
};
//////////////////
//DOCUMENT READY
//////////////////
$(function() {
	app.makeGrid();
	app.mouseEvent();
	app.init();
	FastClick.attach(document.body);
});