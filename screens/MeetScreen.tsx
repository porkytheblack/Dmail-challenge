import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import SearchBox from '../components/SearchBox/Index'
import { flex_row_between, generate_padding } from '../globalStyles'

const MeetScreen = () => {
    return (
        <View style={styles.container} >

        </View>
    )
}

export default MeetScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor:"white"
    },
    top_controls: {
        ...flex_row_between,
        width: 350,
        height: 50,
        borderRadius: 15,
        backgroundColor: "rgba(153, 238, 255, 0.29)",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 16,
        paddingRight: 16
    }
})
