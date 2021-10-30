import { FontAwesome, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { flex_row_between, flex_row_start, generate_padding } from '../globalStyles'

const ModalSearchScreen = ({navigation}) => {

    const go_back =()=>{
        navigation.goBack()
    }
    return (
        <View style={styles.modal_container}>
            <View style={styles.top_search_container} >
                <Ionicons onPress={go_back} name="ios-arrow-back" size={24} color="black" />
                <TextInput style={styles.text_container}  placeholder="Search in mail"/>
                <FontAwesome name="microphone" size={24} color="black" />
            </View>
            <ScrollView style={styles.scroll_container} >
                <View style={styles.heading_container} >
                    <Text style={styles.results_title} >
                        Recent Mail Searches
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ModalSearchScreen

const styles = StyleSheet.create({
    modal_container: {
        width: "100%",
        height: "100%",
        backgroundColor: "white"
    },
    top_search_container: {
        width: "100%",
        height: 80,
        ...generate_padding(20, 10, 20, 10 ),
        ...flex_row_between,
        borderBottomColor: "lightgray",
        borderBottomWidth: .8
    },
    text_container: {
        width: 250,
        height: "100%",
        color: "rgba(0,0,0,0.6)",
        fontSize: 18,
        fontFamily: "Poppins_400Regular"
    },
    scroll_container: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        paddingTop: 20
    },
    results_title: {
        fontSize: 12,
        fontFamily: "Poppins_400Regular",
    },
    heading_container: {
        width: "100%",
        height: 50,
        ...flex_row_start,
        paddingLeft: 20
    }
})
