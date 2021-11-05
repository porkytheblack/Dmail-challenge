import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { Menu } from 'react-native-paper'
import { flex_row_between, flex_row_start, generate_padding } from '../../globalStyles'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

const CustomHeader = () => {
    const [drop, set_drop] = useState(false);
    const navigation = useNavigation()
    const activate_drop = () =>{
        set_drop(true)
    }
    const dismiss = () => {
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
    return (
        <View style={styles.container} >
            <View style={styles.l} >
            <Pressable android_ripple={{
                    color: "rgba(51, 136, 255, 0.3)",
                    radius: 20,
                    borderless: true
                }} onPress={()=>{
                    navigation.goBack()
                }} >
                    <Ionicons name="arrow-back-sharp" size={24} color="black" />
                </Pressable>
                
            </View> 
            <View style={styles.r} >
                <Pressable android_ripple={{
                    color: "rgba(51, 136, 255, 0.3)",
                    radius: 20,
                    borderless: true
                }}  >
                    <Ionicons name="archive-outline" size={24} color="black" />
                </Pressable>
                <Pressable android_ripple={{
                    color: "rgba(51, 136, 255, 0.3)",
                    radius: 20,
                    borderless: true
                }} >
                <AntDesign name="delete" size={24} color="black" />
                </Pressable>
                <Pressable android_ripple={{
                    color: "rgba(51, 136, 255, 0.3)",
                    radius: 20,
                    borderless: true
                }} >
                    <Feather name="mail" size={24} color="black" />
                </Pressable>
                <Menu style={styles.menu}  onDismiss={dismiss} visible={drop} anchor={
                    <Pressable  onPress={activate_drop} android_ripple={{
                        color: "rgba(51, 136, 255, 0.3)",
                        radius: 20,
                        borderless: true
                    }} >
                        <MaterialIcons name="more-vert" color="black" size={24} />
                    </Pressable>
                } >
                    {menu_button("Title")}
                    {menu_button("Title")}
                    {menu_button("Title")}
                    {menu_button("Title")}
                    {menu_button("Title")}
                </Menu>
                
            </View>
            
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        width: "100%",
        ...generate_padding(10, 0,5,10),
        ...flex_row_between,
        backgroundColor: "white",
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(0, 0, 0, 0.2)",
        position: "relative",
        zIndex: 30
    },
    l: {
        width: "50%",
        height: "100%",
        ...flex_row_start,
    },
    r: {
        width: "50%",
        height: "100%",
        ...flex_row_between,
        paddingLeft: 20,
        paddingBottom: 5
    },
    menu: {
        width: 200,
        padding: 0,
        margin: 0
    },
    menu_item_text: {
        fontSize: 16,
        color: "black",
        fontFamily: "Poppins_400Regular",
        paddingLeft: 20
    }
})
