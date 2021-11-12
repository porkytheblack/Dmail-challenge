import { set_user, UserActionTypes, UserInterface } from "../types/Index";


const initialState : UserInterface = {
    token: null,
    user: null
}

export function userReducer(state: UserInterface = initialState, action: UserActionTypes): UserInterface {
    switch(action.type){
        case "SET_TOKEN": {
            return {
                ...state,
                token: action.payload
            }
        }
        case "SET_USER": {
            return {
                ...state,
                user: action.payload
            }
        }
        case "DELETE_TOKEN" : {
            return {
                ...state,
                user: null,
                token: null
            }
        }
        case "UPDATE_TOKEN": {
            return {
                ...state,
                token: action.payload
            }
        }
        case "EDIT_USER": {
            return{
                ...state,
                user: action.payload
            }
        }
        default: {
            return state;
        }

    }
}