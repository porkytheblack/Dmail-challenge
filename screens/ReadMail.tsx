import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import SearchBox from '../components/SearchBox/Index'
import { flex_col_center, flex_row_between, flex_row_even, flex_row_start, generate_padding } from '../globalStyles'

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
        ...flex_col_center
    }
    
})
