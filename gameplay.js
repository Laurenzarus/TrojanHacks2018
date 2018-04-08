console.log("JavaScript is working");
$(document).ready(init)
$(this).click(function(event){
	var i;
	var j;
	if(event.target == #img00){
		i = 0;
		j = 0;
	}
	if (event.target == #img01){
		i = 0;
		j = 1;
	}
	if (event.target == #img01){
		i = 0;
		j = 1;
	}
	if (event.target == #img02){
		i = 0;
		j = 2;
	}
	if (event.target == #img03){
		i = 0;
		j = 3;
	}
	if (event.target == #img04){
		i = 0;
		j = 4;
	}
	if (event.target == #img10){
		i = 1;
		j = 0;
	}
	if (event.target == #img11){
		i = 1;
		j = 1;
	}
	if (event.target == #img12){
		i = 1;
		j = 2;
	}
	if (event.target == #img13){
		i = 1;
		j = 3;
	}
	if (event.target == #img14){
		i = 1;
		j = 4;
	}
	if (event.target == #img20){
		i = 2;
		j = 0;
	}
	if (event.target == #img21){
		i = 2;
		j = 1;
	}
	if (event.target == #img22){
		i = 2;
		j = 2;
	}
	if (event.target == #img23){
		i = 2;
		j = 3;
	}
	if (event.target == #img24){
		i = 2;
		j = 4;
	}
	if (event.target == #img30){
		i = 3;
		j = 0;
	}
	if (event.target == #img31){
		i = 3;
		j = 1;
	}
	if (event.target == #img32){
		i = 3;
		j = 2;
	}	
	if (event.target == #img33){
		i = 3;
		j = 3;
	}
	if (event.target == #img34){
		i = 3;
		j = 4;
	}
	if (event.target == #img40){
		i = 4;
		j = 0;
	}
	if (event.target == #img41){
		i = 4;
		j = 1;
	}
	if (event.target == #img41){
		i = 4;
		j = 1;
	}
	if (event.target == #img42){
		i = 4;
		j = 2;
	}
	if (event.target == #img43){
		i = 4;
		j = 3;
	}
	if (event.target == #img44){
		i = 4;
		j = 4;
	}
	console.log("Clicking at ");
	console.log(i);
	console.log(" ");
	console.log(j);
	if (!click[i][j]){
		$(this).css("opacity", "1")
		click[i][j] = true;
		// var win = checkwin(i, j);
	}
	else{
		$(this).css("opacity", "0")
		click[i][j] = false;
	}
	if (win){
		// win(i, j);
	}
})

var init = function(){
	console.log("Jquery is working!")	
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
}

// function checkwin(i, j){

// }

// function win( i, j){

// }