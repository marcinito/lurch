import { can, MONSTER, NPC, player } from "../../../main"
import { mouseDetectorMonster } from "./movementPlayer"

export const canIPutBlockInThisPlace=(detect)=>{
    
detect.color="black"
player.canBuild=true
MONSTER.forEach((particular)=>{
    particular.forEach((monster,index,arr)=>{

      if(detect.posX+detect.size<monster.posX || detect.posX>monster.posX+monster.size ||
        detect.posY+detect.size<monster.posY || detect.posY>monster.posY+monster.size){

        }else{
         
          detect.color="red"
          player.canBuild=false
         
        }
       

    })
})
//player
if(detect.posX+detect.size<player.posX || detect.posX>player.posX+player.size ||
  detect.posY+detect.size<player.posY || detect.posY>player.posY+player.size){

  }else{
    detect.color="red"
    player.canBuild=false
    
  }
  //npc
  NPC.forEach((npc,i,arr)=>{
    if(detect.posX+detect.size<npc.posX || detect.posX>npc.posX+npc.size ||
      detect.posY+detect.size<npc.posY || detect.posY>npc.posY+npc.size){
    
      }else{
        detect.color="red"
        player.canBuild=false
        
      }
  })


}