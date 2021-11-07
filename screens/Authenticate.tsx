import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { useNavigation } from '@react-navigation/core'
import AppLoading from 'expo-app-loading'
import React, { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { flex_col_center_top, flex_row_between, generate_padding } from '../globalStyles'


const Authenticate = ({route, navigation}) => {
    const [fontsloaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold
    })
    const nav =useNavigation()
    const go_to_mail = () =>{
        nav.navigate("Root")
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
                    <TextInput style={{width: "45%"}} mode="outlined" label="firstname" placeholder="firstname"  />
                    <TextInput style={{width: "45%"}} mode="outlined" label="lastname" placeholder="lastname"  />
                </View>
                <View style={{width: "100%", marginBottom: 20}} >
                    <TextInput mode="outlined" label="username" placeholder="username"  />
                </View>
                <View style={{width: "100%"}} >
                    <TextInput mode="outlined" label="password" placeholder="password"  />
                </View>
                <View style={{width: "100%"}} >
                    <TextInput mode="outlined" label="Confirm password" placeholder="Confirm password"  />
                </View>
                <View style={{marginTop: 40}}>
                <Button onPress={go_to_mail} style={{width: "80%"}} mode="contained" >
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
                    <TextInput mode="outlined" label="username" placeholder="username"  />
                </View>
                <View style={{width: "100%"}} >
                    <TextInput mode="outlined" label="password" placeholder="password"  />
                </View>
                <View style={{marginTop: 40}}>
                <Button onPress={go_to_mail} style={{width: "80%"}} mode="contained" >
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
