import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { flex_col_center, flex_row_between, flex_row_center, flex_row_even, generate_padding } from '../../globalStyles'
import { useFonts, Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { toggle_press } from '../../redux';


const CustomBottomTab = (props: BottomTabBarProps) => {
    let [fontsloaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold
    })
    const dispatch = useDispatch()

    const [active, set_active] = useState(["Mail"]);
    const activate_tab_item = (title: string) =>{
        props.navigation.navigate(title)
        set_active([title])
    }

    const go_to_compose = ()=>{
        dispatch(toggle_press(true))

        props.navigation.navigate("Compose");        
    }

    if(fontsloaded){
        return (
            <View style={styles.container} >
                {active[0] !== "Meet" &&  
                <View style={styles.pressable_float} >
                    <View  style={styles.compose_container} >
                        <TouchableOpacity  style={styles.float_child}  onPress={()=>{go_to_compose()}} >     
                                <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
                                <Text style={styles.tab_text} > Compose</Text>
                        </TouchableOpacity>
                    </View>                
                </View>
                }
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
        backgroundColor: "rgb(222, 234, 237)",
        ...flex_row_even,
        position: 'relative',
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
    },
    compose_container: {
        
        backgroundColor: 'rgba(51, 136, 255, 0.6)',
        borderRadius: 8,
        height: 50,
        elevation: 30,
        shadowColor: 'black'
    },
    float_child: {
        width: "100%",
        height: "100%",
        elevation: 30,
        ...flex_row_between,
        ...generate_padding(0, 10, 0, 10)
    },
    pressable_float: {
        position: 'absolute',
        height: 50,
        top: -80,
        right: 30,
        backgroundColor: "white",
        ...flex_row_center
        
    }
})