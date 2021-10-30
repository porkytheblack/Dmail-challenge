import { Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { flex_col_center, flex_col_end, flex_col_start, flex_row_between, flex_row_center, flex_row_start, generate_padding } from '../../globalStyles'

const AccountDetails = ({hide_modal}) => {
    const navigation = useNavigation()
    const to_profile = () => {
        hide_modal()
        navigation.navigate("Profile")
    }
    return (
        <View style={styles.main_container} >

        
        <View style={styles.container} >
            <View style={styles.top_container} >
                <Pressable onPress={hide_modal} >
                <MaterialCommunityIcons name="close" size={24} color="black" />
                </Pressable>
                <View style={styles.top_container_logo} >
                    <Text style={styles.logo_text} >
                        Dmail.
                    </Text>
                </View>
            </View>
            <View style={styles.user_details_container} >
                <View style={styles.user_container_left} >
                    <Ionicons name="person" size={24} color="black" />
                    <View style={styles.user_profile_info} >
                        <Text style={styles.black_text} >My Name</Text>
                        <Text style={styles.small_gray_text} >myemail@email.com</Text>
                    </View>
                </View>

                <View style={styles.right_number} >
                    <Text style={styles.small_gray_text} > 88 </Text>
                </View>
            </View>

            <View style={{...flex_row_center}} >
                <View style={styles.to_account_button} >
                <Pressable onPress={to_profile} android_ripple={{
                    color: "rgba(51, 136, 255, 0.3)",
                    radius: 150,
                    borderless: true
                }} style={{width: "100%", height: "100%", ...flex_row_center}}  >
                    <Text style={styles.black_text} >
                        Manage your Dmail account
                    </Text>
                </Pressable>
                </View>
                
            </View>

        </View>
        </View>
    )
}

export default AccountDetails

const styles = StyleSheet.create({
    main_container: {
        width: "100%",
        ...flex_col_center,
        marginTop: 100
    },
    container: {
        width: "90%",
        ...generate_padding(20, 20,20,20),
        backgroundColor: "white",
        borderRadius: 8,
        height: 400
    },
    top_container: {
        width: "100%",
        ...flex_row_between,
        ...generate_padding(0, 0, 20, 0)
    },
    top_container_logo: {
        width: "90%",
        ...flex_row_center,
        height: "100%"
    },
    user_details_container: {
        width: "100%",
        ...generate_padding(10, 0, 10, 0),
        ...flex_row_between
    },
    user_container_left:{
        width: "90%",
        ...flex_row_start,
        height: "100%",
    },
    right_number: {
        width: "10%",
        height: "100%",
        ...flex_col_end
    },
    black_text: {
        fontSize: 14,
        fontFamily: "Poppins_400Regular",
        color: "black"
    },
    small_gray_text:{
        fontSize: 12,
        fontFamily: "Poppins_400Regular",
        color: "rgba(0, 0, 0, 0.5)",
    },
    to_account_button: {
        borderRadius: 20,
        borderColor: "rgba(0, 0, 0, 0.5)",
        padding: 10,
        borderWidth: .4,
        height: 40,
        marginTop: 30
    },
    logo_text: {
        fontSize: 24,
        color: "rgb(246, 83, 20)",
        fontFamily: "Poppins_600SemiBold",
    },
    user_profile_info: {
        width: "90%",
        ...flex_col_start,
        paddingLeft: 20
    }
})
