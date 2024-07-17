let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let newGame = document.querySelector("#new-btn");
let o=true;



const winpattern = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [2,4,6],[0,4,8]];



const resetGame =()=>{
    o=true;
    enableButton();
    boxes.innerText="";
    msgContainer.classList.add("hide");
    reset.classList.remove("hide");
    

};





const disableButton = ()=>{
    for (let box of boxes) {
        box.disabled= true;
        
    }
};
const enableButton = ()=>{
    for (let box of boxes) {
        box.disabled= false;
        box.innerText="";
  
        
    }
};



const showWinner=(winner)=>{

    if(winner=="O"){
        console.log("p1");
        msg.innerText=`Congratulations! Winner is PLAYER 1 [${winner}]`;
    }
else{
    console.log("p2");
    msg.innerText=`Congratulations! Winner is PLAYER 2 [${winner}]`;
}
   
    msgContainer.classList.remove("hide");
    disableButton();
    reset.classList.add("hide");
   

};



const checkWin = ()=>{

    for (let pattern of winpattern) {

      
           pos1= boxes[pattern[0]].innerText,
           pos2= boxes[pattern[1]].innerText,
            pos3 = boxes[pattern[2]].innerText
        
        if(pos1!="" && pos2!= "" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){

                console.log("winner", pos1);

                showWinner(pos1);

            }
        }
        
    }
};




boxes.forEach((box)=>{

    box.addEventListener("click", function(){
        console.log("box was click");
        if(o== true){
            box.classList.remove("x");
            box.classList.add("o");
           
            box.innerText="O";
            o=false;

        }
        else{
            box.classList.remove("o");
            box.classList.add("x");
            
            box.innerText="X";
             o=true;
            
        }


        box.disabled=true;
        
        checkWin();
    });


});

boxes.forEach((box)=>{
    if(box.innerText=="O"){
        box.classList.add("o");
        
    }
}
)



reset.addEventListener("click", resetGame);
newGame.addEventListener("click",resetGame);