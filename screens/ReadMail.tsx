import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import SearchBox from '../components/SearchBox/Index'
import { flex_col_center, flex_col_center_top, flex_col_start, flex_row_between, flex_row_center, flex_row_end, flex_row_even, flex_row_start, generate_padding } from '../globalStyles'

const ReadMail = () => {
    return (
        <ScrollView style={styles.container} >
            <View style={styles.top_controls_container} >
                <Text style={styles.subject} >
                    This is a subject
                </Text>
                <MaterialIcons size={24} name="star-outline" color="black" />
            </View>
            <View style={styles.top_controls_container} >
                <View style={styles.icon_container} >
                    <MaterialIcons name="person" color="black" size={30} />
                </View>
                <View  style={styles.detaills_container} >
                    <View styles={{...flex_row_between}} >
                        <Text ellipsizeMode="tail" >Eoething goes here</Text>
                        <Text style={styles.gray_text} >
                            7:40 am
                        </Text>
                    </View>
                    <View style={styles.gray_text} >
                        <Text>to me</Text>
                        <MaterialIcons name="arrow-drop-down" size={24}  color="black"   / >
                    </View>
                </View>
                <View style={styles.container_float_left}>
                    <MaterialIcons name="reply"  color="black" size={24} />
                    <MaterialIcons name="more-vert" color="black" size={24} />
                </View>
            </View>

        </ScrollView>
    )
}

export default ReadMail

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        ...generate_padding(10, 10, 10, 10)
    },
    top_controls_container: {
        width: "100%",
        ...flex_row_between,
        marginBottom: 20
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
        fontFamily: "Poppins_600Regular"
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
