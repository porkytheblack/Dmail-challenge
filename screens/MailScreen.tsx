import { PROPERTY_TYPES } from '@babel/types'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ListItem from '../components/ListItem/Index'
import SearchBox from '../components/SearchBox/Index'
import { generate_padding } from '../globalStyles'

const MailScreen = ({navigation}) => {
    const list: number[] = [1,2,3,4,5,6,7,8,9,10,11]
    return (
            
            <FlatList ListHeaderComponentStyle={{
                marginBottom: 20
            }} ListHeaderComponent={<SearchBox navigation={navigation} />} style={styles.container} keyExtractor={(item, index)=>(index.toString())} data={list}  renderItem={(props)=>(
                <ListItem/>
            )} />
    )
}

export default MailScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        ...generate_padding(20, 5, 20, 5),
        backgroundColor: "white",
    }
})
