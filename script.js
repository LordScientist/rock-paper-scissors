let all_input = ""

function computerChoice()
    {
        // Declare constant values that will work within each scope as globals
        const random = Math.random()
        // Sorting computer logic for choice and "return" to actually put out the values where needed
        if (random < 0.3)
            {
                let choice = "rock";
                return choice;
            }

        else if (random >=0.3 && random < 0.6)
                {
                    let choice = "paper";
                    return choice;
                }
                
        else {
                let choice = "scissors"
                return choice; 
            }
                   
    }
// Storing computerchoice to be used as a value for comparision between user input
let value = computerChoice()
// This function checks for all possible combinations that can lead to a tie
function tie()
    {
        if(all_input === value && value === "rock")
            {
                console.log("A tie between rocks");
                return true
            }

        else if (all_input === value && value === "paper")
            {
                console.log("A tie between papers")
                return true
            }

        else if(all_input === value && value === "scissors")
            {
                console.log("A tie between scissors");
                return true
            }                        
    }
// This function checks for all possible combinations that can lead to a win for the user
function win()
    {
        if (all_input === "rock" && value === "scissors")
            {
                console.log("You win! Rock beats scissors")
                return true
            }

        else if (all_input === "paper" && value === "rock")
            {
                console.log("You win! Paper beats rock")
                return true
            }

        else if (all_input === "scissors" && value === "paper")
            {
                console.log("You win! Scissors beats paper")
                return true
            }
    }
// This function checks for all possible combinations that can lead to a loss for the user
function loss()
    {
        if (all_input === "rock" && value === "paper")
            {
                console.log("You Lost! Paper defeated your rock")
                return true
            }

        else if (all_input === "paper" && value === "scissors")
            {
                console.log("You Lost! Scissors defeated your Paper")
                return true
            }

        else if (all_input === "scissors" && value === "rock")
            {
                console.log("You Lost! Rock defeated your scissors")
                return true
            }
    }
// Declared variables to hold the scores
let userScore = 0
let computerScore = 0
let gametie = 0
// This function checks for whether each round is either a tie,win or loss
function score()
    {
        if (tie() === true)
            {
                gametie++
            }

        else if(win() === true)
            {
                userScore++
            }   

        else if(loss() === true)
            {
                computerScore++
            }
    }


// This variable is used to track the number of games played
trial = 0
// This loop is used to track the game,take user input,update the scores
while (trial < 5)
    {
        let user = prompt("rock,paper,scissors?\n Type any of them to commence please!")

        if(user){all_input = user.toLowerCase()}
         
        else {
            alert("Please comeback")
            alert("You can refresh to play")
            break
        }
        trial++
        value = computerChoice()
        score()
    }
// These commands are used to display the scores after the game is played
console.log(`You won : ${userScore}`);
console.log(`A tie of : ${gametie}`);
console.log(`Computer Won : ${computerScore}`)
alert("Thank You for playing with me!")