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
	design_pattern = ["n1240", "n1900","n1241", "n1242", "n1243", "n1248", "n1249", "n1250", "n1251", "n1255", "n1256", "n1257","n1265", "n1266", "n1267","n1275", "n1279","n1280", "n1281", "n1282", "n1286", "n1287", "n1288","n1901", "n1902", "n1903", "n1908", "n1909", "n1910", "n1911","n1915", "n1916", "n1917","n1925", "n1926", "n1927", "n1935", "n1939","n1940", "n1941", "n1942","n1949","n1247", "n1907","n1261", "n1921","n1271", "n1931","n1278", "n1938","n1285", "n1945","n1350", "n1460", "n1570", "n1680", "n1790", "n1354", "n1464", "n1574", "n1684", "n1794", "n1357", "n1467", "n1577", "n1687", "n1797","n1371", "n1481", "n1591", "n1701", "n1811","n1388", "n1498", "n1608", "n1718", "n1828","n1381", "n1491", "n1601", "n1711", "n1821", "n1385", "n1495", "n1605", "n1715", "n1825", "n1603","n1714", "n1492","n1578", "n1579","n1364","n1808","n1609", "n1610","n1474", "n1698","n1585", "n1586", "n1587","n1368", "n1804","n1374", "n1484", "n1594", "n1704", "n1814", "n1378", "n1818", "n1708", "n1598","n1597", "n1596","n1395", "n1505", "n1615", "n1725", "n1835","n1399", "n1509", "n1618", "n1617", "n1616","n1727", "n1838","n1580", "n1611"],
	dev_pattern = ["n1234","n1344","n1454","n1564","n1674","n1784","n1894", "n1954","n1235", "n1236", "n1237", "n1895", "n1896", "n1897","n1241", "n1242", "n1243", "n1244", "n1245", "n1248", "n1252", "n1255", "n1256", "n1257", "n1258", "n1259", "n1262", "n1270", "n1271", "n1272", "n1276", "n1277", "n1278", "n1279", "n1280", "n1284", "n1285", "n1286", "n1290", "n1291", "n1292", "n1293","n1348", "n1458", "n1568", "n1678", "n1788", "n1351", "n1461", "n1571", "n1681", "n1791", "n1901", "n1902", "n1903", "n1904", "n1905","n1572", "n1573", "n1574","n1365", "n1475", "n1585", "n1695", "n1805", "n1915", "n1916", "n1917", "n1918", "n1919", "n1588", "n1587", "n1586","n1386", "n1496", "n1606", "n1716", "n1826", "n1936", "n1390", "n1500", "n1610", "n1609", "n1608", "n1607","n1393", "n1503", "n1613", "n1723", "n1833", "n1944", "n1945", "n1946", "n1400", "n1510", "n1620", "n1730", "n1840", "n1950", "n1622", "n1621","n1404", "n1514", "n1623","n1843", "n1732","n1283", "n1943", "n1614", "n1615", "n1616","n1287", "n1947","n1379", "n1489", "n1599", "n1709", "n1819", "n1930", "n1931", "n1932", "n1823", "n1713", "n1603", "n1493", "n1383","n1372", "n1482", "n1592", "n1702", "n1812", "n1922", "n1923", "n1924", "n1925", "n1926","n1910", "n1801", "n1472", "n1362", "n1358", "n1468", "n1799","n1582", "n1692", "n1578", "n1688"],
	meesage_pattern = []
];
//
app.gridWipe = function(){
	var i = 0;
	app.arrayPick = Math.floor(Math.random()*2);
	app.pickedArray = app.gridPattern[app.arrayPick];
	console.log(app.pickedArray);
	app.colourRan = Math.floor(Math.random()*app.gridList.length);//Get the random colour
	//
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
					if( (new RegExp( '\\b' + app.pickedArray.join('\\b|\\b') + '\\b') ).test(app.griddy[4]) ){
						app.grabSquare.removeClass('bg_blank');
						app.grabSquare.addClass('bg_blank');
					}
					else{
						app.grabSquare.removeClass('bg_blank');
						app.putColour = app.grabSquare.addClass(app.gridList[app.colourRan]);
					}
				}, 25 * i);//end settimeout
			}(i,n));//End closure
		};
	};
};
//
app.gridMessage = function(){
	app.gridWipe();
	app.rotateMessage = setInterval (app.gridWipe, 4000);
};
//	
app.arr_recorder = [];
app.mouseEvent = function(){
	$('.gridRlvr').on('click', function() {
		app.gridder = $(this);
		app.griddy = app.gridder[0].className.split(' ');
		app.arr_grabber = app.griddy[4];
		app.arr_recorder.push(app.arr_grabber);
		console.log(app.arr_recorder);
		
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
});