console.log("JavaScript is working");
$(document).ready(function(){
	console.log("The jquery is working!")

	$("#img00").click(click)
})

var click = function(){
	$(this).css("display", "block")
}

var clicked = new Array(5);
for (var i = 0; i < 5; i++){
	clicked[i] = new Array(5);
}
for (var i = 0; i < 5; i++){
	for (var j = 0; j < 5; j++){
		clicked[i][j] = false;
	}
}
clicked[2][2] = true;

//checkwin(){

//}

//win(){

//}