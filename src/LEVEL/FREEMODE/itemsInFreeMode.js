import { can, menu } from "../../main"
import { AxeItems } from "../../objects/ITEMSonMAP/axe/axe"
import { dynamiteItems } from "../../objects/ITEMSonMAP/dynamite/dynamieItems"
import { glockItems } from "../../objects/ITEMSonMAP/glock/glockItems"
import { healthFluidItems } from "../../objects/ITEMSonMAP/healthFluid/healthFluid"
import { helperSpawnRuna } from "../../objects/ITEMSonMAP/helperRuna/helperRuna"
import { jumpFluidItems } from "../../objects/ITEMSonMAP/jumpFluid/jumpFluidItems"
import { machineGunItems } from "../../objects/ITEMSonMAP/machineGun/machineGunItems"

let array=[]
let randomItems=[AxeItems,dynamiteItems,helperSpawnRuna,machineGunItems,glockItems,healthFluidItems,jumpFluidItems]

  

export const itemsInFreeMode=()=>{
    setInterval(()=>{
        array.push(new randomItems[Math.floor(Math.random()*randomItems.length)](Math.floor(Math.random()*can.C_W),20,true))
        },7000)
return array
}