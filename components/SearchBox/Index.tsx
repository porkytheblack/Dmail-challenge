import { MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { flex_row_between, flex_row_center, flex_row_start, generate_padding } from '../../globalStyles'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { useDispatch, useSelector } from 'react-redux';
import { action_drawer_out, RootState } from '../../redux';
import Navigation from '../../navigation';
import AccountDetails from '../AccountDetails';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-initials-sprites';
import Svg from 'react-native-svg';

const SearchBox = ({navigation}) => {
    const [user_obj, set_user_obj] = useState({})
    const user = useSelector((state: RootState)=>state.user.user)
    if(user){
        set_user_obj(user)
    }
    let Initials = createAvatar(style, {
        seed: `${user.first_name}`,
      });
    const dispatch = useDispatch();
    const [is_ModalVisible, set_is_ModalVisible] = useState(false);
    const show_modal = () =>{
        set_is_ModalVisible(true)
    }
    const hide_modal = () =>{
        set_is_ModalVisible(false)
    }
    const drawer = () =>{
        navigation.openDrawer()
    }
    const search = ()=>{
        navigation.navigate("Modal")
    }
    let [fontsLoaded] = useFonts({
        Poppins_400Regular
    })
    if(fontsLoaded){
        return (
            <View style={styles.container} >
                <View style={styles.search_box} >
                    <View style={styles.pressable_container} >
                        <Pressable onPress={drawer}   >
                            <MaterialIcons name="menu" size={24} color="black" />
                        </Pressable>
                    </View>
                    <View>
                    <Pressable android_ripple={{
                            color: "white",
                            borderless: true,
                            radius: 100
                        }} onPress={search} >
                            <View style={styles.search_text_container} >
                                <Text style={styles.text_input} >
                                    Search
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                    <Pressable onPress={()=>{
                        show_modal()
                    }} >
                        <Initials/>
                        {/* <MaterialIcons name="person" size={24} color="black" /> */}
                    </Pressable>
                    
                </View>
                <Modal visible={is_ModalVisible} transparent={true} animationType="none" >
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

export default SearchBox

const styles = StyleSheet.create({
    container : {
        height: 50,
        width: "100%",
        ...flex_row_center
    },
    search_box: {
        ...flex_row_between,
        width: 350,
        height: 50,
        borderRadius: 15,
        backgroundColor: "rgba(153, 238, 255, 0.29)",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 16,
        paddingRight: 16
    },
    search_text_container:{
        height: "100%",
        width: 250,
        ...flex_row_start
    },
    text_input: {
        color: "rgb(154, 147, 147)",
        fontSize: 18,
        fontFamily: "Poppins_400Regular",
        width: "100%",
        ...flex_row_start
    },
    pressable_container: {
        ...generate_padding(2,5,2,5),
        borderRadius: 5,
        marginRight: 20
    }
})
