import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { flex_col_start, flex_row_start, generate_padding } from '../../globalStyles'
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {

    const _icons: React.ReactNode = [
        <MaterialIcons name="all-inbox" size={24} color="black" />,
        <MaterialIcons name="inbox" size={24} color="black" />,
        <MaterialIcons name="group" size={24} color="black" />,
        <MaterialIcons name="local-offer" size={24} color="black" />,
        <MaterialIcons name="star-outline" size={24} color="black" />,
        <MaterialIcons name="query-builder" size={24} color="black" />,
        <MaterialIcons name="label-important" size={24} color="black" />,
        <MaterialIcons name="send" size={24} color="black" />,
        <MaterialIcons name="schedule-send" size={24} color="black" />,
        <MaterialIcons name="outbox" size={24} color="black" />,
        <MaterialIcons name="drafts" size={24} color="black" />,
        <Ionicons name="mail-outline" size={24} color="black" />,
        <MaterialIcons name="report" size={24} color="black" />,
        <AntDesign name="delete" size={24} color="black" />
    ]
    const titles: string = [
        "Home",
        "Primary",
        "Social",
        "Promotions",
        "Starred",
        "Snoozed",
        "Important",
        "Sent",
        "Scheduled",
        "Outbox",
        "Drafts",
        "All mail",
        "Spam",
        "Trash"
    ]
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold
    }) 
    const [active, set_active] = useState([""]);

    const add_active = (t: string)=>{
        set_active([t]);
        props.navigation.navigate(t)
    }

    const drawer_element = (type: string, key: string, title: string )=>{
        return (
            <View key={key} style={{
                width: "100%",
            }} >
                <DrawerItem icon={({...props})=>(_icons[titles.indexOf(title)])} activeBackgroundColor="yellow" style={active[0] == title ? styles.drawer_item_active  : styles.drawer_item}    key={key} label={title} labelStyle={styles.drawer_item_text} onPress={()=>{
                    add_active(title)
                }} />
            </View>
            
        )
    }
    if(fontsLoaded){
        return (
            <DrawerContentScrollView  {...props}>
                <View style={styles.logo_container} >
                    <Text style={styles.logo} >
                        Gmail.
                    </Text>
                </View>
                {props.state.routeNames.map((item, i)=>{
                    return(drawer_element("main", i.toString(), item));
                })}
            </DrawerContentScrollView>
        )
    }else{
        return(
            <AppLoading/>
        )
    }
    
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    logo_container: {
        ...flex_row_start,
        width: "100%",
        height: 50,
        borderBottomColor: "lightgray",
        borderBottomWidth: 0.2,
        ...generate_padding(0,0,0,20)
    },
    logo: {
        fontSize: 24,
        color: "rgb(246, 83, 20)",
        fontFamily: "Poppins_600SemiBold",
    },
    drawer_item: {
        marginLeft: 0,
        height: 50,
    },
    drawer_item_active: {
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        marginLeft: 0,
        backgroundColor: "rgba(66, 133, 244, 0.3)",
        height: 50,
    },
    drawer_item_text: {
        fontSize: 20,
    }
})
