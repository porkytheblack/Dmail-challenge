import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { flex_col_end, flex_col_start, flex_row_center, flex_row_start, flex_row_top, generate_padding } from '../../globalStyles'
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { Entypo, MaterialIcons } from '@expo/vector-icons';


const ListItem = () => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold
    })
    if(fontsLoaded){
        return (
            <View style={styles.container} >
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
                        <Text style={styles.item_details_sender} >11:00PM</Text>
                        <MaterialIcons name="star-outline" size={24} color="black" />
                    </View>
                </View>
            </View>
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
        height: 100,
        ...generate_padding(10, 0, 15, 10),
    },
    item_details: {
        ...flex_col_start,
        height: "100%",
        width: 215
    },
    item_details_sender: {
        fontSize: 14,
        color: "black",
        fontFamily: "Poppins_600SemiBold"
    },
    item_details_sub_header:{
        fontSize: 12,
        color: "black",
        fontFamily: "Poppins_600SemiBold"
    },
    item_details_content:{
        fontSize: 12,
        color: "black",
        fontFamily: "Poppins_400Regular"
    },
    side:{
        ...flex_col_end
    },
    icon_container: {
        width: 50,
        ...flex_row_top
    }
})
