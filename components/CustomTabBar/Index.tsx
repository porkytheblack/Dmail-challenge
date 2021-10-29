import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { flex_col_center, flex_row_center, flex_row_even, generate_padding } from '../../globalStyles'
import { useFonts, Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading'


const CustomTabBar = (props: BottomTabBarProps) => {
    let [fontsloaded] = useFonts({
        Poppins_600SemiBold,
        Poppins_400Regular
    })
    const [active, set_active] = useState([""]);
    const activate_pressed = (t: string) =>{
        set_active([t])
        props.navigation.navigate(t)
    }
    if(fontsloaded){
        return (
            <View style={styles.container} >
                {props.state.routeNames.map((title, index)=>{
                    return(
                        <Pressable onPress={()=>{
                            activate_pressed(title)
                        }} key={index} style={styles.tab_container} >
                            <View style={styles.inner_container} >
                            <View style={active.indexOf(title) != -1 ? {...styles.active_item, marginBottom: 5} : {...styles.inactive_item, marginBottom: 5}}>
                                {title == "Mail" ? (active[0] == "Mail" ? <MaterialIcons name="mail" size={24} color="black" /> : <Feather name="mail" size={24} color="black" />) : (active[0] == "Meet" ? <MaterialIcons name="videocam" size={24} color="black" /> : <Ionicons name="ios-videocam-outline" size={24} color="black" />)}
                            </View>
                            <Text style={styles.tab_bar_text} >{title}</Text>
                            </View>
                            
                        </Pressable>
                    )
                })}
            </View>
        )
    }else{
        return(
            <AppLoading/>
        )
    }
    
}

export default CustomTabBar

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 65,
        backgroundColor:"#F0F4F5",
        ...flex_row_even
    },
    tab_container: {
        width: "50%",
        ...flex_row_center,
        height: "100%",
    },
    active_item: {
        borderRadius: 10,
        backgroundColor: "rgba(66, 133, 244, 0.3)",
        ...generate_padding(2,10,2,10),
        
    },
    inactive_item: {
        borderRadius: 10,
        ...generate_padding(2,10,2,10),
        
    },
    inner_container: {
        width: "100%",
        ...flex_col_center,
        height: "80%",
    },
    tab_bar_text: {
        fontSize: 14,
        fontFamily: "Poppins_400Regular",
        color: "black"
    }
})
