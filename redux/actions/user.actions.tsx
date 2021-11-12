import { AnyTypeAnnotation } from "@babel/types";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { ActionCreator } from "redux";
import { create_user } from "../../services/UserServices";
import {  set_token, set_user,  tdelete_token,  tedit_user,  tupdate_token, UserActionTypes } from "../types/Index";

interface error_message {
    status: number;
    details: any;
}

const dispatch = useDispatch()

export const action_create_user: ActionCreator<UserActionTypes> = (b: any) =>{
    return{
        type: set_user,
        payload: b
    }
}
export const update_user: ActionCreator<UserActionTypes> = (b: any) =>{
    return{
        type: tedit_user,
        payload: b
    }
}

export const action_generate_token: ActionCreator<UserActionTypes> = (b: any)=>{
    return {
        type: set_token,
        payload: b
    }
}

export const update_token: ActionCreator<UserActionTypes> = (b: any)=>{
    return {
        type: tupdate_token,
        payload: b
    }
}

export const delete_token: ActionCreator<UserActionTypes> = ()=>{
    return {
        type: tdelete_token,
        payload: null
    }
}

export const user_create = (user: any): void | error_message=>{
    create_user(user).then((res: AxiosResponse)=>{
        if(res.status == 200){
            dispatch(create_user({
                ...res.data
            }))
        }else{
            return {
                status: res.status,
                details: res.data
            }
        }
    })
}




