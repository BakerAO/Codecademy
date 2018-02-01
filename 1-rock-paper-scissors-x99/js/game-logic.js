// All code should be written in this file.

let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue){
    
    // Checking all values exist
    if (!moveOneType || !moveOneValue || 
        !moveTwoType || !moveTwoValue || 
        !moveThreeType || !moveThreeValue){
        return;
    }
    
    // Checking valid move types
    if (moveOneType !== 'rock' && moveOneType !== 'paper' && moveOneType !== 'scissors'){
        return;
    }
    else if (moveTwoType !== 'rock' && moveTwoType !== 'paper' && moveTwoType !== 'scissors'){
        return;
    }
    else if (moveThreeType !== 'rock' && moveThreeType !== 'paper' && moveThreeType !== 'scissors'){
        return;
    }

    // Checking valid move values
    if (moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1){
        return;
    }
    else if (moveOneValue > 99 || moveTwoValue > 99 || moveThreeValue > 99){
        return;
    }

    //Checking valid move value sum
    if (moveOneValue + moveTwoValue + moveThreeValue > 99){
        return;
    }




    if (player === "Player One"){
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    }
    else if (player === "Player Two"){
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }
}

function getRoundWinner(roundNumber){
    
    /*
    playerOneMoveOneType, playerOneMoveTwoType, playerOneMoveThreeType,
    playerOneMoveOneValue, playerOneMoveTwoValue, playerOneMoveThreeValue,
    playerTwoMoveOneType, playerTwoMoveTwoType, playerTwoMoveThreeType,
    playerTwoMoveOneValue, playerTwoMoveTwoValue, playerTwoMoveThreeValue
    */

    if (roundNumber !== 1 && roundNumber !== 2 && roundNumber !== 3){
        return null;
    }
    /*
    if (!playerOneMoveOneType || !playerOneMoveTwoType || !playerOneMoveThreeType ||
        !playerOneMoveOneValue || !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
        !playerTwoMoveOneType || !playerTwoMoveTwoType || !playerTwoMoveThreeType ||
        !playerTwoMoveOneValue || !playerTwoMoveTwoValue || !playerTwoMoveThreeValue){
            return null;
        }
    */
    // Round 1
    if (roundNumber === 1){
        
        // Round 1 Player One Rock
        if (playerOneMoveOneType === 'rock'){
            if (playerTwoMoveOneType === 'rock'){
                if (playerOneMoveOneValue === playerTwoMoveOneValue){
                    return "Tie";
                }
                else if (playerOneMoveOneValue > playerTwoMoveOneValue){
                    return "Player One";
                }
                else if (playerOneMoveOneValue < playerTwoMoveOneValue){
                    return "Player Two";
                }
                else {
                    return null;
                }
            }
            else if (playerTwoMoveOneType === 'paper'){
                return "Player Two";
            }
            else if (playerTwoMoveOneType === 'scissors'){
                return "Player One";
            }
            else {
                return null;
            }
        }

        // Round 1 Player One Paper
        else if (playerOneMoveOneType === 'paper'){
            if (playerTwoMoveOneType === 'paper'){
                if (playerOneMoveOneValue === playerTwoMoveOneValue){
                    return "Tie";
                }
                else if (playerOneMoveOneValue > playerTwoMoveOneValue){
                    return "Player One";
                }
                else if (playerOneMoveOneValue < playerTwoMoveOneValue){
                    return "Player Two";
                }
                else {
                    return null;
                }
            }
            else if (playerTwoMoveOneType === 'scissors'){
                return "Player Two";
            }
            else if (playerTwoMoveOneType === 'rock'){
                return "Player One";
            }
            else {
                return null;
            }
        }

        // Round 1 Player One Scissors
        else if (playerOneMoveOneType === 'scissors'){
            if (playerTwoMoveOneType === 'scissors'){
                if (playerOneMoveOneValue === playerTwoMoveOneValue){
                    return "Tie";
                }
                else if (playerOneMoveOneValue > playerTwoMoveOneValue){
                    return "Player One";
                }
                else if (playerOneMoveOneValue < playerTwoMoveOneValue){
                    return "Player Two";
                }
                else {
                    return null;
                }
            }
            else if (playerTwoMoveOneType === 'rock'){
                return "Player Two";
            }
            else if (playerTwoMoveOneType === 'paper'){
                return "Player One";
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }

    // Round 2
    else if (roundNumber === 2){
        
        // Round 2 Player One Rock
        if (playerOneMoveTwoType === 'rock'){
            if (playerTwoMoveTwoType === 'rock'){
                if (playerOneMoveTwoValue === playerTwoMoveTwoValue){
                    return "Tie";
                }
                else if (playerOneMoveTwoValue > playerTwoMoveTwoValue){
                    return "Player One";
                }
                else if (playerOneMoveTwoValue < playerTwoMoveTwoValue){
                    return "Player Two";
                }
                else {
                    return null;
                }
            }
            else if (playerTwoMoveTwoType === 'paper'){
                return "Player Two";
            }
            else if (playerTwoMoveTwoType === 'scissors'){
                return "Player One";
            }
            else {
                return null;
            }
        }

        // Round 2 Player One Paper
        else if (playerOneMoveTwoType === 'paper'){
            if (playerTwoMoveTwoType === 'paper'){
                if (playerOneMoveTwoValue === playerTwoMoveTwoValue){
                    return "Tie";
                }
                else if (playerOneMoveTwoValue > playerTwoMoveTwoValue){
                    return "Player One";
                }
                else if (playerOneMoveTwoValue < playerTwoMoveTwoValue){
                    return "Player Two";
                }
                else {
                    return null;
                }
            }
            else if (playerTwoMoveTwoType === 'scissors'){
                return "Player Two";
            }
            else if (playerTwoMoveTwoType === 'rock'){
                return "Player One";
            }
            else {
                return null;
            }
        }

        // Round 2 Player One Scissors
        else if (playerOneMoveTwoType === 'scissors'){
            if (playerTwoMoveTwoType === 'scissors'){
                if (playerOneMoveTwoValue === playerTwoMoveTwoValue){
                    return "Tie";
                }
                else if (playerOneMoveTwoValue > playerTwoMoveTwoValue){
                    return "Player One";
                }
                else if (playerOneMoveTwoValue < playerTwoMoveTwoValue){
                    return "Player Two";
                }
                else {
                    return null;
                }
            }
            else if (playerTwoMoveTwoType === 'rock'){
                return "Player Two";
            }
            else if (playerTwoMoveTwoType === 'paper'){
                return "Player One";
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }

    // Round 3
    else if (roundNumber === 3){
        
        // Round 3 Player One Rock
        if (playerOneMoveThreeType === 'rock'){
            if (playerTwoMoveThreeType === 'rock'){
                if (playerOneMoveThreeValue === playerTwoMoveThreeValue){
                    return "Tie";
                }
                else if (playerOneMoveThreeValue > playerTwoMoveThreeValue){
                    return "Player One";
                }
                else if (playerOneMoveThreeValue < playerTwoMoveThreeValue){
                    return "Player Two";
                }
                else {
                    return null;
                }
            }
            else if (playerTwoMoveThreeType === 'paper'){
                return "Player Two";
            }
            else if (playerTwoMoveThreeType === 'scissors'){
                return "Player One";
            }
            else {
                return null;
            }
        }

        // Round 3 Player One Paper
        else if (playerOneMoveThreeType === 'paper'){
            if (playerTwoMoveThreeType === 'paper'){
                if (playerOneMoveThreeValue === playerTwoMoveThreeValue){
                    return "Tie";
                }
                else if (playerOneMoveThreeValue > playerTwoMoveThreeValue){
                    return "Player One";
                }
                else if (playerOneMoveThreeValue < playerTwoMoveThreeValue){
                    return "Player Two";
                }
                else {
                    return null;
                }
            }
            else if (playerTwoMoveThreeType === 'scissors'){
                return "Player Two";
            }
            else if (playerTwoMoveThreeType === 'rock'){
                return "Player One";
            }
            else {
                return null;
            }
        }

        // Round 3 Player One Scissors
        else if (playerOneMoveThreeType === 'scissors'){
            if (playerTwoMoveThreeType === 'scissors'){
                if (playerOneMoveThreeValue === playerTwoMoveThreeValue){
                    return "Tie";
                }
                else if (playerOneMoveThreeValue > playerTwoMoveThreeValue){
                    return "Player One";
                }
                else if (playerOneMoveThreeValue < playerTwoMoveThreeValue){
                    return "Player Two";
                }
                else {
                    return null;
                }
            }
            else if (playerTwoMoveThreeType === 'rock'){
                return "Player Two";
            }
            else if (playerTwoMoveThreeType === 'paper'){
                return "Player One";
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }
    
}

function getGameWinner(){
    if (!playerOneMoveOneType || !playerOneMoveTwoType || !playerOneMoveThreeType ||
        !playerOneMoveOneValue || !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
        !playerTwoMoveOneType || !playerTwoMoveTwoType || !playerTwoMoveThreeType ||
        !playerTwoMoveOneValue || !playerTwoMoveTwoValue || !playerTwoMoveThreeValue){
            return null;
    }
    
    let playerOneRoundsWon = 0;
    let playerTwoRoundsWon = 0;

    let roundOne = getRoundWinner(1);
    let roundTwo = getRoundWinner(2);
    let roundThree = getRoundWinner(3);

    if (roundOne === 'Player One'){
        playerOneRoundsWon++;
    }
    else if (roundOne === 'Player Two'){
        playerTwoRoundsWon++;
    }
    
    if (roundTwo === 'Player One'){
        playerOneRoundsWon++;
    }
    else if (roundTwo === 'Player Two'){
        playerTwoRoundsWon++;
    }

    if (roundThree === 'Player One'){
        playerOneRoundsWon++;
    }
    else if (roundThree === 'Player Two'){
        playerTwoRoundsWon++;
    }

    if (playerOneRoundsWon > playerTwoRoundsWon){
        return "Player One";
    }
    else if (playerOneRoundsWon < playerTwoRoundsWon){
        return "Player Two";
    }
    else if (playerOneRoundsWon === playerTwoRoundsWon){
        return "Tie";
    }

    return null;
}

function setComputerMoves(){

}

