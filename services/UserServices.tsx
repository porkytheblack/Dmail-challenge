import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Document, Types } from "mongoose";
import { useDispatch } from "react-redux";

interface contact extends Types.Subdocument {
    user_name?: string;
    first_name?: string;
}
interface asset {
    url: string;
    name: string;
}
interface received_emails extends Types.Subdocument {
    email_uid: Types.ObjectId,
    sender: string,
    date: Date
}

interface sent_emails extends Types.Subdocument {
    email_uid: Types.ObjectId,
    receivers: string[],
    starred: boolean,
    archived: boolean,
    read: boolean,
    date: Date
}

interface user extends Document {
    user_name: string;
    first_name: string;
    last_name: string;
    profile_pic?: string;
    password: string;
    contacts?: Types.DocumentArray<contact>;
    sent?: Types.DocumentArray<sent_emails>;
    received_emails?: Types.DocumentArray<received_emails>
    mobile_number?: number;
}


export const create_user = async (User: any): Promise<any>  => {
    const options: AxiosRequestConfig = {
        url: "/user",
        baseURL: "https://8080-scarlet-mackerel-4kxbwbhd.ws-eu18.gitpod.io",
        method: "post",
        data: User,
    }
    axios(options).then((res)=>{
        if(res.status == 200){
            return res.data
        }else{
            return res.config
        }
    })
}

export const generate_new_token = async(User: any): Promise<any> =>{
    const options: AxiosRequestConfig = {
        url: "/token",
        baseURL: "https://8080-scarlet-mackerel-4kxbwbhd.ws-eu18.gitpod.io",
        method: "post",
        data: User
    }
    return axios(options).then((res)=>{
        return res
    }).catch((e)=>{
        return e
    })
}
