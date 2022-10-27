import { firstLevelArrangementWall } from "../../LEVEL/FIRST LEVEL/firstLevelArrangementWall"
import { itemsOnFirstLevel } from "../../LEVEL/FIRST LEVEL/itemsOnFirstLevel"
import { monsterOnFirstLevel } from "../../LEVEL/FIRST LEVEL/monsterOnFirstLevel"
import { tutorialArrangementWall } from "../../LEVEL/TUTORIAL/tutorialArrangementWall"
import { can, itemsOnMap, MONSTER, player, turnTutorial, WALL } from "../../main"
import { greetings } from "./greetings"
import { items } from "./items"

const startGame=document.querySelector(".startGame")
const mainMenu=document.querySelector(".mainMenu")
const pause=document.querySelector(".pause")
const windowAlert=document.querySelector(".windowAlert")
const menuEq=document.querySelector(".menuEq")
//all element below concern small nav
const smallTab=[...document.querySelectorAll(".tab")]
const itemsTable=document.querySelector(".items")
const story=document.querySelector(".story")
const instruction=document.querySelector(".instruction")
const logoGame=document.querySelector(".logoGame")

//tutorial
const wantTutorial=document.querySelector(".wantTutorial")
const yes=document.querySelector(".yes")
const no=document.querySelector(".no")

export const handleButton=(menu)=>{
//tutorial
    startGame.addEventListener("click",()=>{


if(menu.click===0){
    wantTutorial.style.display=`block`
    menu.click+=1
    console.log(menu.click)
    return
}
if(menu.click===1){
   
       
         menu.playGame="game"
         mainMenu.style.display=`none`
         pause.style.display=`block`
         menuEq.style.display=`block`
         can.canvas.style.display=`block`
         menu.tutorial=false
     
      
     
     
}

     
        
     
    })
    no.addEventListener("click",(e)=>{
     
        menu.playGame="game"
        mainMenu.style.display=`none`
     
     
        pause.style.display=`block`
        menuEq.style.display=`block`
        can.canvas.style.display=`block`
        
       
       
    })
    yes.addEventListener("click",(e)=>{
        menu.playGame="game"
        mainMenu.style.display=`none`
    
        pause.style.display=`block`
        menu.tutorial=true
        menuEq.style.display=`block`
        can.canvas.style.display=`block`
        
      turnTutorial()
    },{once:true})
    //******* */
    pause.addEventListener("click",()=>{
   
        menu.playGame="menu"
        mainMenu.style.display=`block`
        startGame.textContent="Return"
      
   
        menuEq.style.display=`none`
        can.canvas.style.display=`none`
        pause.style.display=`none`
        wantTutorial.style.display="none"

 
        greetings()
        
    })


//
smallTab.forEach((tab,i,arr)=>{
  
    tab.addEventListener("click",()=>{
    smallTab.forEach((el)=>{
        el.style.backgroundColor="gray"
        el.style.borderStyle="none"
        logoGame.style.transform=`scale(0)`
    })
     
        if(tab.textContent==="items"){
            tab.style.backgroundColor="red"
            itemsTable.style.display="block"
            instruction.style.display=`none`
            story.style.display=`none`
            

        }
        else if(tab.textContent==="story"){
            tab.style.backgroundColor="red"
            story.style.display=`block`
            itemsTable.style.display=`none`
            instruction.style.display=`none`
        }
        else if(tab.textContent==="instruction"){
            tab.style.backgroundColor="red"
            story.style.display=`none`
            itemsTable.style.display=`none`
            instruction.style.display=`block`
           
        }
    })
})

}