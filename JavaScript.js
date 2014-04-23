

var canvasThing= new function(){
	var canvas =	document.getElementsByClassName("canvasOne");
	var ctx =		canvas.getContext('2d');
	
	var width = canvas.getAttribute("width");
	var height = canvas.getAttribute("height");
	
	ctx.rect(0, 0, width, height);
	ctx.stroke();
};

