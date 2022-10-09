import glockBullet from '../../MONSTER/soldier/gunBullet.png'
const glockBulletImage=new Image(100,100)
glockBulletImage.src=glockBullet
export class Glock{
    constructor(posX,posY,directionAttack,size){
        this.posX=posX
        this.posY=posY
        this.size=10
        this.sizePlayer=size
        this.color="black"
        this.name="glock"
        this.strenghtAttack=29.7
        this.directionAttack=directionAttack
        this.image=glockBulletImage
        this.speed=5
    }
    draw(can){
       
    can.ctx.fillStyle=this.color
    can.ctx.drawImage(this.image,this.posX,this.posY+this.sizePlayer/3,this.size,this.size)
      if(this.directionAttack==="left"){
        this.posX-=this.speed
      }
      if(this.directionAttack==="right"){
        this.posX+=this.speed
      }
      if(this.directionAttack==="up"){
        this.posY-=this.speed
      }
      if(this.directionAttack==="down"){
        this.posY+=this.speed
      }
          
            
        

    }

}