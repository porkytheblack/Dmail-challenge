import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { flex_row_between, flex_row_start, generate_padding } from '../../globalStyles'

const CustomHeader = () => {
    const [drop, set_drop] = useState(false);
    const navigation = useNavigation()
    const activate_drop = () =>{
        set_drop(true)
    }
    const dismiss = () => {
        set_drop(false)
    }
    return (
        <View style={styles.container} >
            <View style={styles.l} >
            <Pressable android_ripple={{
                    color: "rgba(51, 136, 255, 0.3)",
                    radius: 30,
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
            </View>
            
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        width: "100%",
        ...generate_padding(10, 0,10,10),
        ...flex_row_between,
        backgroundColor: "white",
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(0, 0, 0, 0.5)",
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
        paddingLeft: 20
    }
})
