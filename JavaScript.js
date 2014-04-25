function canvasThing(){
	// Find the canvas element.
	var canvas = document.getElementById('tutorial');
	
	// Determine size and find center of canvas.
	var w = canvas.getAttribute("width");
	var h = canvas.getAttribute("height");
	var x = w / 2;
	var y = h / 2;
	var gap = 0.95;
	
	// Determine how large the circle can be.
	var r = (x > y ? y : x) - 10;
	
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');
		
		ctx.beginPath();
		
		// Outer circle.
		ctx.arc(x, y, r, 0, Math.PI*2, true);
		ctx.moveto(x + r * gap, y);
		ctx.arc(x, y, r * gap, 0, Math.PI * 2, true);
		ctx.stroke();
            }
        }
	
};

