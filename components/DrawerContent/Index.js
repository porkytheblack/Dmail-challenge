import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { flex_row_start, generate_padding } from '../../globalStyles'
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

const CustomDrawerContent = (props) => {
    console.log(props)
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold
    }) 
    if(fontsLoaded){
        return (
            <DrawerContentScrollView {...props}>
                <View style={styles.logo_container} >
                    <Text style={styles.logo} >
                        Gmail.
                    </Text>
                </View>
                
            </DrawerContentScrollView>
        )
    }else{
        return(
            <AppLoading/>
        )
    }
    
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    logo_container: {
        ...flex_row_start,
        width: "100%",
        height: 100,
        borderBottomColor: "lightgray",
        borderBottomWidth: 0.2,
        ...generate_padding(0,0,0,20)
    },
    logo: {
        fontSize: 30,
        color: "rgb(246, 83, 20)",
        fontFamily: "Poppins_600SemiBold",
    }
})
