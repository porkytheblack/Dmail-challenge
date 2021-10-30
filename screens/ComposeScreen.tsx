import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { flex_col_start, flex_row_around, flex_row_between, flex_row_end, flex_row_even, flex_row_start, generate_padding } from '../globalStyles'

const ComposeScreen = ({navigation}) => {
    const go_back = () =>{
        navigation.goBack()
    }
    return (
        <View style={styles.container} >
            <View style={styles.top_container} >
                <View style={styles.top_container_left} >
                    <Pressable onPress={()=>{
                        go_back()
                    }} >
                        <Ionicons name="ios-arrow-back" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.top_text} > Compose </Text>
                </View>
                <View style={styles.top_container_right} >
                <Pressable onPress={()=>{
                        
                    }} style={styles.top_icon} >
                        <MaterialIcons name="attachment" size={24} color="black" />
                    </Pressable>
                    <Pressable onPress={()=>{
                    }} style={styles.top_icon} >
                        <MaterialIcons name="send" size={24} color="black" />
                    </Pressable>
                    <Pressable onPress={()=>{
                        
                    }} style={styles.top_icon} >
                        <Feather name="more-vertical" size={24} color="black" />
                    </Pressable>
                </View>
            </View>
            <View style={styles.data_entry_container} >
                <Text style={styles.left_text} >From</Text>
                <Text style={styles.input_text} >mymail@mail.com</Text>
            </View>
            <View style={styles.data_entry_container} >
                <Text style={styles.left_text} >To</Text>
                <TextInput style={styles.input_text} />
            </View>
            <View style={styles.data_entry_container} >
                <Text style={styles.left_text} >Subject</Text>
                <TextInput style={styles.input_text} />
            </View>
            <KeyboardAvoidingView enabled={true}  style={styles.draft_container} >
                
                    <TextInput style={styles.draft_text} textAlignVertical="top" multiline={true} placeholder="Compose" >

                    </TextInput>
            </KeyboardAvoidingView>
        </View>
    )
}

export default ComposeScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        paddingTop: 0,
        margin: 0
    },
    top_container: {
        width: "100%",
        height: 100,
        ...generate_padding(10, 0, 10, 5),
        ...flex_row_between
    },
    top_container_left:{
        width: "50%",
        height: "100%",
        ...flex_row_start
    },
    top_text:{
        fontSize: 20,
        fontFamily: "Poppins_400Regular",
        color: "black",
        paddingLeft: 30
    },
    top_container_right: {
        width: "50%",
        height: "100%",
        ...flex_row_end
    },
    data_entry_container: {
        width: "100%",
        borderBottomWidth: .3,
        borderBottomColor: "rgba(0,0,0,0.3)",
        ...generate_padding(10, 10,10,10),
        ...flex_row_start
    },
    left_text: {
        color: "rgba(0, 0,0 ,0.8)",
        fontFamily: "Poppins_400Regular",
        fontSize: 14
    },
    input_text: {
        marginLeft: 20,
        fontSize: 20,
        fontFamily: "Poppins_400Regular",
        color: "black",
        width: "100%",
    },
    top_icon: {
        marginLeft: 15
    },
    draft_container: {
        width: "100%",
        ...flex_col_start,
        ...generate_padding(10, 5, 20, 5)
    },
    draft_text:{
        fontSize: 16,
        fontFamily: "Poppins_400Regular",
        color: "black",
        width: "100%",
        height: "100%",
        ...flex_col_start
    }
})
