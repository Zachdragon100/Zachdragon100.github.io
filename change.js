// JavaScript Document

function change() {

	var imgCh = document.getElementById("imgToChange");

	var number = Math.ceil(6 * Math.random());
	
	var changeTo = "images/die_faces/png/" + number + ".png";
	console.log(changeTo);
	
	imgCh.src = changeTo; //Will convert into Picture ASAP

}
