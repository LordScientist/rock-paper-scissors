// Algorithm
// Design computer movement logic

function computer()
    {
        const move = Math.random();
        if (move <= 0.3)
            {
                return "rock";
            }    

        else if (move > 0.3 && move <= 0.6)
            {
                return "paper";
            }

        else 
            {
                return "scissors";
            }

    }

// Design player movement logic
const game = document.querySelector('.game');
game.addEventListener('click',player)

function player(move)
    {
        let playerMove;
        
        if (move.target === document.querySelector('.selectRock'))
            {
                playerMove = 'rock';
            }
            
        else if (move.target === document.querySelector('.selectPaper'))
            {
                playerMove = 'paper';
            }

        else if (move.target === document.querySelector('.selectScissors'))
            {
                playerMove = 'scissors';
            }

        if (playerMove)
                {
                    const computerMove = computer();
                    determineWinner(playerMove, computerMove);
                }
    }


// Design win,loss or draw logic
const display = document.querySelector('.immediateResult');

function determineWinner(playerMove, computerMove)
    {
        if (playerMove === computerMove)
            {
                display.innerText = "Stalemate";
            }
        else if (
            (playerMove === 'rock' && computerMove === 'scissors') ||
            (playerMove === 'paper' && computerMove === 'rock') ||
            (playerMove === 'scissors' && computerMove === 'paper')
        )
            {
                display.innerText = "You win";
            }
        else
            {
                display.innerText = "You lost";
            }
    }
