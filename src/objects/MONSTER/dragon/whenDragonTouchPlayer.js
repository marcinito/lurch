import { handleHp } from "../../../Functions/shorthandFunction/handleHp"
import { random } from "../../../Functions/shorthandFunction/random"
import { NPC } from "../../../main"



export const whenDragonTouchPlayer=(player,dragonArray)=>{
  dragonArray.forEach((dragon,indexDragon,arr)=>{

    if(player.posX+player.size<dragon.posX || player.posX>dragon.posX+dragon.size ||
        player.posY+player.size<dragon.posY || player.posY>dragon.posY+dragon.size){
        
//No coliision

  }else{

 

  player.hp-=dragon.attack.whenTouchPlayer
  player.percentageHp-=handleHp(dragon.attack.whenTouchPlayer,player)

  
  }

//when dragon touch npc
NPC.forEach((npc,i,arr)=>{
  if(npc.posX+npc.size<dragon.posX || npc.posX>dragon.posX+dragon.size ||
    npc.posY+npc.size<dragon.posY || npc.posY>dragon.posY+dragon.size){
    
  //No coliision
  
  }else{
  
  
  
  npc.hp-=dragon.attack.whenTouchPlayer
  npc.percentageHp-=handleHp(dragon.attack.whenTouchPlayer,npc)
  
  
  }
})
  }
)

}