
var out0 = document.getElementById("out0");
var out1 = document.getElementById("out1");
var out2 = document.getElementById("out2");
var out3 = document.getElementById("out3");
var out4 = document.getElementById("out4");
var out5 = document.getElementById("out5");


document.getElementById("btn1").onclick = function playRound() {

    if( out3.innerHTML == ''){
        var round = 1;
        out3.innerHTML = round;
        out4.innerHTML = 0;
        out5.innerHTML = 0;
    } else if(out3.innerHTML == 1){
        out3.innerHTML = parseInt(out3.innerHTML) + 1;
        var round = out3.innerHTML;
    } else {
        out3.innerHTML = out3.innerHTML;
        var round = out3.innerHTML;
        out4.innerHTML = out4.innerHTML;
        out5.innerHTML = out5.innerHTML;
    }



    var rand = Math.floor(Math.random() * 3);
    if (rand == 0) {
         comp_choice = "Rock";
    } else if (rand == 1){
         comp_choice = "Paper";
    } else if (rand == 2){
         comp_choice = "Scissors";
    }
    console.log(comp_choice)
    my_choice = document.getElementById("my_input").value // take input from textbox
    my_choice = my_choice.toUpperCase() // make inputs case-insensitive
    comp_choice = comp_choice.toUpperCase() // make inputs case-insensitive
    
    //Assign const my_input = document.getElementById('input');

    if (my_choice == "ROCK"){
        my_num = 0
    } else if (my_choice == "PAPER"){
        my_num = 1
    } else if (my_choice == "SCISSORS"){
        my_num = 2
    }

    // Declare variable for specific combination (you win if test = '02', '10' or '21')
    var test = "" + my_num + rand;

    // Determine winner based on specific combination
    

    determine_winner: if(my_num == rand){
        console.log("Draw")
        outcome = "Draw"
        var point =  0;
        //round = round + 0;
        break determine_winner;
    } else if(test == "02" || test =="10" || test == "21"){
        console.log("You Win!")
        outcome = "You Win!"
        var point = 1;
        //round = round + 1;
    } else {
        console.log("You lose")
        outcome = "You lose :("
        var point = -1;
        //round = round + 1;
    }
    console.log(point)
    out0.innerHTML = comp_choice
    out1.innerHTML = my_choice
    out2.innerHTML = outcome
    
    // if(out3.value == null){
    //     round = 1;
    //     out3.innerHTML = round;
    // } //else round = out3.value
    
    if(round == 1 && point == 0){ // Draw on first round, dont add round
        round = parseInt(round) + 0;
        out3.innerHTML = parseInt(round) + 0;
    } else if (round == 1 && point !== 0) { // Point on round 1, dont add round
            out3.innerHTML = parseInt(round) + 0;
    } else if (round >= 1 && point == 0){ // Draw on any other round, dont add round
        out3.innerHTML = parseInt(round) + 0;;
    } else if (round >= 1 && point !== 0) { // Point on any round, add round 
        out3.innerHTML = parseInt(round) + 1;
    } 
    
    if (point == 1) {
        out4.innerHTML = parseInt(out4.innerHTML) + 1;
    } else if(point == -1){
        out5.innerHTML = parseInt(out5.innerHTML) + 1;
    } 

    return point
   


}

// function game(my_choice){
//     let my_point = 0;
//     let round = 1;

//     for (let i = 0; i <=4; i++){
//         round = round + i;
//         my_point = my_point + playRound(my_choice);
//         if (my_point <= 3 && round <= 5)
//     }
// }