//when the page loads init your vars and get the canvas and context
var ctx;
var builds = [];

paint = function() {
	p1 = new Point(0,100);
	p2 = new Point(50,100);
	l1 = new Line(p1,p2,'00853f');
	l1.draw(ctx);

	b1 = new Build(p2);
	b1.draw(ctx);
	builds.push(b1);
}

loadcalendar = function() {
 $("#datepicker").datepicker();
}

window.onload = function() {
	c = document.getElementById("mycanvas");
	ctx = c.getContext("2d");
	paint();
	loadcalendar();
}

window.onmousedown = function(e) {
	mouseloc = new Point(e.pageX, e.pageY);
	if(ptinrect(mouseloc, builds[0].open_rect) && !builds[0].is_open)
		builds[0].onclick(ctx);
	else if(ptinrect(mouseloc, builds[0].close_rect) && builds[0].is_open)
		builds[0].onclick(ctx);
}