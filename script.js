let playerOne = "X"
let playerTwo = "O"
let currentPlayer = 1
const grid = document.getElementById('grid')
const cellElements = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restartButton')
// const winningCombinations = [
//     [0,1,2],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ]
let board = [0,0,0,0,0,0,0,0,0]

function clearGame (){
    currentPlayer = 1
    board = [0,0,0,0,0,0,0,0,0]
}

function isWinningMove (index){
    if (index === 7){
        if (board[1]===board[7] && board[4] ===board[7] ) {
            return true
        }
        if (board[6]=== board[7] && board[8]===board[7]){
            return true
        }
    }

    if (index===2){
        if(board[1]===board[2] && board[0]=== board[2]){
            return true
        } 
        if (board[5]===board[2] && board[8]===board[2]){
            return true
        }
        if (board[4]===board[2] && board[6]===board[2]){
            return true
        }
        
    } 
    return false
}

function updateUi() {

}

function alertPlayerWon(playerNumber) {
    console.log(playerNumber, "won") 
}

//Add an eventlistener when clicked on cell-add mark-loop through cells to see if available first
function addClickListeners(element, index) {
    element.addEventListener('click', () => {
        if (board[index] === 0) {
            // make the move
            board[index] = currentPlayer
            // update the ui
            updateUi()
            console.log(board)
            const isWinner = isWinningMove(index)
    
            if (isWinner===true){
                alertPlayerWon(currentPlayer)
                clearGame()
            } else {
                    // toggle the player
                if (currentPlayer===1){
                    currentPlayer=2
                } else {
                    currentPlayer=1
                }
                }    
        } else { 
            alert("choose another")

        // if not a valid move:
            // send alert to player to choose another square
        }
            
       
        placeMark(index);

      });
}
cellElements.forEach(addClickListeners)

function placeMark(index) {
    console.log(index)
}
//for ( let i = 0; i<cellElements.length; ){
    //  console.log(index); i++
// }


//for (let i = 0; i <= 9; i+++) {
 //  document.getElementById(i.toString()).addEventListener(
    //"click",
 //function()
    
