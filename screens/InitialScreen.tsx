import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { flex_col_center, flex_col_center_top, flex_row_between, flex_row_center, generate_padding } from '../globalStyles'
import security from "../assets/images/illustrations/security.png"
import ease from "../assets/images/illustrations/ease.png"
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/core'


const InitialScreen = () => {
    const navigation = useNavigation()
    const width = Dimensions.get("screen").width
    const [fontsloaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold
    })
    const carousel_data: {title: string, info: string, img: typeof ease}[] = [
        {
            title: "Easy to use",
            info: "Everyhing you would ever need in one place",
            img: ease
        },
        {
            title: "Secure",
            info: "All emails are encrypted and only visible to you and the sender of the email.",
            img: security
        }
    ]

    const go_to_auth = (action: string) =>{
        navigation.navigate("Authenticate", {
            auth_type: action
        })
    }
    if(fontsloaded){
        return (
            <View style={styles.container} >
                <View style={{
                    width: "100%",
                    ...generate_padding(20,20,20,20),
                    ...flex_col_center
                }} >
                <Text style={styles.logo_text} >
                    Dmail
                </Text>
                <Text style={styles.sub_text} >
                    The future of email
                </Text>
                </View>
                <View style={{
                    width: "100%",
                    ...flex_col_center_top
                }} >
                    <Carousel layout="default" data={carousel_data}
                sliderWidth={width}
                itemWidth={0.8*width}
                renderItem={({item, index})=>(
                    <View key={index} style={{
                        width: 0.8*width,
                        ...generate_padding(0, 20, 0, 20),
                        ...flex_col_center_top
                    }} >
                        <Image style={styles.image_style} source={item.img} />
                        <Text style={{
                            fontSize: 18,
                            color: "black",
                            fontFamily: "Poppins_400Regular",
                            textAlign: "center"
                        }} >
                            {item.title}
                        </Text>
                        <Text style={{
                            fontSize: 14,
                            color: "black",
                            fontFamily: "Poppins_400Regular",
                            textAlign: "center"
                        }} >
                            {item.info}
                        </Text>
                    </View>
                )} />
                </View>
                <View style={{
                    width: "100%",
                    ...flex_row_between,
                    marginBottom: 0,
                    ...generate_padding(20, 20, 20, 20)
                }} >
                    <Button onPress={()=>{
                        go_to_auth("SignUp")
                    }} style={{
                    }} mode="contained" >
                        Sign Up
                    </Button>
                    <Text style={{
                        fontSize: 20,
                        color: "black",
                        fontFamily: "Poppins_400Regular"
                    }} >
                        Or
                    </Text>
                    <Button onPress={()=>{
                        go_to_auth("SignIn")
                    }} mode="contained" >
                        Sign In
                    </Button>
                </View>
            </View>
        )
    }else{
        return(
            <AppLoading/>
        )
    }
    
}

export default InitialScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        ...flex_col_center_top
    },
    logo_text: {
        fontSize: 24,
        color: "rgb(246, 83, 20)",
        fontFamily: "Poppins_600SemiBold",
    },
    sub_text: {
        fontSize: 20,
        color: "black",
        fontFamily: "Poppins_400Regular",
    },
    image_style: {
        width: 200,
        height: 200,
        marginBottom: 15
    }
})

