import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import SearchBox from '../components/SearchBox/Index'
import { flex_col_center, flex_col_center_top, flex_row_between, flex_row_even, flex_row_start, generate_padding } from '../globalStyles'

const ReadMail = () => {
    return (
        <ScrollView>
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
        height: 50,
        ...flex_row_start
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
    }
    
})
