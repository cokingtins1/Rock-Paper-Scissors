


function Play(my_choice) {
    var rand = Math.floor(Math.random() * 3);
    if (rand == 0) {
         comp_choice = "Rock";
    } else if (rand == 1){
         comp_choice = "Paper";
    } else if (rand == 2){
         comp_choice = "Scissors";
    }
    console.log(comp_choice)
    
    my_choice = my_choice.toUpperCase() // make inputs case-insensitive
    comp_choice = comp_choice.toUpperCase() // make inputs case-insensitive
    
    //Assign nuber to my_choice
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
        break determine_winner;
    } else if(test == "02" || test =="10" || test == "21"){
        console.log("You Win!")
    } else {
        console.log("You lose")
    }


}