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
app.hdr = 325;
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
	one = ["n801","n691","n690","n799","n908","n907","n1017","n1347","n1346","n1457","n1568","n1569","n1680","n1681","n1682","n1683","n1574","n1465","n1245","n1135","n1025","n915","n804","n803","n693","n692","n691","n690","n689","n909","n1018","n1017","n1127","n1236","n1457","n1458","n1569","n1570","n1571","n1572","n1573","n1463","n1354","n1244","n1134","n1024","n914","n803","n693","n692","n802","n803","n812","n812","n922","n1032","n1142","n1472","n1582","n1913","n2023","n1803","n1583","n1363","n1252","n1032","n921","n1031","n1251","n1361","n1580","n1690","n1691","n1581","n1471","n701","n700","n590","n700","n920","n1250","n1360","n1470","n1581","n1691","n1801","n1802","n1912","n1911","n1801","n1580","n1360","n1140","n1030","n920","n810","n700","n701","n702","n592","n702","n813","n923","n924","n1034","n1144","n1255","n1256","n1366","n1367","n1477","n1478","n1588","n1589","n1589","n1699","n1700","n1810","n1811","n1811","n1701","n1591","n1481","n1480","n1371","n1261","n1260","n1151","n1150","n1041","n1040","n931","n930","n930","n820","n710","n709","n710","n711","n601","n602","n601","n711","n718","n608","n718","n828","n938","n1048","n1158","n1268","n1267","n1377","n1487","n1597","n1707","n1817","n1817","n1927","n2037","n2038","n2039","n1929","n2040","n2041","n2043","n2044","n2045","n2046","n2047","n1937","n1937","n1936","n1935","n1934","n1933","n1932","n1931","n1930","n1929","n1928","n1818","n1708","n1598","n1488","n1378","n1267","n1157","n1268","n1269","n1270","n1271","n1272","n1273","n1272","n1271","n1270","n1269","n1268","n1269","n1270","n1271","n1273","n1274","n1275","n1276","n1275","n1274","n1273","n1272","n1271","n1270","n1269","n1159","n1049","n939","n938","n828","n718","n608","n498","n497","n607","n608","n609","n611","n612","n614","n615","n616","n613","n610","n610","n610","n611","n612","n613","n612","n611","n610","n608","n607","n608","n609","n610","n611","n610","n609"],
	two = ["n1023","n913","n912","n802","n1132","n1352","n1573","n1683","n1793","n1903","n1353","n1243","n1022","n1462","n1572","n1242","n1682","n1902","n2012","n1792","n1133","n911","n910","n909","n914","n806","n805","n908","n907","n915","n916","n804","n807","n803","n801","n800","n1030","n1141","n1251","n1361","n1472","n1031","n920","n810","n1582","n1583","n1693","n1803","n1362","n1140","n1250","n1471","n1692","n1913","n2024","n1914","n1805","n1695","n1804","n1696","n1586","n1587","n1697","n1698","n1809","n1919","n1920","n2030","n2031","n2141","n1811","n1701","n1591","n1481","n1261","n1041","n931","n821","n1151","n1371","n1592","n1702","n1812","n1922","n1921","n1042","n1044","n1158","n1159","n1161","n1162","n1163","n1054","n1055","n945","n944","n943","n942","n1051","n1160","n1378","n1488","n1598","n1709","n1819","n1930","n2041","n2153","n2154","n2155","n2156","n2157","n2158","n2049","n1939","n1830","n1721","n1611","n1501","n1281","n1171","n1170","n1060","n950","n949","n839","n838","n837","n836","n835","n834","n833","n1050","n1270","n1380","n1490","n1600","n1710","n1821","n1932","n1933","n2044","n2045","n2046","n2047","n2048","n2050","n1940","n1391","n1280","n1169","n1059","n948","n832","n831","n940","n1049","n1269","n1379","n1489","n1599","n1820","n1931","n2042","n2043","n1282","n1172","n1061","n951","n840","n729","n727","n726","n725","n724","n941","n1601","n1712","n1822","n1934","n1935","n1831","n1502","n1392","n947","n1381","n1491","n1602","n1823","n2159","n2160","n2051","n1941","n1722","n1612","n1058","n1056","n1053","n1052","n1936","n1937","n1717","n1607","n1497","n1498"],
	three = ["n799","n910","n1020","n1240","n1350","n1460","n1570","n1680","n1790","n1900","n1679","n1459","n1238","n1018","n908","n798","n1128","n1348","n1458","n1239","n1019","n909","n1569","n1789","n1899","n1678","n1568","n1457","n1788","n1898","n797","n688","n689","n690","n796","n795","n794","n793","n800","n801","n803","n691","n692","n687","n686","n802","n804","n808","n1138","n1248","n1358","n1468","n1578","n1028","n917","n807","n697","n1137","n1247","n1357","n1467","n1577","n1027","n587","n1688","n1799","n1909","n1798","n1687","n1356","n1246","n1136","n1139","n1140","n1030","n1141","n1142","n1143","n1033","n923","n813","n703","n593","n592","n1144","n1254","n702","n812","n1032","n1363","n1474","n1584","n1694","n1473","n1253","n1583","n1693","n1804","n922","n1257","n1148","n1039","n930","n820","n821","n711","n601","n600","n490","n710","n819","n707","n597","n1368","n1478","n1588","n1698","n1037","n927","n817","n816","n1036","n1147","n1367","n1587","n1697","n1808","n1807","n487","n488","n489","n491","n602","n712","n822","n931","n1040","n1149","n1258","n1369","n1370","n1481","n1482","n1593","n1594","n1595","n1480","n1259","n929","n829","n828","n718","n608","n607","n717","n938","n1048","n1158","n1269","n1379","n1489","n1599","n1709","n1710","n1711","n1712","n1713","n1714","n1715","n1605","n1604","n1603","n1602","n1601","n1600","n1159","n1049","n939","n940","n941","n942","n1047","n1050","n1051","n1052","n1053","n943","n609","n610","n502","n503","n501","n499","n498","n497","n496","n500","n611","n612","n725","n727","n618","n509","n508","n399","n619","n729","n949","n1059","n1169","n1279","n1389","n1499","n1498","n1608","n1719","n1611","n1612","n1614","n1616","n1617","n1507","n1506","n1615","n1613","n1610","n1500","n950","n951","n952","n953","n954","n955","n956","n1060","n1062","n1063","n839","n620","n510","n400","n402","n293","n294","n295","n296","n403","n401","n404","n398"],
	four = ["n799","n909","n1019","n1129","n1239","n1349","n1679","n1789","n1899","n2009","n2008","n1898","n1788","n1678","n1459","n1020","n910","n800","n2229","n2449","n1897","n1787","n1677","n1567","n1458","n1348","n1568","n2118","n2228","n2119","n1569","n689","n690","n692","n582","n693","n583","n798","n802","n803","n805","n695","n694","n801","n804","n806","n807","n808","n1130","n1680","n1681","n1683","n1684","n1682","n1572","n1573","n1574","n1571","n1570","n1575","n1576","n2339","n924","n923","n1033","n1032","n1142","n1251","n1361","n1471","n1581","n1691","n1801","n1800","n1911","n2021","n2022","n2023","n2024","n1914","n1915","n1805","n1476","n1034","n813","n812","n921","n1031","n1141","n1582","n1692","n1802","n1803","n1913","n2134","n2135","n2136","n2137","n2027","n1035","n922","n1912","n2138","n2139","n2140","n2141","n2031","n2032","n1811","n1701","n1700","n1590","n1369","n1253","n1252","n1362","n1472","n2025","n1921","n1591","n1481","n1371","n1261","n1151","n1041","n1040","n930","n929","n928","n927","n926","n815","n814","n1030","n1140","n1250","n1360","n1470","n1580","n2026","n2028","n2142","n1922","n1812","n1150","n1039","n925","n935","n825","n1045","n1155","n1156","n1266","n1376","n1375","n1486","n1485","n1596","n1595","n1706","n1705","n1816","n1926","n2037","n2147","n2148","n2149","n2150","n2040","n1930","n1931","n1821","n1711","n1601","n1491","n1381","n1271","n1161","n1051","n941","n831","n1382","n1492","n1602","n1712","n1822","n1932","n2041","n1927","n1817","n1707","n1597","n1265","n1044","n934","n837","n727","n948","n1058","n1168","n1278","n1388","n1498","n1608","n1718","n1717","n1828","n1827","n1937","n2047","n2157","n1497","n1276","n1166","n1056","n946","n836","n726","n728","n730","n731","n733","n734","n735","n736","n846","n956","n955","n1065","n1174","n1283","n1282","n1281","n1390","n1389","n1500","n1611","n1613","n1724","n1725","n1836","n1946","n1947","n2057","n1945","n1833","n1722","n1721","n1720","n1610","n1609","n1499","n1173","n1064","n954","n845","n844","n843","n842","n841","n840","n839","n838","n729","n732","n1063","n1172","n1280","n1501","n1612","n1723","n1835","n1837"],
	five = ["r1","r2","r3","r4","r5","r6","r7","r8","r9","r10","r11","r12","r13","r14","r15","r16","r17","r18","r19","r20","r20","r21","r22","r23","r24","r25","r26","r27","r28","r29","r30"]
];
//
app.mes_ctr = 2;
//
app.gridWipe = function(message){
	app.mes_pattern = app.gridPattern[message];
	//
	var i = 0;
	// 
	app.colourRan = Math.floor(Math.random()*app.gridList.length);//Get the random colour
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
					app.griddy = app.grabSquare[0].className.split(' ');//
					app.arr = [];
					app.arr = app.griddy;
					app.grabSquare.removeClass(app.arr[5]);
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
//
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
		$('.draw_btn').removeClass('hide');
		app.keying();
		
	}
};
//
app.gridMessage = function(){
	app.gridRefresh();
	app.rotateMessage = setInterval (app.gridRefresh, 6500);
};
//
app.gridReset = function(){
	app.colourRan = Math.floor(Math.random()*app.gridList.length);//Get the random colour
	for(var w = 0; w <= 3299; w++){
		app.grabSquare = $('.n' + w);
		app.griddy = app.grabSquare[0].className.split(' ');//
		app.arr = [];
		app.arr = app.griddy;
		app.grabSquare.removeClass(app.arr[5]);
		// console.log(grabSquare + '?????????????????');
		app.bgcol_holder = app.gridList[app.colourRan];
		app.grabSquare.addClass(app.bgcol_holder);
	}
	// $('.grid_square').removeClass(app.arr[5]);
}
//
//
//
//SET THE VARIABLE FOR THE TYPE OF DRAWING
app.brush = 'refine';

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
	app.griddyNum = app.griddy[4];
	console.log(app.griddyNum);
	//
	app.griddyCounter = app.griddy[5];
	if (app.griddyCounter === 'bg_blank'){
		app.whiteOff();
		console.log('get it off!!!!!!!');
	}else{
		app.whiteOn();
	}
}	
//
app.arr_recorder = [];
//
app.mouseEvent = function(){
	// $('.gridRlvr').on('click', function() {
	// 	app.gridder = $(this);
	// 	app.griddy = app.gridder[0].className.split(' ');
	// 	app.arr_grabber = app.griddy[4];
	// 	// console.log(app.arr_grabber)
	// 	app.arr_recorder.push(app.arr_grabber);
	// 	// console.log(app.arr_recorder);
	// });
	//
	$('.draw_btn').on('click', function(){
		$(this).addClass('hide');
		// console.log('Hide the button!');
		$('.instruct').addClass('show');
		// console.log('Show instructions!');
		app.gridReset();
	});
	$('.reset').on('click', function(){
		app.gridReset();
	});
	//
	//
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
	
};
//
//////////////////
//INIT FUNCTION
//////////////////
app.init = function(){
	app.work_piece();
	app.scroll_checker();
	app.smoothScroller();
	app.gridMessage();
	app.mouseEvent();
};
//////////////////
//DOCUMENT READY
//////////////////
$(function() {
	app.makeGrid();
	app.init();
	FastClick.attach(document.body);
	//
});