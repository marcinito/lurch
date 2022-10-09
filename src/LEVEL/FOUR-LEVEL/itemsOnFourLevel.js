import { AxeItems } from "../../objects/ITEMSonMAP/axe/axe"
import { dynamiteItems } from "../../objects/ITEMSonMAP/dynamite/dynamieItems"
import { jumpFluidItems } from "../../objects/ITEMSonMAP/jumpFluid/jumpFluidItems"

export const itemsOnFourLevel=()=>{
    let array=[
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new AxeItems(1500,355,true),
        new dynamiteItems(1550,355,true),
        new jumpFluidItems(1550,355,true)
    ]
    return array
}