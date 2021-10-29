import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import SearchBox from '../components/SearchBox/Index'
import { generate_padding } from '../globalStyles'

const MailScreen = () => {
    return (
        <ScrollView style={styles.container} >
            <SearchBox/>
        </ScrollView>
    )
}

export default MailScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        ...generate_padding(20, 5, 20, 5)
    }
})
