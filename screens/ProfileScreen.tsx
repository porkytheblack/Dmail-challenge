import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { flex_col_center, flex_row_between, flex_row_center, flex_row_start, generate_padding } from '../globalStyles'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';


const ProfileScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container} >
            <View style={styles.top_container} >
                <Pressable onPress={()=>{
                    navigation.goBack()
                }} >
                    <MaterialCommunityIcons name="close" size={24} color="black" />
                </Pressable>                
                <View style={styles.top_container_logo} >
                    <Text style= {styles.logo_text} >Dmail.</Text>
                </View>
            </View>
            <View style={styles.section} >
                <View style={styles.section_heading} >
                    <Text style={styles.big_black_text} >Profile Picture</Text>
                </View>
                <View style={styles.section_description} >
                    <Text style={styles.small_gray_text} >
                        Your Profile picture
                    </Text>
                </View>
                <View style={styles.section_item} >
                   <Ionicons name="person" size={35} color="black" />
                </View>
                <Button mode="contained" icon="camera" >
                    Add Profile Picture
                </Button>
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
    },
    top_container: {
        width: "100%",
        height: 80,
        ...generate_padding(10, 10, 10, 10),
        ...flex_row_between
    },
    top_container_logo: {
        width: "80%",
        height: "100%",
        ...flex_row_center
    },
    logo_text: {
        fontSize: 24,
        color: "rgb(246, 83, 20)",
        fontFamily: "Poppins_600SemiBold",
    },
    big_black_text: {
        fontSize: 18,
        color: "black",
        fontFamily: "Poppins_400Regular"
    },
    small_gray_text: {
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.6)",
        fontFamily: "Poppins_400Regular"
    },
    section_heading: {
        width: "100%",
        ...generate_padding(0, 0, 10, 0),
        ...flex_row_start
    },
    section_description: {
        width: "100%",
        borderBottomColor: "rgba(0, 0, 0, 0.2)",
        ...flex_row_start,
        ...generate_padding(0, 0, 20, 0),
        borderBottomWidth: 0.5,
    },
    section_item: {
        width: "100%",
        ...generate_padding(10,10,10,10),
        ...flex_col_center
    },
    section: {
        width: "100%",
        ...generate_padding(10, 20, 10, 20)
    }
})
