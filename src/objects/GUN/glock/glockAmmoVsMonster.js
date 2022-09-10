
import { handleHp } from "../../../Functions/shorthandFunction/handleHp"
import { countNumberMonsterOnLeve } from "../../../LEVEL/CHANGE-LEVEl/countNumberMonsterOnLevel"
import { itemsOnMap } from "../../../main"
import { monsterDropItem } from "../../MONSTER/FUNCTION/monsterDropItem"

export const glockAmmoVsMonster=(player,arrayMonster)=>{
    
    arrayMonster.forEach((monster,indexMonster,arrayMONSTER)=>{

        player.bulletGlockArray.forEach((bullet,indexBullet,arrayBullet)=>{
            if(bullet.posX+bullet.size<monster.posX || bullet.posX>monster.posX+monster.size||
                bullet.posY>monster.posY+monster.size || bullet.posY+bullet.size<monster.posY){
                    //NO COLLISION
                }
                else{
                    
                    monster.hp-=bullet.strenghtAttack
                    monster.percentageHp-=handleHp(bullet.strenghtAttack,monster)
                    arrayBullet.splice(indexBullet,1)
                    if(monster.hp<0){
                        monsterDropItem(monster,itemsOnMap)
                        arrayMONSTER.splice(indexMonster,1)
                      countNumberMonsterOnLeve()
                    }
                }



        })
        

    })
}