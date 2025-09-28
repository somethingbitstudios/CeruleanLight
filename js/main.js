

//about
var aboutElement = document.getElementById("about");
function About_Window_Off(){
	aboutElement.style.visibility = "hidden";
}
function About_Window(){
	console.log("yay")
	aboutElement.style.visibility = "visible";
}
var audio=null;
function EasterEgg(){
	if(audio==null){
		audio = new Audio("Papaya.mp3");
    audio.play();
	}else{
		audio.pause();
		audio=null;
	}
	
	
}