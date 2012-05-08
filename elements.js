//elements

Line = function(p1,p2,color) {
	this.p1 = p1;
	this.p2 = p2;
	this.color = color;
	this.width = 3;
	_this = this;
}

Line.prototype = {
	draw: function(ctx){
		ctx.strokeStyle = _this.color;
		ctx.lineWidth = _this.width;
		ctx.beginPath();
		ctx.moveTo(_this.p1.x,_this.p1.y);
		ctx.lineTo(_this.p2.x,_this.p2.y);
		ctx.closePath();
		ctx.stroke();
	}
};

Build = function(p) {
	this.p = p;
	_this = this;
}

Build.prototype = {
	draw: function(ctx) {
		ctx.arc(_this.p.x,_this.p.y,2,0,2*Math.PI,false);
		ctx.stroke();
	}
};