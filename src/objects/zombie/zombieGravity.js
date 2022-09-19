import { detecJumpCreature } from "../../Functions/helpFunction/detectJumpCreature"
import { detectJumpCreature2 } from "../../Functions/helpFunction/detectJumpCreature2"
import { random } from "../../Functions/helpFunction/random"
import { player } from "../../main"
import { zombieTouchAnotherZombie } from "./zombieTouchAnotherZombie"
let score=0
let nowaTablica=[]
export const zombieGravity=(WALL,zombieArr,can)=>{
//GRAVITY ZOMBIE
zombieArr.forEach((zombie,i,arr)=>{
    zombie.posY+=zombie.strenghtGravity
    zombie.speed=3
    zombie.doFall=true
    zombie.touchWall=false
    zombie.detect.trigger=true

})


WALL.forEach((particularArray,index,WALLarr)=>{
  


particularArray.forEach((title,indexTitle,arrTitle)=>{

    

    zombieArr.forEach((zombie,indexZombie,zombieArray)=>{
        detecJumpCreature(zombie,title)
    

player.checkPositionLowestTileOnMap=false


   
        if(title.posX>zombie.posX+zombie.size || title.posX+title.size<zombie.posX||
            title.posY>zombie.posY+zombie.size||title.posY+title.size<zombie.posY){
                //no collision
            }
         
            else{
                //ZOMBIE WALK LEFT
                if(title.direction==="horizontal"){
                    //ZOMBIE STAND ON TOP HORIZONTAL BLOCK
                    if(zombie.posY+zombie.size>title.posY-1&&title.posY>zombie.posY+zombie.size/2){
                        // zombie.posY-=zombie.strenghtGravity
                        let deepCollision=zombie.posY+zombie.size-title.posY
                        zombie.posY-=deepCollision
                        zombie.doFall=false
                       zombie.speed=zombie.naturalSpeed+2
                       zombie.stopJump=false
                    
                     
                       
                    
                    }
                  
                  
               
                    //LEFT MOVE ON HORIZONTAL
                    if(zombie.posX<title.posX+title.size&&zombie.posX>title.posX+title.size/2&&
                    zombie.posY+zombie.size>title.posY+5){
                        let deepCollision=title.posX+title.size-zombie.posX
                        zombie.posX+=deepCollision+3
                     
        detectJumpCreature2(zombie,"right")
                        
                    }
                    //RIGHT MOVE
                    if(zombie.posX+zombie.size>title.posX&&zombie.posX+zombie.size<title.posX+title.size/2&&
                    zombie.posY+zombie.size>title.posY+5){
                        let deepCollision=zombie.posX+zombie.size-title.posX
                        zombie.posX-=deepCollision
                       detectJumpCreature2(zombie,"left")
                        
                    
                      
                    }
                    //jump
                    if(zombie.posY<title.posY+title.size+3&&zombie.posY>title.posY+title.size/2){
                        zombie.posY=title.posY+title.size+1
                        title.color="black"

                        zombie.stopJump=true
                      
                        title.color="red"
                      }
                    
                }

               if(title.direction==="vertical"){
                if(zombie.posY+zombie.size>title.posY-1&&title.posY>zombie.posY+zombie.size/2){
                    let deepCollision=zombie.posY+zombie.size-title.posY
                    zombie.posY-=deepCollision
                    zombie.doFall=false
                  
                  
                }
                if(zombie.posX<title.posX+title.size&&zombie.posX>title.posX+title.size/2&&zombie.directionMove==="left"
                &&zombie.posY+zombie.size>title.posY){
                //LEFT
                    let deepCollision=title.posX+title.size-zombie.posX
                    zombie.posX+=deepCollision
                    zombie.directionMove="right"
                    
                   

                }
                // RIGHT
                if(zombie.posX+zombie.size>title.posX&&zombie.posX+zombie.size<title.posX+title.size/2&&
                zombie.directionMove==="right"&&zombie.posY+zombie.size>title.posY){
                    let deepCollision=zombie.posX+zombie.size-title.posX
                    zombie.posX-=deepCollision
                    zombie.directionMove="left"
                    
                   
                }
               }
                
            }

            if(zombie.posX<0){
                zombie.directionMove="right"
            }
            if(zombie.posX+zombie.size>can.C_W){
                zombie.directionMove="left"
            }
           

    })

})


})
zombieTouchAnotherZombie(zombieArr)

}