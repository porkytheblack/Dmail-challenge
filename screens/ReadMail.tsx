import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import SearchBox from '../components/SearchBox/Index'
import { flex_col_center, flex_col_center_top, flex_col_start, flex_row_between, flex_row_center, flex_row_end, flex_row_even, flex_row_start, generate_padding } from '../globalStyles'
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import CustomHeader from '../components/CustomHeader'


const ReadMail = () => {
    const [fontsloaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold
    })
    return (
        <View style={styles.container} >
            <CustomHeader/>
            <View style={styles.top_controls_container} >
                <Text style={styles.subject} >
                    This is a subject
                </Text>
                <MaterialIcons size={24} name="star-outline" color="black" />
            </View>
            <View style={{
                width: "100%",
                ...flex_row_between,
                height: 50,
                ...generate_padding(0, 5,0,0)
            }} >
                <View style={{padding: 10, ...flex_col_center_top, height: "100%"}} >
                    <MaterialIcons name="person" color="black" size={30} />
                </View>
                <View  style={styles.detaills_container} >
                    <View style={{ width: "100%",...flex_row_between}} >
                        <Text ellipsizeMode="tail" style={{width: "60%", ...styles.sender}} >Everything goes here</Text>
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
                    <MaterialIcons name="reply"  color="black" size={24} />
                    <MaterialIcons name="more-vert" color="black" size={24} />
                </View>
            </View>

        </View>
    )
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
        fontSize: 18,
        fontFamily: "Poppins_600SemiBold"
    },
    sender: {
        color: "black",
        fontSize: 14,
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
        width: "100%",
        height: "100%",
        ...flex_row_start
    },
    icon_container: {
        ...generate_padding(10,10,10,10),
        ...flex_row_center
    },
    detaills_container: {
        width: "100%",
        height: "100%",
        ...flex_col_start
    }
    
})
