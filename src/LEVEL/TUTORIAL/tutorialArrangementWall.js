import { makeWall } from "../../Functions/makeWall"
import { player } from "../../main"
import { brickWall } from "../../objects/WALL/brickWall/brickWall"
import { plainWall } from "../../objects/WALL/plainWall/plainWall"
import { solidWall } from "../../objects/WALL/solidWall/solidWall"

export const tutorialArrangementWall=()=>{
    player.posX=200
    player.posY=300
    let array=[
makeWall(solidWall,20,0,500,65,"red","horizontal"),
makeWall(brickWall,10,800,435,65,"red","horizontal"),
makeWall(solidWall,10,800,370,65,"red","horizontal"),
makeWall(plainWall,10,800,305,65,"red","horizontal"),
player.blockToBuild
    ]
    return array
}