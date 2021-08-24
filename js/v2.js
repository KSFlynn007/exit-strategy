// function that will clone the audio node, and play it
function cloneAndPlay(audioNode) {
	// the true parameter will tell the function to make a deep clone (cloning attributes as well)
	var clone = audioNode.cloneNode(true);
	clone.play();
}

$(document).keydown(function(event) {
 
    var key = (event.keyCode ? event.keyCode : event.which);

    if (key == '65'){
		cloneAndPlay(E1);
 	}
	if (key == '83'){
		cloneAndPlay(B2);
	}
	if (key == '68'){
		cloneAndPlay(G3);
	}
 
});