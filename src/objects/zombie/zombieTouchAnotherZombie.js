let counter=0
setInterval(()=>{
    if(counter===240){
        counter=0
    }
counter+=1
},25)
export const zombieTouchAnotherZombie=(zA)=>{
    
zA.forEach((el,i,arr)=>{
    if(counter%100===0){
      if(i<arr.length-1){
        if(el.posX>arr[i+1].posX+arr[i+1].size || el.posX+el.size<arr[i+1].posX||
            el.posY>arr[i+1].posY+arr[i+1].size||el.posY+el.size<arr[i+1].posY){
                //no collision
            }
            else{
                if(el.directionMove==="left"){el.directionMove="right"}
                if(el.directionMove==="right"){el.directionMove="left"}
            }
      }
    }

})

}