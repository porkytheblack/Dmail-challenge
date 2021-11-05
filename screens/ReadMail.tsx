import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import SearchBox from '../components/SearchBox/Index'
import { flex_col_center, flex_col_center_top, flex_col_end, flex_col_start, flex_row_between, flex_row_center, flex_row_end, flex_row_even, flex_row_start, flex_row_top, generate_padding } from '../globalStyles'
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import CustomHeader from '../components/CustomHeader'
import AppLoading from 'expo-app-loading'
import { Menu } from 'react-native-paper'


const ReadMail = () => {
    const [fontsloaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold
    })
    const [drop, set_drop] = useState(false);
    const show_menu = ()=>{
        set_drop(true)
    }
    const hide_menu = () =>{
        set_drop(false)
    }
    const menu_button = (title: string) =>{
        return(
            <View style={{
                ...flex_row_start,
                width: "100%"
            }} >
                <Pressable android_ripple={{
                    color: "rgba(51, 136, 255, 0.3)",
                    radius: 200,
                    borderless: false
                }} style={{
                    ...flex_row_start,
                    width: "100%",
                    height: "100%",
                    ...generate_padding(10, 0, 10, 5)
                }} >
                    <Text style={styles.menu_item_text} >
                    {title}
                    </Text>
                </Pressable >
            </View>
        )
    }
    if(fontsloaded){
        return (
            <View style={styles.container} >
                <CustomHeader/>
                <View style={styles.top_controls_container} >
                    <View style={{
                        width: "75%",
                        ...flex_row_start
                    }} >
                        <Text  style={styles.subject} >
                        This is a subject woth talking about, with everybody of course
                        </Text>
                    </View>
                    <View style={{
                        width: "25%",
                        ...flex_col_end,
                        paddingRight: 10
                    }} >
                        <MaterialIcons size={24} name="star-outline" color="black" />
                    </View>
                    
                </View>
                <View style={{
                    width: "100%",
                    ...flex_row_start,
                    ...generate_padding(0, 5,0,0)
                }} >
                    <View style={{paddingLeft: 10, paddingRight: 10, ...flex_row_top,}} >
                        <FontAwesome name="reddit" size={40} color="orange" />
                    </View>
                    <View  style={styles.detaills_container} >
                        <View style={{ width: "100%",...flex_row_between}} >
                            <Text ellipsizeMode="tail" style={{width: "60%", ...styles.sender}} >Reddit</Text>
                            <Text style={{...styles.gray_text, width: "40%", paddingRight: 20}} >
                                7:40am
                            </Text>
                        </View>
                        <View style={{
                            width: "100%",
                            ...flex_row_start
                        }} >
                            <Text style={styles.gray_text}>to me</Text>
                            <MaterialIcons name="arrow-drop-down" size={24}  color="black"   / >
                        </View>
                    </View>
                    <View style={styles.container_float_left}>
                        
                        

                        <Pressable android_ripple={{
                        color: "rgba(51, 136, 255, 0.3)",
                        radius: 20,
                        borderless: true
                        }} >
                            <Ionicons name="return-up-back" size={24} color="black" />
                        </Pressable>

                        <Menu style={{width: 200}} visible={drop} onDismiss={hide_menu} anchor={
                            <Pressable android_ripple={{
                                color: "rgba(51, 136, 255, 0.3)",
                                radius: 20,
                                borderless: true
                                }} onPress={()=>{
                                    show_menu()
                                    }} >
                                    <MaterialIcons name="more-vert" color="black" size={24} />
                                </Pressable>
                        }>
                            {menu_button("Title")}
                            {menu_button("Title")}
                            {menu_button("Title")}
                            {menu_button("Title")}
                        </Menu>
                        
                    </View>
                </View>
    
            </View>
        )
    }else{
        return(<AppLoading/>)
    }
    
}

export default ReadMail

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        margin: 0,
        ...generate_padding(0, 0, 10, 0)
    },
    top_controls_container: {
        width: "100%",
        ...flex_row_between,
        paddingLeft: 10,
        paddingBottom: 20,
        paddingTop: 20
    },
    top_controls_left: {
        width: "50%",
        height: "100%",
        ...flex_row_start
    },
    top_cotrols_right:{
        width: "50%",
        height: "100%",
        ...flex_row_between,
        paddingLeft: 20
    },
    section_container: {
        width: "100%",
        ...flex_col_center_top
    },
    subject: {
        color: "black",
        fontSize: 24,
        fontFamily: "Poppins_400Regular",
        textAlign: "left"
    },
    sender: {
        color: "black",
        fontSize: 18,
        fontFamily: "Poppins_600SemiBold"
    },
    gray_text: {
        color: "gray",
        fontSize: 12,
        fontFamily: "Poppins_400Regular"
    },
    email_text: {
        color: "gray",
        fontSize: 12,
        fontFamily: "Poppins_400Regular"
    },
    container_float_right: {
        width: "100%",
        height: "100%",
        ...flex_row_end
    },
    container_float_left: {
        height: "100%",
        width: "32%",
        ...flex_row_between,
        paddingLeft: 20
    },
    icon_container: {
        ...generate_padding(10,10,10,10),
        ...flex_row_center
    },
    detaills_container: {
        width: "50%",
        ...flex_col_start
    },
    menu_item_text: {
        fontSize: 16,
        color: "black",
        fontFamily: "Poppins_400Regular",
        paddingLeft: 20
    }
    
})
