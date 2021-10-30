import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { flex_row_between, flex_row_center, flex_row_start, generate_padding } from '../../globalStyles'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { useDispatch } from 'react-redux';
import { action_drawer_out } from '../../redux';
import Navigation from '../../navigation';

const SearchBox = ({navigation}) => {
    const dispatch = useDispatch();
    const drawer = () =>{
        navigation.openDrawer()
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
                    
                    <View style={styles.search_text_container} >
                        <Text style={styles.text_input} >
                            Search
                        </Text>
                    </View>
                    <MaterialIcons name="person" size={24} color="black" />
                </View>
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
        ...flex_row_start
    },
    pressable_container: {
        ...generate_padding(2,5,2,5),
        borderRadius: 5,
        marginRight: 20
    }
})
