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

randomize();

$("#data00").append(rSorted[0]);
//document.getElementById("data00").innerHTML = rSorted[0];
$("#data01").append(rSorted[1]);
$("#data02").append(rSorted[2]);
$("#data03").append(rSorted[3]);
$("#data04").append(rSorted[4]);
$("#data10").append(rSorted[5]);

$("#data11").append(rSorted[6]);
$("#data12").append(rSorted[7]);
$("#data13").append(rSorted[8]);
$("#data14").append(rSorted[9]);

$("#data20").append(rSorted[10]);
$("#data21").append(rSorted[11]);
$("#data23").append(rSorted[12]);
$("#data24").append(rSorted[13]);

$("#data30").append(rSorted[14]);
$("#data31").append(rSorted[15]);
$("#data32").append(rSorted[16]);
$("#data33").append(rSorted[17]);
$("#data34").append(rSorted[18]);

$("#data40").append(rSorted[19]);
$("#data41").append(rSorted[20]);
$("#data42").append(rSorted[21]);
$("#data43").append(rSorted[22]);
$("#data44").append(rSorted[23]);

