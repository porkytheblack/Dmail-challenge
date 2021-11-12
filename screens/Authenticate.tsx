import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { useNavigation } from '@react-navigation/core'
import AppLoading from 'expo-app-loading'
import React, { ReactNode, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { flex_col_center_top, flex_row_between, generate_padding } from '../globalStyles'
import { action_create_user, action_generate_token } from '../redux'
import { create_user, generate_new_token } from '../services/UserServices'


const Authenticate = ({route, navigation}) => {
    const dispatch = useDispatch()
    const [user_name, set_user_name] = useState("")
    const [first_name, set_first_name] = useState("")
    const [last_name, set_last_name] = useState("")
    const [password, set_password] = useState("")
    const [mobile_number, set_mobile_number] = useState(null)


    const [fontsloaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold
    })
    const nav =useNavigation()
    const go_to_mail = () =>{
        nav.navigate("Root")
    }

    const signup = ()=>{
        create_user({
            user_name, first_name, last_name, password, mobile_number
        }).then((res)=>{
            dispatch(action_create_user(res.data))
        }).then(()=>{
            go_to_mail()
        }).catch((e)=>{
            dispatch(action_create_user(null))
        })
    }
    const signin = () =>{
        generate_new_token({
            user_name,
            password
        }).then((res)=>{
            dispatch(action_generate_token(res.data))
            go_to_mail() 
        }).catch((e)=>{
            dispatch(action_generate_token(null))
        })
    }
    

    const toggle_input = (active: boolean ,  info: string, type: string): ReactNode =>{
        if(active){
            return(
                <TextInput mode="outlined" label={type} placeholder={info}  />
            )
        }else{
            return(
                <TextInput disabled={true} mode="outlined" autoFocus={true} placeholder={info} />
            )
        }
        
    }
    const signup_screen = ():ReactNode =>{
        return(
            <View style={{
                width: "100%",
                height: "100%",
                ...flex_col_center_top,
                ...generate_padding(20, 20, 20, 20)
            }} >
                <Text style={styles.logo_text} >Dmail.</Text>
                <View style={{width: "100%", marginBottom: 20, ...flex_row_between}} >
                    <TextInput style={{width: "45%"}} value={first_name} onChangeText={(e)=>{
                        set_first_name(e)
                    }} mode="outlined" label="firstname" placeholder="firstname"  />
                    <TextInput style={{width: "45%"}} value={last_name} onChangeText={(e)=>{
                        set_last_name(e)
                    }} mode="outlined" label="lastname" placeholder="lastname"  />
                </View>
                <View style={{width: "100%", marginBottom: 20}} >
                    <TextInput value={user_name} onChangeText={(e)=>{
                        set_user_name(e)
                    }} mode="outlined" label="username" placeholder="username"  />
                </View>
                <View style={{width: "100%", marginBottom: 20}} >
                    <TextInput value={mobile_number} onChangeText={(e)=>{
                        set_mobile_number(e)
                    }} mode="outlined" label="mobile number" placeholder="mobile number"  />
                </View>
                <View style={{width: "100%"}} >
                    <TextInput value={password} onChangeText={(e)=>{
                        set_password(e)
                    }} mode="outlined" label="password" placeholder="password"  />
                </View>
                <View style={{marginTop: 40}}>
                <Button onPress={signup} style={{width: "80%"}} mode="contained" >
                    Sign Up
                </Button>
                </View>
            </View>
        )
    }

    const login_screen = ():ReactNode =>{
        return(
            <View style={{
                width: "100%",
                height: "100%",
                ...flex_col_center_top,
                ...generate_padding(20, 20, 20, 20)
            }} >
                <Text style={styles.logo_text} >Dmail.</Text>
                <View style={{width: "100%", marginBottom: 20}} >
                    <TextInput value={user_name} onChangeText={(e)=>{
                        set_user_name(e)
                    }} mode="outlined" label="username" placeholder="username"  />
                </View>
                <View style={{width: "100%"}} >
                    <TextInput onChangeText={(e)=>{
                        set_password(e)
                    }} mode="outlined" label="password" placeholder="password"  />
                </View>
                <View style={{marginTop: 40}}>
                <Button onPress={signin} style={{width: "80%"}} mode="contained" >
                    Login
                </Button>
                </View>
            </View>
        )
    }

    if(fontsloaded){
        return (
            <View style={styles.container} >
                {route.params.auth_type == "SignIn" && login_screen()}
                {route.params.auth_type == "SignUp" && signup_screen()}
            </View>
        )
    }else{
        return(
            <AppLoading/>
        )
    }
    
}

export default Authenticate

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",

    },
    logo_text: {
        fontSize: 24,
        color: "rgb(246, 83, 20)",
        fontFamily: "Poppins_600SemiBold",
        marginBottom: 100
    },
})
