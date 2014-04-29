function draw(){
		
		var canvas = document.getElementById('canvasOne');
		var ctx = canvas.getContext('2d');
		
		var width = canvas.getAttribute("width");
		var height = canvas.getAttribute("height");
		var centerX = width/2;
		var centerY = height/2;
		var gapScale = 0.95; //Mind the gap
		var wedgesCount = prompt("Number of Parts");
		var allAround = 2 * Math.PI;
		var rad = (centerX < centerY ? centerX : centerY) - 10;
		var colourSet = ["#A55D00", "#15C0FF", "#FF961B", "#FFF14F", "#FF67B2", "#27D83C", "#FFFFFF", "#000000"];
		var playerNumber = 5;
		try{
		ctx.beginPath();
		ctx.fillStyle = colourSet[playerNumber - 1];
		ctx.arc(centerX, centerY, rad, 0, allAround, false);
		ctx.fill();
		ctx.stroke();
		
		drawWedges(ctx, centerX, centerY, rad * gapScale, wedgesCount, playerNumber);
		}
catch(err)
  {
  txt="There was an error on this page.\n\n";
  txt+="Error description: " + err.message + "\n\n";
  txt+="Click OK to continue.\n\n";
  alert(txt);
  }
	}
	
	function drawWedges(ctx, x, y, r, n, player){
		var n = Math.abs(n);
		var n = Math.ceil(n);
		var n = n%257;
		var angle = 2 * Math.PI / n;
		var allAround = 2 * Math.PI;
		var xOffset = 0;
		var yOffset = 0;
		var colourSet = ["#A55D00", "#15C0FF", "#FF961B", "#FFF14F", "#FF67B2", "#27D83C", "#FFFFFF", "#000000"];
		var colourSet2 = ["#722A00", "#008DCC", "#CC6300", "#CCBE1C", "#CC347F", "#00A509", "#FFFFFF", "#000000"];
		var getsColours = [true, false, true, true, true, true, true, true]
		
		
		
		
		if(n!=1){
			for(i=0; i<n; i++){
				var conPointX = x + r * Math.cos(i * angle);
				var conPointY = y + r * Math.sin(i * angle);
				
				var innerXoff = r / 10 *Math.cos((i + .5) * angle);
				var innerYoff = r / 10 *Math.cos((i + .5) * angle);
				
				
				
				ctx.beginPath();
				ctx.moveTo(x + xOffset + innerXoff, y + yOffset + innerYoff);
				ctx.lineTo(conPointX, conPointY);
				ctx.arc(x, y, r, i * angle, (i+1) * angle, false);
				ctx.lineTo(x + xOffset + innerXoff, y + yOffset + innerYoff);
				ctx.closePath();
				if(getsColours[i]){
					ctx.fillStyle = colourSet[i];
				}else{
					ctx.fillStyle = colourSet2[player - 1];
				}
				ctx.fill();
				ctx.stroke();
			}
			
		}else{
			ctx.beginPath();
			ctx.moveTo(x+r, y)
			ctx.arc(x, y, r, 0, allAround, true);
			ctx.fillStyle = colourSet[0];
			ctx.fill();
			ctx.stroke();
		}
		
	}
