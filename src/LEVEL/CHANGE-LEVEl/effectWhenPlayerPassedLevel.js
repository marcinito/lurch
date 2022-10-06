import { menu } from "../../main"

export const effectWhenPlayerPassedLevel=(transitionArray,can)=>{
    let text="You passed level"
 
    if(menu.level>5){
        text="Congratulation you clean map , you get extra hp!"
    }
    if(transitionArray.length>0){
        transitionArray.forEach((el)=>{
            el.draw(can)
            let gradient=can.ctx.createLinearGradient(0,30,1050,200)
            gradient.addColorStop(0,"red")
            gradient.addColorStop(1,"magenta")
            gradient.addColorStop(0.5,"green")
            gradient.addColorStop(0.3,"yellow")
            can.ctx.fillStyle=gradient
            can.ctx.font = "100px Impact";
            can.ctx.fillText(text,can.C_H/2,300)
            can.ctx.fillStyle="black"
            can.ctx.strokeText(text,can.C_H/2,300)
        })
    }
}