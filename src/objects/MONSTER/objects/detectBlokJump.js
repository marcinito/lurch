import { player } from "../../../main"

export class detectBlokJump{
    constructor(onPlayer=false){
        this.posX=0
        this.posY=0
        this.sizeX=20
        this.sizeY=1
        this.canJump=true
        this.color="transparent"
        this.timer=0
        this.onPlayer=onPlayer
        this.blok=false
    }
    draw(can){
        can.ctx.fillStyle=this.color
        can.ctx.fillRect(this.posX,this.posY,this.sizeX,this.sizeY)

    }
    canMonsterJump(title){
this.canJump=true
this.timer=0
this.blok=false
        if(this.posX+this.sizeX<title.posX || this.posX>title.posX+title.size ||
            this.posY+this.sizeY<title.posY || this.posY>title.posY+title.size){
   
            }
            else{
                this.canJump=false
                this.blok=true
                if(this.onPlayer===false){
                    title.hp-=1
                    title.isHitBy="glock"


                }
                
                

            }
         

    }
    jumpJump(){
        window.addEventListener("keyup",(e)=>{
            if(e.keyCode===38){
                for(let i=0;i<1;i++){
                    if(this.canJump===true){
                        player.posY-=1
                    }
                   
                }
            }
        })
    }
}