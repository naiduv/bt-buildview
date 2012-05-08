//elements

Line = function(p1,p2,color) {
	this.p1 = p1;
	this.p2 = p2;
	this.color = color;
	this.width = 3;
}

Line.prototype = {
	draw: function(ctx){
		ctx.strokeStyle = this.color;
		ctx.lineWidth = this.width;
		ctx.beginPath();
		ctx.moveTo(this.p1.x,this.p1.y);
		ctx.lineTo(this.p2.x,this.p2.y);
		ctx.closePath();
		ctx.stroke();
	}
};

Build = function(p) {
	this.p = p;
	this.build_number = 23421;
	this.rad = 2;
	this.open_rect = new Rect(p.x-this.rad, p.y-this.rad, this.rad*2, this.rad*2);
	this.close_rect = this.open_rect;

	this.display_rect = new Rect(p.x+5, p.y+5, 100, 150);
	this.is_open = false;
}

var build_number_x_offset = -12;
var build_number_y_offset = -8;

Build.prototype = {
	draw: function(ctx) {
		ctx.arc(this.p.x,this.p.y,this.rad,0,2*Math.PI,false);
		ctx.stroke();
		ctx.font = "9pt Arial";

		ctx.fillText(this.build_number.toString(),this.p.x+build_number_x_offset,this.p.y+build_number_y_offset);
	},

	onclick: function(ctx){
		if(!this.is_open) {
			this.display_rect.show(ctx);
			this.is_open = true;
		} else {
			this.display_rect.hide(ctx);
			this.is_open = false;
		}
	},

};