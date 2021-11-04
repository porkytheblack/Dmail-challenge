import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { flex_col_start_top, generate_padding } from '../../globalStyles'
import DropDownItem from './DropDownItem'

const DropDown = () => {
    return (
        <View style={styles.container} >
            <View style={styles.cont} >
                    <DropDownItem key={1} />
            </View>
        </View>
    )
}

export default DropDown

const styles = StyleSheet.create({
    container: {
        width: 200,
        backgroundColor: "white",
        position: "absolute",
        height: 200
    },
    cont: {
        backgroundColor: "#DEEAED",
        height: "100%",
        width: "100%",
        ...generate_padding(10, 0,10,0),
        ...flex_col_start_top,
    }
})
