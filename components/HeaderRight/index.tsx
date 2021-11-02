import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { flex_row_between } from '../../globalStyles'
import DropDown from '../Dropdown'

const HeaderRight = () => {
    const [drop, set_drop] = useState(false)
    const open_drop_down = () =>{
        set_drop(true)
    }
    return (
        <View style={styles.container} >
            <Pressable android_ripple={{
                color: "rgba(51, 136, 255, 0.3)",
                radius: 30,
                borderless: true
            }}  >
                <Ionicons name="archive-outline" size={24} color="black" />
            </Pressable>
            <Pressable android_ripple={{
                color: "rgba(51, 136, 255, 0.3)",
                radius: 30,
                borderless: true
            }} >
            <MaterialIcons name="delete-outline" size={24} color="black" />
            </Pressable>
            <Pressable android_ripple={{
                color: "rgba(51, 136, 255, 0.3)",
                radius: 30,
                borderless: true
            }} >
                <Feather name="mail" size={24} color="black" />
            </Pressable>
            <Pressable android_ripple={{
                color: "rgba(51, 136, 255, 0.3)",
                radius: 30,
                borderless: true
            }} onPress={open_drop_down} >
                <MaterialIcons name="more-vert" size={24} color="black" />
            </Pressable>
            {drop && <DropDown/>}
        </View>
    )
}

export default HeaderRight

const styles = StyleSheet.create({
    container:{
        width: "80%",
        height: "100%",
        ...flex_row_between,
        paddingLeft: 20,
        position: "relative"
    }
})
