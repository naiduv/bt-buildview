//when the page loads init your vars and get the canvas and context
var ctx;

paint = function() {
	p1 = new Point(0,100);
	p2 = new Point(50,100);
	l1 = new Line(p1,p2,'00853f');
	l1.draw(ctx);

	b1 = new Build(p2);
	b1.draw(ctx);
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
