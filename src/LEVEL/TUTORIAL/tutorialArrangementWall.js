import { makeWall } from "../../Functions/makeWall"
import { solidWall } from "../../objects/WALL/solidWall/solidWall"

export const tutorialArrangementWall=()=>{
    let array=[
makeWall(solidWall,20,0,500,65,"red","horizontal")
    ]
    return array
}