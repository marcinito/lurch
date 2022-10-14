const letter=[...document.querySelectorAll(".letter")]
const menuEq=document.querySelector(".menuEq")
const gameOvers=document.querySelector(".gameOver")
let text="PlaYaGaiN"
let gauge=0
const pause=document.querySelector(".pause")
export const gameOver=()=>{
    gauge++
    if(gauge>200){
        letter[0].textContent="p"
    }
    if(gauge>240){
        letter[1].textContent="L"
    }
    if(gauge>280){
        letter[2].textContent="a"
    }
    if(gauge>320){
        letter[3].textContent="Y"
    }
    if(gauge>360){
        letter[4].textContent="a"
    }
    if(gauge>400){
        letter[5].textContent="G"
    }
    if(gauge>440){
        letter[6].textContent="a"
    }
    if(gauge>480){
        letter[7].textContent="I"
    }
    if(gauge>520){
        letter[8].textContent="n"
    }
  
    pause.style.opacity=0
    menuEq.style.opacity=0
    gameOvers.style.display="block"

 
    setTimeout(()=>{
        window.location.reload()
    },9000)
}