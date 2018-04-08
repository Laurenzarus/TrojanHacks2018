var rSorted = ["0","1", "2", "3", "4", 
"5","6","7","8","9",
"10","11","12","13","14",
"15","16","17","18","19",
"20","21","22","23","24",
"25","26","27","28","29"];
// document.getElementById("hi").innerHTML = points;    


function randomize() {
    rSorted.sort(function(a, b){return 0.5 - Math.random()});
}

document.getElementById("data00").innerHTML = rSorted[0];
document.getElementById("data01").innerHTML = rSorted[1];
document.getElementById("data02").innerHTML = rSorted[2];
document.getElementById("data03").innerHTML = rSorted[3];
document.getElementById("data04").innerHTML = rSorted[4];

document.getElementById("data10").innerHTML = rSorted[5];
document.getElementById("data11").innerHTML = rSorted[6];
document.getElementById("data12").innerHTML = rSorted[7];
document.getElementById("data13").innerHTML = rSorted[8];
document.getElementById("data14").innerHTML = rSorted[9];

document.getElementById("data20").innerHTML = rSorted[10];
document.getElementById("data21").innerHTML = rSorted[11];
document.getElementById("data23").innerHTML = rSorted[12];
document.getElementById("data24").innerHTML = rSorted[13];

document.getElementById("data30").innerHTML = rSorted[14];
document.getElementById("data31").innerHTML = rSorted[15];
document.getElementById("data32").innerHTML = rSorted[16];
document.getElementById("data33").innerHTML = rSorted[17];
document.getElementById("data34").innerHTML = rSorted[18];

document.getElementById("data40").innerHTML = rSorted[19];
document.getElementById("data41").innerHTML = rSorted[20];
document.getElementById("data42").innerHTML = rSorted[21];
document.getElementById("data43").innerHTML = rSorted[22];
document.getElementById("data44").innerHTML = rSorted[23];

