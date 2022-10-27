const letter=[...document.querySelectorAll(".letter")]
let text="PlaYaGaiN"
let index=0
let flag=true
export const gameOver=()=>{
   if(flag===true){
    flag=false
    setTimeout(()=>{
        letter[index].textContent=text[index]
        index++
           },400*index)
           setTimeout(()=>{
            letter[index].textContent=text[index]
            index++
               },400*index)
               setTimeout(()=>{
                letter[index].textContent=text[index]
                index++
                   },400*index)
                   setTimeout(()=>{
                    letter[index].textContent=text[index]
                    index++
                       },400*index)
                       setTimeout(()=>{
                        letter[index].textContent=text[index]
                        index++
                           },400*index)
                           setTimeout(()=>{
                            letter[index].textContent=text[index]
                            index++
                               },400*index)
                               setTimeout(()=>{
                                letter[index].textContent=text[index]
                                index++
                                   },400*index)
                                
   }

}