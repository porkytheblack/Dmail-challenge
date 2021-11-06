import { ActionCreator } from "redux";
import { drawer_in, drawer_out, LayoutActionTypes, scroll_down, scroll_up, searching, switch_screen, top_press } from "../types/Index";

const action_scroll_up: ActionCreator<LayoutActionTypes> = (b: boolean)=>{
    return {
        type: scroll_up,
        payload: b
    }
}

const action_scroll_down: ActionCreator<LayoutActionTypes> = (b: boolean) =>{
    return{
        type: scroll_down,
        payload: b
    }
}

const action_drawer_out: ActionCreator<LayoutActionTypes> = (b: boolean) =>{
    return{
        type: drawer_out,
        payload: b
    }
}

const action_drawer_in: ActionCreator<LayoutActionTypes> = (b: boolean) =>{
    return{
        type: drawer_in,
        payload: b
    }
}

const toggle_search: ActionCreator<LayoutActionTypes> = (b: boolean) =>{
    return {
        type: searching,
        payload: b
    }
}
const toggle_press: ActionCreator<LayoutActionTypes> = (b: boolean) =>{
    return{
        type: top_press,
        payload: b
    }
}
const toggle_screen: ActionCreator<LayoutActionTypes> = (b: string) =>{
    return{
        type: switch_screen,
        payload: b
    }
}

export {toggle_search, action_drawer_in, toggle_screen, action_drawer_out, action_scroll_up, action_scroll_down, toggle_press}