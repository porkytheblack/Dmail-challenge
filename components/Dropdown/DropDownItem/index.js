import React from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { flex_row_start, generate_padding } from '../../../globalStyles'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

const DropDownItem = () => {
    const [fontsloaded] = useFonts({
        Poppins_400Regular
    })
    if(fontsloaded){
        return (
            <View style={styles.container} >
                <Pressable android_ripple={
                    {
                        borderless: false,
                        color: "#3388FF",
                        radius: 200
                    }
                } style={styles.p} >
                <Text style={styles.text} >Title</Text>
                </Pressable>
            </View>
            
        )
    }else{
        return(<AppLoading/>)
    }
    
}

export default DropDownItem

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 40,
        
    },
    text: {
        fontSize: 16,
        color: "black",
        fontFamily: "Poppins_400Regular"
    },
    p: {
        width: "100%",
        ...generate_padding(5, 0, 5, 5),
        ...flex_row_start
    }
})
