
import { changeLevel, itemsOnMap, menu, player } from '../../main'
import { point } from '../../objects/player/movementPlayer/movementPlayer'
import arrowDownImg from './images/arrowDown.png'
import arrowRightImg from './images/arrowRight.png'
import arrowLeftImg from './images/arrowLeft.png'
import transparentBgc from '../../objects/player/shorthandFunction/bgc.png'
import { jumpFluidItems } from '../../objects/ITEMSonMAP/jumpFluid/jumpFluidItems'
import { glockItems } from '../../objects/ITEMSonMAP/glock/glockItems'
import { greetings } from '../../Functions/MENU/greetings'
const allSlot=[...document.querySelectorAll(".slotBp")]
const mainMenu=document.querySelector(".mainMenu")
const pause=document.querySelector(".pause")
const wantTutorial=document.querySelector(".wantTutorial")
const transparent=new Image(100,100)
transparent.src=transparentBgc
const arrowDown=new Image(100,100)
arrowDown.src=arrowDownImg
const arrowRight=new Image(100,100)
arrowRight.src=arrowRightImg
const arrowLeft=new Image(100,100)
arrowLeft.src=arrowLeftImg

let stageArray=[
{text1:"Take Item From Map",xText:190,yText:330,xImage:305,yImage:361,color:"orange",img:arrowDown,fontSize:42},
{text1:"Click on number and take item to hand",xText:10,yText:682,xImage:230,yImage:691,color:"magenta",img:arrowDown,fontSize:42},
{text1:"Hit wall using space",xText:450,yText:380,xImage:640,yImage:400,color:"darkblue",img:arrowRight,fontSize:42},
{text1:"Click on number and take item to hand",xText:30,yText:682,xImage:330,yImage:691,color:"red",img:arrowDown,fontSize:42},
{text1:"Choose place where you want build new wall.", text2:"by moving mouse and build by click left button on mouse",xText:10,yText:200,xImage:22,yImage:691,color:"darkred",img:arrowRight,fontSize:36},
{text1:"Congratulation you have built you first wall",xText:100,yText:200,xImage:22,yImage:691,color:"darkorange",img:transparent,fontSize:42},
{text1:`Take "jumpFluid"`,xText:140,yText:340,xImage:150,yImage:361,color:"darkorange",img:arrowDown,fontSize:42},
{text1:`Click on number and take item to hand`,xText:10,yText:682,xImage:150,yImage:691,color:"black",img:arrowDown,fontSize:42},
{text1:`Drink fluid by click "space" on your keyboard.`,text2:` and click ↑ on your keyboard and check how hight you can jump`,xText:20,yText:200,xImage:150,yImage:361,color:"red",img:transparent,fontSize:38},
{text1:`This watch show you how much`,text2:`time you do have extra jump`,xText:600,yText:650,xImage:1370,yImage:810,color:"black",img:arrowLeft,fontSize:42},
{text1:`Here you have amount of your life`,xText:540,yText:780,xImage:1240,yImage:810,color:"black",img:arrowLeft,fontSize:42},
{text1:`Take glock from map and next take it to hand in way you have learnt`,text2:`Fire in all direction by 
using ↑  ←  →  ↓ `,xText:20,yText:150,xImage:245,yImage:360,color:"black",img:arrowDown,fontSize:35},
{text1:`Fire, fire, fire!`,xText:400,yText:150,xImage:245,yImage:360,color:"brown",img:transparent,fontSize:75},
{text1:`Congratulation you know basic skills`,xText:200,yText:120,xImage:150,yImage:361,color:"darkorange",img:transparent,fontSize:62},
{text1:`More you will learn during the game`,xText:200,yText:120,xImage:150,yImage:361,color:"darkorange",img:transparent,fontSize:62},
]

export class tutorialObject{
    constructor(posX,posY){
        this.posX=posX
        this.posY=posY
        this.stage=0
        this.sizeX=150
        this.sizeY=100
        this.effect=-1
        this.effect2=-1
        this.blok={blok1:false,blok2:false,blok3:false}
       
    }
    draw(can,player){
      

// this.sizeX+=this.effect
// this.sizeY+=this.effect2
// if(this.sizeX<140)this.effect=1
// if(this.sizeX>150)this.effect=-1
// if(this.sizeY>100)this.effect2=-1
// if(this.sizeY<95)this.effect2=1
can.ctx.fillStyle=stageArray[this.stage].color

can.ctx.font = `${stageArray[this.stage].fontSize}px serif`;

can.ctx.fillText(stageArray[this.stage].text1, stageArray[this.stage].xText, stageArray[this.stage].yText);
if(stageArray[this.stage].hasOwnProperty("text2")===true){
    can.ctx.fillText(stageArray[this.stage].text2, stageArray[this.stage].xText, stageArray[this.stage].yText+50);
}
can.ctx.strokeStyle="black"
can.ctx.strokeText(stageArray[this.stage].text1, stageArray[this.stage].xText, stageArray[this.stage].yText);
if(stageArray[this.stage].hasOwnProperty("text2")){
    can.ctx.strokeText(stageArray[this.stage].text2, stageArray[this.stage].xText, stageArray[this.stage].yText+50);
}
can.ctx.drawImage(stageArray[this.stage].img,stageArray[this.stage].xImage,stageArray[this.stage].yImage,this.sizeX,this.sizeY)




    }
    handleTutorial(){
       
   //STAGE 1
       if(player.backpack.axe.amount>0&&this.stage===0){
        this.stage=1

        //state where arrow need point
for(let i=0;i<allSlot.length;i++){
    
    if(allSlot[i].dataset.empty==="true"){
       
        i--
        stageArray[this.stage].xImage=230+(100*i)
        break
    }
}

  
       }

       //STAGE 2
      
    if(player.whatIsInHand==="axe"&&this.stage===1){
        this.stage=2
        

        window.addEventListener("keydown",(e)=>{
            if(e.keyCode===32){
                stageArray[2].text1="Again..., until you destroy wall!"
            }
        })
    }
    //STAGE 3
    if(this.stage===2&&this.blok.blok1==false){
    if(player.backpack.brickWall.amount>0||player.backpack.solidWall.amount>0){
        
        //state where arro need point
        this.blok.blok1=true
        this.stage=3
        for(let i=0;i<allSlot.length;i++){
          
            if(allSlot[i].dataset.empty==="true"){
               i--
                
                stageArray[this.stage].xImage=230+(100*i)
                break
            }
        }
       
    }}

//STAGE 4

    if(player.whatIsInHand==="brickWall"||player.whatIsInHand==="solidWall"){
       if(this.stage===3){
        this.stage=4
       }
        
      if(this.stage===4){
        stageArray[this.stage].xImage=point.x-170
        stageArray[this.stage].yImage=point.y-50
      }     
      
        //STAGE 5
        window.addEventListener("click",()=>{
            if(this.blok.blok3===false){
                this.stage=5
            }
            this.blok.blok3=true
            setTimeout(()=>{
                //STAGE 6
                while(itemsOnMap.length<1) itemsOnMap.push( new jumpFluidItems(200,400,true,"none"))
                this.stage=6
            },2000)
        },{once:true})
    
       
    }



    if(player.backpack.jumpFluid.amount>0&&this.stage===6){
        this.stage=7
        //state where arro need point
        for(let i=0;i<allSlot.length;i++){
          
            if(allSlot[i].dataset.empty==="true"){
               i--
                
                stageArray[this.stage].xImage=230+(100*i)
                break
            }
        }
    }
    if(player.whatIsInHand==="jumpFluid"&&this.stage===7){
        this.stage=8
    }
 
    if(player.extraJump===true&&this.stage===8){
        this.stage=9
        setTimeout(()=>{
            if(this.stage===9){
                this.stage=10
        setTimeout(()=>{
            itemsOnMap.push(new glockItems(300,300,true,"none",100))
        this.stage=11
        },3000)
        
            }
        },3000)
    }
    if(player.whatIsInHand==="glock"&&this.stage===11){
        this.stage=12
        
    }
    if(player.backpack.glock.ammo<90&&player.backpack.glock.ammo>10&&this.stage===12){
        this.stage=13
        setTimeout(()=>{
            this.stage=14
        },3000)
    }
if(this.stage===14&&this.blok.blok2===false){
    this.blok.blok2=true
    setTimeout(()=>{
        menu.playGame="menu"
        menu.tutorial=false
        mainMenu.style.display=`block`
        pause.style.display=`none`
        wantTutorial.style.display="none"
       changeLevel()
       greetings()
       
       
    },3000)
}

    }
}