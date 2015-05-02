
//////////////////
//MAKE GRID
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
//////////////////
// GRID TRANSITION
//////////////////
//
app.getClassnames = function(){
	app.griddy = app.grabSquare[0].className.split(' ');//
	app.arr = [];
	app.arr = app.griddy;
	app.grabSquare.removeClass(app.arr[5]);
}
//
app.randCol = function(){
	app.colourRan = Math.floor(Math.random()*app.gridList.length);//Get the random colour
	return app.colourRan;
}
//
app.mes_ctr = 2;
//MAKE THE GRID CHANGE
app.gridWipe = function(message){
	app.mes_pattern = app.gridPattern[message];
	//
	var i = 0;
	// 
	app.colourRan = app.randCol();//Get the random colour
	//
	for (var n = 1; n <= 30; n++) {//run through the rows
		//
		for (var i = 1; i <= 110; i++) {//run through the column
			//
			(function(i,n){//Start closure 
				//
				app.timeOut = setTimeout(function () { //start the delay for the wipe effect 
					app.grabSquare = $('.c' + i + '.r' + n);//get the divs class name
					//
					//Create the array to check for the overall div number
					app.getClassnames();
					//
					//Check the div class against the arrays to find the exceptions
					if( (new RegExp( '\\b' + app.mes_pattern.join('\\b|\\b') + '\\b') ).test(app.griddy[4]) ){
						app.grabSquare.addClass('bg_blank');
					}
					else{
						app.putColour = app.grabSquare.addClass(app.gridList[app.colourRan]);
						console.log('COLOUR: ' + app.gridList[app.colourRan]);
					}
				}, 25 * i);//end settimeout
			}(i,n));//End closure
		};
	};
};
//SET THE GRID WIPE INTERVAL
app.gridRefresh = function(){
	app.gridWipe(app.mes_ctr);
	app.mes_ctr++;
	//
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		app.mess_thres = 3;
	} else {
		app.mess_thres = 4;
	}
	//
	if ( app.mes_ctr >= app.mess_thres ) {
		console.log('CLEAR INTERVAL!!!!!!');
		clearInterval(app.rotateMessage);
		//
		app.delayDraw = setTimeout(function () { 
			$('.draw_btn').removeClass('hide');
			app.keying();
		}, 3500);
		
	}
};
//CALL THE GRID WIPE SEQUENCE
app.gridMessage = function(){
	app.gridRefresh();
	app.rotateMessage = setInterval (app.gridRefresh, 6500);
};
//////////////////
//DRAW ON THE GRID
//////////////////
//CLEAR ALL BG_BLANK CLASS
app.gridReset = function(){
	app.colourRan = app.randCol();//Get the random colour
	for(var w = 0; w <= 3299; w++){
		app.grabSquare = $('.n' + w);
		app.getClassnames();
		app.bgcol_holder = app.gridList[app.colourRan];
		app.grabSquare.addClass(app.bgcol_holder);
	}
	// $('.grid_square').removeClass(app.arr[5]);
}

//SET THE VARIABLE FOR THE TYPE OF DRAWING
//
//SET THE INITIAL STATE OF THE DRAWING TOOL
app.brush = 'draw';

//
app.keying = function(){
	$('body').on('keydown',function(e){
      if(e.which==68){
          	app.brush = 'draw';
	      	console.log('Pressed D:' + app.brush);
      } else if(e.which==69){
	      	app.brush = 'erase';
	      	console.log('Pressed E:' + app.brush);
	      } else if (e.which==67){
	      	app.brush = 'refine';
	      	console.log('Pressed C:' + app.brush);
      }
    });
}
//
app.whiteOn = function(){
	if(app.brush !== 'erase'){
		app.gridder.removeClass(app.griddyCounter);
		app.gridder.addClass('bg_blank');
		console.log('Get it on!!!');
	}
}
//
app.whiteOff = function(){
	if(app.brush !== 'draw'){
		app.gridder.removeClass('bg_blank');
		app.gridder.addClass(app.bgcol_holder);
		console.log('get it off!!!!!!!');
	}
}
//
app.draw = function(grid){
	app.gridder = grid;
	app.griddy = app.gridder[0].className.split(' ');
	app.griddyCounter = app.griddy[5];
	if (app.griddyCounter === 'bg_blank'){
		app.whiteOff();
		console.log('get it off!!!!!!!');
	}else{
		app.whiteOn();
	}
}	
//