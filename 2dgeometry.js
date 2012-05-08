Point = function(x,y){
	this.x = x;
	this.y = y;
}

Point.prototype = {
};

Rect = function(x,y,w,h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.linew = 2;
}

Rect.prototype = {
	show: function(ctx, linecolor, fillcolor) {	
		linecolor = "000000";
		fillcolor = "DFFFA5"
		ctx.strokeStyle = linecolor; 
		ctx.lineWidth = this.linew;
		//ctx.strokeRect(this.x,this.y,this.w,this.h);
		ctx.fillStyle = fillcolor;
		ctx.fillRect(this.x,this.y,this.w,this.h);
	},

	hide: function(ctx) {
		ctx.clearRect(this.x-this.linew,this.y-this.linew,this.w+this.linew*2,this.h+this.linew*2);
	}
};

//checks if x is between a and b (a<x<b or b<x<a)
isbetween = function(x,a,b) {
	var small; var big;
	if(a<=b){
		small=a;
		big=b;
	} else {
		small=b;
		big=a;
	}
	if(x<=big)
		if(small<=x)
			return true;

	return false;
}

//checks if a point is inside a rect
ptinrect = function(pt, rect)
{
	if(isbetween(pt.x,rect.x,rect.x+rect.w) && isbetween(pt.y,rect.y,rect.y+rect.h))
		return true;
	return false;
}