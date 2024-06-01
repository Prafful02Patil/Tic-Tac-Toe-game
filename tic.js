let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno = true;

const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno===true){
            box.innerHTML = "O";
            turno = false;
            
        }
        else{
            box.innerHTML = "X";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    })
})

const resetgame=()=>{
  turno=true;
  enabledboxes();
  msgcontainer.classList.add("hide");

}

const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}



const showwinner=(winner)=>{
    msg.innerText=`Congratulation winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
   

}
const checkwinner=()=>{
    for(let pattern of winpattern){
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        let posi1val=boxes[pattern[0]].innerText;
        let posi2val=boxes[pattern[1]].innerText;
        let posi3val=boxes[pattern[2]].innerText;

        if(posi1val!="" && posi2val!="" && posi3val!=""){
            if(posi1val===posi2val && posi2val===posi3val){
                console.log("winner",posi1val);
                
               showwinner(posi1val);
            }
        }
    }
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);