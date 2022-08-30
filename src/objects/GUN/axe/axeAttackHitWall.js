import { goldenCoin } from "../../ITEMSonMAP/goldenCoin/goldenCoin"
import { magmaWallItems } from "../../ITEMSonMAP/magmaWall/magmaWallItems"
import { plainWallItems } from "../../ITEMSonMAP/plainWall/plainWallItems"
import { solidWallItems } from "../../ITEMSonMAP/solidWall/solidWallItems"


export const axeAttackHitWall=(player,WALL,can,itemsOnMap)=>{
  

   ////////////////////////
   let axeArray=player.axeArray
   WALL.forEach((arrayWithTitle,index,fullArrOfWall)=>{
   arrayWithTitle.forEach((title,tI,tArr)=>{
   
    if(title.isHitBy==="axe"&&title.hp<0 || title.hp===0){
        console.log("dziala")
        if(title.name==="plainWall"){
                    
            if(itemsOnMap!==undefined){
                itemsOnMap.push(new plainWallItems(title.posX,title.posY,title.size))
            }
        }
        if(title.name==="solidWall"){
            
            if(itemsOnMap!==undefined){
                itemsOnMap.push(new solidWallItems(title.posX,title.posY,title.size))
            }
        }
        if(title.name==="magmaWall"){
            console.log(itemsOnMap,"magam,")
            if(itemsOnMap!==undefined){
                itemsOnMap.push(new magmaWallItems(title.posX,title.posY,title.size))
            }
        }
        if(title.name==="goldWall"){
           
            if(itemsOnMap!==undefined){
                itemsOnMap.push(new goldenCoin(title.posX,title.posY,title.size))
            }
        }
     
     
     
        tArr.splice(tI,1)
    
}
    

       axeArray.forEach((axe,bI,bArr)=>{
        
   if(axe.posX+axe.size<title.posX || axe.posX>title.posX+title.size||
       axe.posY>title.posY+title.size || axe.posY+axe.size<title.posY){
           
       }
       else{
    
    title.hp-=axe.strenghtAttack.wall
    title.color="pink"
    title.isHitBy="axe"
      
    //    if(title.hp<1){
    //     title.hp=0
    //    }
       
       console.log(title.hp)
       
       
       
 
       }

       //IF AMMO PASSED VERGE OF MAP



   
       })
   
       
   
   
   })
   })
   
}