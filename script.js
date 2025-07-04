const winValues=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let pos1='';
let pos2='';
let pos3='';
var turn0=true;
let boxes=document.querySelectorAll(".box");
let resbtn=document.querySelector(".btn");
let newGame=document.querySelector(".newGame")
let msg=document.querySelector("#para");
let msgContainer=document.querySelector(".msgContainer");

//resetGame
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide")

}

//show winner
const showWinner= (pos1)=>{
    msg.innerText=" Congratulations you won "+pos1;
    msgContainer.classList.remove("hide");
    disableboxe();
};
 // disable boxes
 const disableboxe=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
 }
 // enable boxes
 const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";

    }
 }

//boxes event
boxes.forEach((box)=>{
    box.addEventListener('click',()=>
    {
        if(turn0){
            box.textContent="O";
            turn0=false
        }else{
            box.textContent="X"
            turn0=true;     
        }
        box.disabled=true;
        checkWinner();
    })
})
// checking winner
var checkWinner= ()=>{
    for(let pattern of winValues){
        pos1=boxes[pattern[0]].innerText;
        pos2=boxes[pattern[1]].innerText;
        pos3=boxes[pattern[2]].innerText;

    if(pos1 !="" && pos2 !="" && pos3 !="")
    {
        if(pos1==pos2 && pos2==pos3)
        {
            console.log("won");
            showWinner(pos1);
        }
    }
}
};


resbtn.addEventListener('click',resetGame);
newGame.addEventListener('click',resetGame);
