import React from 'react'
import { Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { flex_col_end, flex_col_start, flex_row_center, flex_row_start, flex_row_top, generate_padding } from '../../globalStyles'
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import { rootReducer, RootState } from '../../redux';


const ListItem = () => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold
    })
    const navigation = useNavigation()
    const toppress = useSelector((state: RootState) => state.layout.top_press)
    if(fontsLoaded){
        return (
            <TouchableWithoutFeedback  android_ripple={toppress ? {

            }:{
                color: "rgba(51, 136, 255, 0.3)",
                borderless: false,
                radius: 200
            }} onPress={()=>{
                if(!toppress){
                    navigation.navigate("Read")
                }
            }}  style={styles.container} >
                <View style={styles.item_container} >
                    <View style={styles.icon_container} >
                    <Entypo name="spotify-with-circle" size={40} color="green" />
                    </View>
                    
                    <View style={styles.item_details} >
                        <Text style={styles.item_details_sender}>Vercel</Text>
                        <Text ellipsizeMode="tail" style={styles.item_details_sub_header} >EEEEEEEEEE</Text>
                        <Text ellipsizeMode="tail" style={styles.item_details_content} >EEEEEEEE</Text>
                    </View>
                    <View style={styles.side} >
                        <Text style={{...styles.item_details_content, marginTop: 0}} >11:00PM</Text>
                        <MaterialIcons style={{marginBottom: 0}} name="star-outline" size={24} color="black" />
                    </View>
                </View>
            </TouchableWithoutFeedback >
        )
    }else{
        return (<AppLoading/>)
    }
    
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        width: "100%",
        ...flex_row_center
    },
    item_container: {
        ...flex_row_top,
        width: "100%",
        marginBottom: 20,
        ...generate_padding(0,10,0,10)
    },
    item_details: {
        ...flex_col_start,
        width: "70%",
        
    },
    item_details_sender: {
        fontSize: 16,
        color: "black",
        fontFamily: "Poppins_600SemiBold"
    },
    item_details_sub_header:{
        fontSize: 14,
        color: "black",
        fontFamily: "Poppins_600SemiBold"
    },
    item_details_content:{
        fontSize: 14,
        color: "black",
        fontFamily: "Poppins_400Regular"
    },
    side:{
       display: "flex",
       alignItems: "flex-end",
       justifyContent: "space-between",
    },
    icon_container: {
        width: 50,
        ...flex_row_top
    }
})
