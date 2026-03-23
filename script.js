// Algorithm
// Design playermoves
let playerChoice;
const game = document.querySelector('.game');
game.addEventListener('click',playerMove);


function playerMove(move)
    {
        
        if (trial > 4)
            {
                alert("You have exhausted your attempts")
                let rematch = prompt("Would you like to play again? Enter 'Yes or NO' to proceed")
                if (rematch === 'Y'|| rematch === 'y'|| rematch === 'Yes'  || rematch === 'yes')
                    {
                        trial = 0;
                                                
                    }
                


                else
                    {
                        alert("Comeback anytime");
                        total() += scoreboard();

                        return;
                    }

                

            }        

        else if (move.target === document.querySelector('.rock'))
            {
                playerChoice = 'rock';
                
            }
        else if (move.target === document.querySelector('.paper'))
            {
                playerChoice = 'paper';
            }
        else if (move.target === document.querySelector('.scissors'))
            {
                playerChoice = 'scissors'
            }
        else 
            {
                alert('Choose any of the options')
                return;
            }
        judge();
        trial+=1


    }



// Design computermoves

function computerMove()
    {
        const move = Math.random();
        if (move < 0.3)
            {
                return 'rock';
            }
        else if (move >= 0.3 && move <0.6)
            {
                return 'paper';
            }
        else 
            {
                return 'scissors';
            }
    }
// Design logic for win,loss and draw

const result = document.querySelector('.result');
const scoreboard = document.querySelector('.scoreboard');


function judge()
    {
        const computerChoice = computerMove();
        
        if (playerChoice === computerChoice)
                {
                    result.innerHTML = "A stalemate";
                }
        else if (playerChoice === 'rock' && computerChoice === 'scissors' 
            || playerChoice === 'paper' && computerChoice === 'rock' 
            || playerChoice === 'scissors' && computerChoice === 'paper')
                {
                    result.innerHTML = "You win";
                }
        else 
                {
                    result.innerHTML = "You Lost";
                }

        function score()
        {
            if (playerChoice === computerChoice)
                {
                    draw+=1
                }
            else if (playerChoice === 'rock' && computerChoice === 'scissors' 
            || playerChoice === 'paper' && computerChoice === 'rock' 
            || playerChoice === 'scissors' && computerChoice === 'paper')
                {
                    win+=1
                }         
                
            else
                {
                    loss+=1
                }
        }
        score()
        scoreBoard()
                    
    }

let trial = 0

let win = 0;
let draw = 0;
let loss = 0;



function scoreBoard()
    {
        scoreboard.innerHTML = `Win : ${win}
                                Loss : ${loss}
                                Draw : ${draw}`
    }

scoreBoard()
