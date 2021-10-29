import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import SearchBox from '../components/SearchBox/Index'

const MeetScreen = () => {
    return (
        <ScrollView>
            <SearchBox/>
        </ScrollView>
    )
}

export default MeetScreen

const styles = StyleSheet.create({
    
})
