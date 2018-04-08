console.log("JavaScript is working");
var user = "";
var clicked = new Array(5);
for (var i = 0; i < 5; i++){
	clicked[i] = new Array(5);
}
$(document).ready(function(){
	console.log("Jquery is working!")
	for (var i = 0; i < 5; i++){
		for (var j = 0; j < 5; j++){
			clicked[i][j] = false;
		}
	}
	clicked[2][2] = true;
	$("#img22").css("opacity", "1")
    var user = sessionStorage.getItem("username");
    console.log(user);
	if (user != null){
        $("#login").html("Hello " + user + "!");
        $("#login").css("opacity", "1")
    }
})

$(this).click(function(event){
	var i;
	var j;
	var id;
	console.log(event.target.id);
	if (event.target.id === "check00"){
		id = "#img00";
		i = 0;
		j = 0;
	}
	if (event.target.id === "check01"){
		id = "#img01";
		i = 0;
		j = 1;
	}
	if (event.target.id === "check02"){
		id = "#img02";
		i = 0;
		j = 2;
	}
	if (event.target.id === "check03"){
		id = "#img03";
		i = 0;
		j = 3;
	}
	if (event.target.id === "check04"){
		id = "#img04";
		i = 0;
		j = 4;
	}
	if (event.target.id === "check10"){
		id = "#img10";
		i = 1;
		j = 0;
	}
	if (event.target.id === "check11"){
		id = "#img11";
		i = 1;
		j = 1;
	}
	if (event.target.id === "check12"){
		id = "#img12";
		i = 1;
		j = 2;
	}
	if (event.target.id === "check13"){
		id = "#img13";
		i = 1;
		j = 3;
	}
	if (event.target.id === "check14"){
		id = "#img14";
		i = 1;
		j = 4;
	}
	if (event.target.id === "check20"){
		id = "#img20";
		i = 2;
		j = 0;
	}
	if (event.target.id === "check21"){
		id = "#img21";
		i = 2;
		j = 1;
	}
	if (event.target.id === "check22"){
		id = "#img22";
		i = 2;
		j = 2;
	}
	if (event.target.id === "check23"){
		id = "#img23";
		i = 2;
		j = 3;
	}
	if (event.target.id === "check24"){
		id = "#img24";
		i = 2;
		j = 4;
	}
	if (event.target.id === "check30"){
		id = "#img30";
		i = 3;
		j = 0;
	}
	if (event.target.id === "check31"){
		id = "#img31";
		i = 3;
		j = 1;
	}
	if (event.target.id === "check32"){
		id = "#img32";
		i = 3;
		j = 2;
	}	
	if (event.target.id === "check33"){
		id = "#img33";
		i = 3;
		j = 3;
	}
	if (event.target.id === "check34"){
		id = "#img34";
		i = 3;
		j = 4;
	}
	if (event.target.id === "check40"){
		id = "#img40";
		i = 4;
		j = 0;
	}
	if (event.target.id === "check41"){
		id = "#img41";
		i = 4;
		j = 1;
	}
	if (event.target.id === "check42"){
		id = "#img42";
		i = 4;
		j = 2;
	}
	if (event.target.id === "check43"){
		id = "#img43";
		i = 4;
		j = 3;
	}
	if (event.target.id === "check44"){
		id = "#img44";
		i = 4;
		j = 4;
	}	
	if (!clicked[i][j]){
		$(id).css("opacity", "1")
		clicked[i][j] = true;
		var won = checkwin(i, j);
	}
	else{
		$(id).css("opacity", "0")
		clicked[i][j] = false;
	}
	console.log(clicked[i][j])
	if (won){
		win(i, j);
	}
})

function checkwin(i, j){
	var xrow = 0;
	var xcol = 0;
	var xdiagdown = 0;
	var xdiagup = 0;
	for (var k = 0; k < 5; k++){
		if (clicked[k][j]){
			xcol++;
		}
	}
	for (var k = 0; k < 5; k++){
		if (clicked[i][k]){
			xrow++;
		}
	}
	for (var k = 0; k < 5; k++){
		if (clicked[k][k]){
			xdiagdown++;
		}
	}
	for (var k = 0; k < 5; k++){
		if (clicked[k][4 - k]){
			xdiagup++;
		}
	}
	if (xcol >= 5 || xrow >= 5 || xdiagdown >= 5 || xdiagup >= 5){
		return true;
	}
	else{
		return false;
	}
}

function win( i, j){
		var xrow = 0;
	var xcol = 0;
	var xdiagdown = 0;
	var xdiagup = 0;
	for (var k = 0; k < 5; k++){
		if (clicked[i][k]){
			xcol++;
		}
	}
	for (var k = 0; k < 5; k++){
		if (clicked[k][j]){
			xrow++;
		}
	}
	for (var k = 0; k < 5; k++){
		if (clicked[k][k]){
			xdiagdown++;
		}
	}
	for (var k = 0; k < 5; k++){
		if (clicked[k][4 - k]){
			xdiagup++;
		}
	}
	if (xcol >= 5){
		if (i === 0){
			$("#check00").css("opacity", "1")
			$("#check01").css("opacity", "1")
			$("#check02").css("opacity", "1")
			$("#check03").css("opacity", "1")
			$("#check04").css("opacity", "1")
		}
		if (i === 1){
			$("#check10").css("opacity", "1")
			$("#check11").css("opacity", "1")
			$("#check12").css("opacity", "1")
			$("#check13").css("opacity", "1")
			$("#check14").css("opacity", "1")
		}
		if (i === 2){
			$("#check20").css("opacity", "1")
			$("#check21").css("opacity", "1")
			$("#check22").css("opacity", "1")
			$("#check23").css("opacity", "1")
			$("#check24").css("opacity", "1")
		}
		if (i === 3){
			$("#check30").css("opacity", "1")
			$("#check31").css("opacity", "1")
			$("#check32").css("opacity", "1")
			$("#check33").css("opacity", "1")
			$("#check34").css("opacity", "1")
		}
		if (i === 4){
			$("#check40").css("opacity", "1")
			$("#check41").css("opacity", "1")
			$("#check42").css("opacity", "1")
			$("#check43").css("opacity", "1")
			$("#check44").css("opacity", "1")
		}
	}
	if (xrow >= 5){
		if (j === 0){
			$("#check00").css("opacity", "1")
			$("#check10").css("opacity", "1")
			$("#check20").css("opacity", "1")
			$("#check30").css("opacity", "1")
			$("#check40").css("opacity", "1")
		}
		if (j === 1){
			$("#check01").css("opacity", "1")
			$("#check11").css("opacity", "1")
			$("#check21").css("opacity", "1")
			$("#check31").css("opacity", "1")
			$("#check41").css("opacity", "1")
		}
		if (j === 2){
			$("#check02").css("opacity", "1")
			$("#check12").css("opacity", "1")
			$("#check22").css("opacity", "1")
			$("#check32").css("opacity", "1")
			$("#check42").css("opacity", "1")
		}
		if (j === 3){
			$("#check03").css("opacity", "1")
			$("#check13").css("opacity", "1")
			$("#check23").css("opacity", "1")
			$("#check33").css("opacity", "1")
			$("#check43").css("opacity", "1")
		}
		if (j === 4){
			$("#check04").css("opacity", "1")
			$("#check14").css("opacity", "1")
			$("#check24").css("opacity", "1")
			$("#check34").css("opacity", "1")
			$("#check44").css("opacity", "1")
		}	
	}
	if (xdiagdown >= 5){
		$("#check00").css("opacity", "1")
		$("#check11").css("opacity", "1")
		$("#check22").css("opacity", "1")
		$("#check33").css("opacity", "1")
		$("#check44").css("opacity", "1")
	}
	if (xdiagup >= 5){
		$("#check04").css("opacity", "1")
		$("#check13").css("opacity", "1")
		$("#check22").css("opacity", "1")
		$("#check31").css("opacity", "1")
		$("#check40").css("opacity", "1")
	}
	$("#youWin").css("opacity", "1")
}