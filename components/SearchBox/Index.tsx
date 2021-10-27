import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { flex_row_between, flex_row_center, flex_row_start } from '../../globalStyles'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

const SearchBox = () => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular
    })
    if(fontsLoaded){
        return (
            <View style={styles.container} >
                <View style={styles.search_box} >
                    <MaterialIcons name="menu" size={24} color="black" />
                    <View style={styles.search_text_container} >
                        <TextInput style={styles.text_input} />
                    </View>
                    <MaterialIcons name="person" size={24} color="black" />
                </View>
            </View>
        )
    }else{
        return(
            <AppLoading/>
        )
    }
    
}

export default SearchBox

const styles = StyleSheet.create({
    container : {
        height: 35,
        width: "100%",
        ...flex_row_center
    },
    search_box: {
        ...flex_row_between,
        width: 350,
        height: 35,
        borderRadius: 15,
        backgroundColor: "rgba(153, 238, 255, 0.29)",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 16,
        paddingRight: 16
    },
    search_text_container:{
        height: "100%",
        width: 280,
        ...flex_row_start
    },
    text_input: {
        color: "rgb(154, 147, 147)",
        fontSize: 12,
        fontFamily: "Poppins_400Regular",
        width: "100%",
        height: "100%",
        ...flex_row_start
    }
})
