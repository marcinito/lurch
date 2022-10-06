import { makeWall } from "../../Functions/makeWall"
import { player } from "../../main"
import { solidWall } from "../../objects/WALL/solidWall/solidWall"

export const freeModeArrangementWall=()=>{
    player.posX=800
    player.posY=300
    let array=[
        makeWall(solidWall,25,0,500,65,"blue","horizontal"),
        makeWall(solidWall,25,0,565,65,"blue","horizontal"),
        makeWall(solidWall,25,0,630,65,"blue","horizontal"),
        makeWall(solidWall,25,0,695,65,"blue","horizontal"),
        makeWall(solidWall,25,0,760,65,"blue","horizontal"),
        player.blockToBuild
        
    ]
    return array
}