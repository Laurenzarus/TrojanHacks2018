var rSorted = ["Yells \"fight on\" at a tour guide","Gets blocked by college tour group",
"Skateboarder falls off board", "Bike gets stolen", 
"\"Thief stole the tires of my bike\"","Starts an essay at midnight",
"Marshall snakes","Does anyone have a printer I can use?",
"Walks in class 5 min late","Walks in class 10 min late",
"Walks in 30 min late for 50 min class","Sleeps thru midterms",
"Misses class completely","Loses ID card",
"Leaves board in cafeteria","Caterpillar in EVK",
"Gets 3 hrs of sleep","Pulls an all-nighter",
"Pulls an all-nighter in Leavey","Is there free food?",
"If the professor is 15 min late, we're allowed to go","Premed drops",
"Hasn't seen a vegetable in days","Cup o noodle",
"A shower is but a distant dream","Shakespear",
"Daddy nikias","Sleeps thru 11am",
"Never goes to 8am","\"I'm gonna be wholesome this year\"",
"\"I'm gonna be wholesome this year\"","Cooks a whole meal in the microwave",
"Do you have an internship for the summer?","Applies to 100 internships, rejected from all of them",
"\"I'm so busy\" *watches Netflix instead","Writes an essay on a book you didn't read",
"Pointy things", "Diversity"   
];

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

