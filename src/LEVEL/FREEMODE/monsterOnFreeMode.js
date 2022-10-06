import { createMonster } from "../../Functions/createMonster"

import { can, menu } from "../../main"
import { Dragon } from "../../objects/MONSTER/dragon/dragon"
import { Ghost } from "../../objects/MONSTER/ghost/ghost"
import { Sheep } from "../../objects/MONSTER/sheep/sheep"
import { Soldier } from "../../objects/MONSTER/soldier/soldier"
import { Zombie } from "../../objects/MONSTER/zombie/zombie"

let array
let randomMonster=[Soldier,Zombie,Dragon,Ghost,Sheep]
let timer=8000
let counter=0
let flag1=false
let flag2=false
let flag3=false

export const monsterOnFreeMode=()=>{
    setInterval(()=>{
        counter++
        if(counter>5&&flag1===false){
            timer=6000
            flag1=true
        }
        if(counter>10&&flag2===false){
            timer=4000
            flag2=true
        }
        if(counter>20&&flag3===false){
            timer=2000
            flag3=true
        }
        array.push(createMonster(randomMonster[Math.floor(Math.random()*randomMonster.length)],1,[{x:Math.floor(Math.random()*can.C_W),y:100}]))
        },timer)
     array=[

    ]
    return array
}