const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset");
let turnO=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",playgame);
})

function playgame(event) {
    const box = event.target;
    if (box.innerText !== "") return; 
    if(turnO==true){
        box.innerText="O";
        turn0=false;
    }
    else{
        box.innerText="X";
        turn0=true;
    }
    turnO = !turnO; 
    checkWin(box,winpatterns); 
}

function checkWin() {
    const board = Array.from(boxes).map(box => box.innerText);
    for (let pattern of winpatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            setTimeout(()=>{alert(`${board[a]} wins!`)},500);
            setTimeout(()=>{resetGame()},3000);
            return;
        }
    }
    if (board.every(cell => cell !== "")) {
        setTimeout(()=>{alert("It's a draw!")},500);
        setTimeout(()=>{resetGame()},3000);   
    }
}


function resetGame() {
    boxes.forEach(box => (box.innerText = ""));
    turnO = true; // Reset to 'O's turn
}  
resetBtn.addEventListener("click",resetGame);

