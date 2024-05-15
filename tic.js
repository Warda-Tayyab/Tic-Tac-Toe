let boxes=document.querySelectorAll(".box");
let restbtn=document.querySelector("#reset");
let gamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msges=document.querySelector("#msg");

let turno=true;//player o
const winptrns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];
const restGame = () => {
    turno = true;
    enableBoxes();
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false; // Enable all boxes
    }
    msgcontainer.classList.add("hide"); // Hide the message container
}

boxes.forEach((box)=>{
box.addEventListener("click",()=>{

    console.log("box was clicked");
    if(turno==true) {
        box.innerText="O";
        turno=false;
    }
  else{
    box.innerText="X";
    turno=true;
  }
  box.disabled=true;
    checkWinner();
});
});
const disableBoxes=()=>
{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>
{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner) => {
msges.innerText="Congratulations,Winner is   "+ winner;
msgcontainer.classList.remove("hide");
disableBoxes();
}
const checkWinner=()=>{
    for(let pattern of winptrns)
    {
       // console.log(pattern[0],pattern[1],pattern[2]);
       // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
   
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    if(pos1val !="" && pos2val!="" && pos3val!="")
    {
        if(pos1val===pos2val&&pos2val===pos3val){
            console.log("winner"+pos1val);
        
            showWinner(pos1val);
        }
    }
}
};

gamebtn.addEventListener("click",restGame);
restbtn.addEventListener("click",restGame);