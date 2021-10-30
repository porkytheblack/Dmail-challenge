import { LayoutActionTypes, LayoutInterface } from "../types/Index";

const initialState : LayoutInterface = {
    drawer_out: false,
    drawer_in: true,
    scroll_up: true,
    scroll_down: false,
    searching: false
}

export function layoutReducer(state: LayoutInterface = initialState, action: LayoutActionTypes): LayoutInterface {
    switch(action.type){
        case "DRAWER_IN": {
            return {
                ...state,
                drawer_in: action.payload
            }
        }
        case "DRAWER_OUT" : {
            return {
                ...state,
                drawer_in: action.payload
            }
        }
        case "SCROLL_UP" : {
            return {
                ...state,
                scroll_up: action.payload
            }
        }
        case "SCROLL_DOWN" : {
            return {
                ...state,
                scroll_down: action.payload
            }
        }
        case "SEARCHING" : {
            return {
                ...state,
                searching: action.payload
            }
        }
        default: {
            return state;
        }

    }
}