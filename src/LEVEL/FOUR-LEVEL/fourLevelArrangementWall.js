import { makeWall } from "../../Functions/makeWall"
import { player } from "../../main"
import { brickWall } from "../../objects/WALL/brickWall/brickWall"
import { goldWall } from "../../objects/WALL/goldWall/goldWall"
import { magmaWall } from "../../objects/WALL/magmaWall/magmaWall"
import { solidWall } from "../../objects/WALL/solidWall/solidWall"
import { woodenWall } from "../../objects/WALL/woodenWall/woodenWall"

export const fourLevelArrangementWall=()=>{
    player.posX=1444
    player.posY=355
    let array=[
makeWall(solidWall,10,0,700,65,"red","horizontal"),
makeWall(brickWall,2,520,635,65,"red","horizontal"),
makeWall(solidWall,10,650,575,65,"red","horizontal"),
makeWall(goldWall,2,650,635,65,"red","horizontal"),
makeWall(magmaWall,5,1295,635,65,"red","horizontal"),
makeWall(magmaWall,5,1295,570,65,"red","horizontal"),
makeWall(magmaWall,3,1295,505,65,"red","horizontal"),
makeWall(brickWall,2,1490,505,65,"red","horizontal"),
makeWall(magmaWall,5,1295,460,65,"red","horizontal"),
makeWall(magmaWall,5,1295,395,65,"red","horizontal"),
makeWall(brickWall,1,1295,330,65,"red","horizontal"),
makeWall(brickWall,1,1295,265,65,"red","horizontal"),
makeWall(brickWall,1,1295,200,65,"red","horizontal"),
makeWall(brickWall,1,1295,135,65,"red","horizontal"),
makeWall(solidWall,1,1295,70,65,"red","horizontal"),
makeWall(solidWall,4,1360,265,65,"red","horizontal"),
makeWall(woodenWall,2,1360,200,65,"red","horizontal"),
makeWall(woodenWall,3,65,635,65,"red","horizontal"),



makeWall(magmaWall,15,65,200,65,"red","horizontal"),
makeWall(goldWall,15,65,265,65,"red","horizontal"),
makeWall(magmaWall,15,65,330,65,"red","horizontal"),
makeWall(magmaWall,1,975,135,65,"red","horizontal"),
makeWall(magmaWall,1,975,70,65,"red","horizontal"),
makeWall(goldWall,1,975,5,65,"red","horizontal"),
makeWall(magmaWall,1,975,135,65,"red","horizontal"),
makeWall(magmaWall,1,975,70,65,"red","horizontal"),
makeWall(magmaWall,1,975,5,65,"red","horizontal"),
makeWall(magmaWall,1,975,135,65,"red","horizontal"),

makeWall(magmaWall,1,65,70,65,"red","horizontal"),
makeWall(magmaWall,1,65,5,65,"red","horizontal"),
makeWall(magmaWall,1,65,135,65,"red","horizontal"),
makeWall(magmaWall,1,65,70,65,"red","horizontal"),
makeWall(magmaWall,1,65,5,65,"red","horizontal"),

player.blockToBuild


    ]
    return array
}