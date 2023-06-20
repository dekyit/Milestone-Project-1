const playerOne = {
    name:"Player 1",
    imageSrc: 'assets/letterO.png'
};

const playerTwo = {
    name: "Player 2",
    imageSrc: 'assets/letterX.png'
};

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


 //restartButton.document.addClickListeners('click', () => {
    //img.remove();  })

  function clearGame() {
    currentPlayer = 1;
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];


    //removing images
    const imgElements = document.querySelectorAll('img');
    // [img1, img2, img3]
    for (let i = 0 ; i < imgElements.length ; i++ ){
        const img = imgElements[i]
        img.remove()
    }
  }  

function isWinningMove(index){

    if (index === 0){
        if (board[3]===board[0] && board[6]===board[0]){
            return true
        }
        if (board[1]===board[0] && board[2]===board[0]){
            return true
        }
        if (board[4]===board[0] && board[8]===board[0]){
            return true
        }
    }

    if (index === 1){
        if (board[0]===board[1] && board[2]===board[1] ){
            return true
        }
        if (board[4]=== board[1] && board[7]=== board [1]){
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

    if (index === 3){
        if (board[0]===board[3] && board[6]===board[3]){
            return true
        }
        if (board[4]===board[3] && board[5]===board[3]){
            return true
        }
    }

    if (index === 4){
        if (board[1]===board[4] && board[7]===board[4]){
            return true
        }
        if (board[3]===board[4]&& board[5]===board[4]){
            return true
        }
    }

    if (index === 5){
        if (board[2]===board[5]&& board[8]===board[5]){
            return true
        }
        if (board[3]===board[5] && board[4]===board[5]){
            return true
        }
    }
    
    if (index === 6){
        if (board[0]===board[6]&& board[3]===board[6]){
            return true
        }
        if (board[7]===board[6]&& board[8]===board[6]){
            return true
        }
        if (board[4]===board[6] && board[2]===board[6]){
            return true
        }
    }

    if (index === 7){
        if (board[1]===board[7] && board[4] ===board[7]){
            return true
        }
        if (board[6]=== board[7] && board[8]===board[7]){
            return true
        }
    } 

    if (index === 8){
        if (board[6]===board[8] && board[7]===board[8]){
            return true
        }
        if (board[2]===board[8] && board[5]===[8]){
            return true
        }
        if (board[0]===board[8] && board[4]===board[8]){
            return true
        }
    }
    return false
}

function updateUI(index){
    const currentPlayerObj = currentPlayer === 1 ? playerOne : playerTwo;
    const img = document.createElement('img');
    img.src = currentPlayerObj.imageSrc;
    const cell = document.getElementById(index)
    cell.appendChild(img)
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
            updateUI(index)
            console.log(board)
            const isWinner = isWinningMove(index)
    
            if (isWinner){
                alertPlayerWon(currentPlayer)
               // clearGame()
            } else {
                    // toggle the player
                if (currentPlayer===1){
                    currentPlayer=2
                } else {
                    currentPlayer=1
                }
                }    
        } else { 
            alert("Pick another box")

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
    

