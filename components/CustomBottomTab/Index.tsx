import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { flex_col_center, flex_row_center, flex_row_even, generate_padding } from '../../globalStyles'
import { useFonts, Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


const CustomBottomTab = (props: BottomTabBarProps) => {
    let [fontsloaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold
    })

    const [active, set_active] = useState(["Mail"]);
    const activate_tab_item = (title: string) =>{
        props.navigation.navigate(title)
        set_active([title])
    }

    if(fontsloaded){
        return (
            <View style={styles.container} >
                {props.state.routeNames.map((title, index)=>{
                    return(
                        <Pressable key={index} onPress={()=>{
                            activate_tab_item(title)
                        }} style={styles.tab_container} >
                            <View style={styles.inner_container} >
                                <View style={active.indexOf(title) != -1 ? {...styles.tab_item_active} : {...styles.tab_item_inactive} } >
                                    {title == "Mail" ? (active[0] == "Mail" ?  <MaterialIcons name="mail" size={24} color="black" /> : <MaterialIcons name="mail-outline" size={24} color="black" /> ) : (active[0] == "Meet" ?  <MaterialIcons name="videocam" size={24} color="black" /> : <Ionicons name="md-videocam-outline" size={24} color="black" /> )}
                                </View>
                                <Text style={styles.tab_text} >
                                    {title}
                                </Text>
                            </View>
                        </Pressable>
                    )
                })}
            </View>
        )
    }else{
        return (
            <AppLoading/>
        )
    }
    
}

export default CustomBottomTab
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 65,
        backgroundColor: "rgb(240, 244, 245)",
        ...flex_row_even
    },
    tab_container: {
        width: "50%",
        height: "100%",
        ...flex_row_center,
        marginBottom: 5,
    },
    tab_item_inactive: {

        ...generate_padding(2, 10, 2, 10),
        ...flex_row_center,
        marginBottom: 5
    },
    tab_item_active: {
        borderRadius: 15,
        ...generate_padding(2, 10, 2, 10),
        ...flex_row_center,
        marginBottom: 5,
        backgroundColor: "rgba(51, 136, 255, 0.3)"
    },
    inner_container: {
        height: "80%",
        paddingTop: 5,
        ...flex_col_center,
        
    },
    tab_text: {
        fontSize: 14,
        fontFamily: "Poppins_400Regular"
    }
})