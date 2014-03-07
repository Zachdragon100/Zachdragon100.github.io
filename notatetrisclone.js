var isrunning = true;
while (isrunning){
		
	
	
	
	
	
	
	
	sleep(5000);
	
	isrunning = false;
	
}

function sleep(millis, callback) {
    setTimeout(function()
            { callback(); }
    , millis);
}

document.write("Oops! The Game Crashed!");
