import { can } from "../../../../main"



//this function works in this way that when detect which check if monster is very near verge title
//when is not touching title its mean that is gap in map o chasm it will check depth of it and when it is more than 300 monster change direction
//in order avoid fall in down ,its prevent dead monster from nature force in game and force player to kill them by herself
export const checkIfMonsterCanGoFurther=(detect,posY,size,name=null)=>{
let distance=detect.posY-posY+size

  //detect.trigger is false when player is on ground and is not any gap on his way in very near range
    
 if(detect.trigger===false)
 {

   detect.posY=posY+size-detect.size
   
 } 
  //detect.trigger is true when detect objects dont touch title
    if(detect.trigger===true){
      
        detect.posY+=detect.speed
        let height=330
        if(name==="helperPlayer"){height=150}
        else height=330
        if(distance>height||detect.posY>can.C_H){
          
            detect.avoidFallInChasm=true
            
  
          }
          if(detect.posY>can.C_H){
            detect.posY=posY+size-detect.size
          }
        return
    }

       
}