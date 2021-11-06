import { MaterialIcons } from '@expo/vector-icons'
import React, { ReactNode, useState } from 'react'
import { Dimensions, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import SearchBox from '../components/SearchBox/Index'
import { flex_col_center_top, flex_col_start, flex_row_around, flex_row_between, flex_row_center, generate_padding } from '../globalStyles'
import Carousel from 'react-native-snap-carousel';
import security from "../assets/images/illustrations/security.png"
import ease from "../assets/images/illustrations/ease.png"
import {useFonts, Poppins_400Regular} from "@expo-google-fonts/poppins"
import AppLoading from 'expo-app-loading'
import AccountDetails from '../components/AccountDetails'

const MeetScreen = ({navigation}) => {
    const width = Dimensions.get("screen").width
    const [is_modal_visible, set_modal_visible] = useState(false);
    const [fontsloaded] = useFonts({
        Poppins_400Regular
    })

    const show_modal = () =>{
        set_modal_visible(true)
    }
    const hide_modal = () => {
        set_modal_visible(false)
    }

    const open_drawer = ():void=>{
        navigation.openDrawer()
    }

    const carousel_data: {title: string, info: string, img: typeof ease}[] = [
        {
            title: "Get a link you can share",
            info: "Tap New meeting to get a link you can send to people you want to meet",
            img: ease
        },
        {
            title: "Your meeting is safe",
            info: "No one can join a meeting unless invited or admitted by the host.",
            img: security
        }
    ]

    const b_button = ():ReactNode =>{
        return(
            <TouchableOpacity style={{
                width: "40%",
                ...generate_padding(10, 20, 10,10),
                backgroundColor: "blue",
                borderRadius: 20,
                ...flex_row_center
            }} >
                <Text style={{
                    color: "white",
                    fontSize: 12,
                    fontFamily: "Poppins_400Regular"
                }} >
                    New meeting
                </Text>
            </TouchableOpacity>
        )
    }
    const w_button = ():ReactNode =>{
        return(
            <TouchableOpacity style={{
                width: "40%",
                ...generate_padding(10, 20, 10,10),
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 20,
                ...flex_row_center
            }} >
                <Text style={{
                    color: "blue",
                    fontSize: 12,
                    fontFamily: "Poppins_400Regular"
                }} >
                    Join with a code
                </Text>
            </TouchableOpacity>
        )
    }
    if(fontsloaded){
        return (
            <View style={styles.container} >
                <View style={{
                    width: "100%",
                    ...generate_padding(20, 10, 0, 10),
                    ...flex_row_between,
                    marginBottom: 20
                }} >
                    <Pressable android_ripple={{
                        color: "rgba(153, 238, 255, 0.29)",
                        borderless: true,
                        radius: 20
                    }} onPress={open_drawer} >
                        <MaterialIcons name="menu" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.header_text} >
                        Meet
                    </Text>
                    <Pressable android_ripple={{
                        color: "rgba(153, 238, 255, 0.29)",
                        borderless: true,
                        radius: 20
                    }} onPress={show_modal} >
                        <MaterialIcons name="person" size={24} color="black" />
                    </Pressable>
                </View>
                <View style={{
                    width: width,
                    ...flex_row_between,
                    ...generate_padding(0, 10, 0, 10),
                    marginBottom: 80
                }} >
                    {b_button()}
                    {w_button()}
                </View>
                <Carousel layout="default" data={carousel_data}
                sliderWidth={width}
                itemWidth={0.8*width}
                renderItem={({item, index})=>(
                    <View style={{
                        width: 0.8*width,
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
                <Modal visible={is_modal_visible} transparent={true} animationType="none" >
                    <View style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0,0,0.5)"
                    }} >
                        <AccountDetails hide_modal={hide_modal} />
                    </View>
                    
                </Modal>
            </View>
        )
    }else{
        return(
            <AppLoading/>
        )
    }
    
}

export default MeetScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor:"white",
        padding: 0,
        margin: 0
    },
    header_text: {
        fontSize: 18,
        color: "black",
        fontFamily: "Poppins_400Regular"
    },
    image_style: {
        width: 200,
        height: 200,
        marginBottom: 15
    }
})
