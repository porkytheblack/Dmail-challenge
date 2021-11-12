import { PROPERTY_TYPES } from '@babel/types'
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'
import { useSelector } from 'react-redux'
import ListItem from '../components/ListItem/Index'
import SearchBox from '../components/SearchBox/Index'
import { flex_col_center, flex_col_center_top, generate_padding } from '../globalStyles'
import { RootState } from '../redux'
import folder from "../assets/images/illustrations/folder.png"
import nothing from "../assets/images/illustrations/nothing.png"
import starred from "../assets/images/illustrations/starred.png"
import snoozed from "../assets/images/illustrations/snoozed.png"
import trash from "../assets/images/illustrations/trash.png"

const MailScreen = ({navigation}) => {
    const list: number[] = [1,2,3,4,5,6,7,8,9,10,11]
    const screen = useSelector((state: RootState)=>state?.layout.switch_screen)
    console.log(screen)
    if(screen == "Home"){
        return (
            
            <FlatList ListHeaderComponentStyle={{
                marginBottom: 20
            }} ListHeaderComponent={<SearchBox navigation={navigation} />} style={styles.container} keyExtractor={(item, index)=>(index.toString())} data={list}  renderItem={(props)=>(
                <ListItem/>
            )} />
        )
    }else{
        return(
            <View style={styles.container} >
                <SearchBox navigation={navigation} />
                    <View style={{
                        width: "100%",
                        height: "100%",
                        ...flex_col_center_top,
                        paddingTop: 100
                    }} >          
                        <View style={{
                            ...flex_col_center_top
                        }} >
                            {screen == "Snoozed" && <Image style={styles.image_style} source={snoozed} /> }
                            {screen == "Starred" && <Image style={styles.image_style} source={starred} /> }
                            {screen == "Trash" && <Image style={styles.image_style} source={trash} /> }
                            {(screen == "Promotions" || screen == "Social")&&<Image style={styles.image_style} source={nothing} />}
                            {(screen != "Promotions" && screen != "Trash" && screen != "Social" && screen != "Starred" && screen != "Snoozed" )&&<Image style={styles.image_style} source={folder} />}
                            <Text style={styles.text} >Nothing in {screen}</Text>
                        </View>         
                            
                    </View>
            </View>
        )
    }
    
}

export default MailScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        ...generate_padding(20, 5, 20, 5),
        backgroundColor: "white",
    },
    image_style: {
        width: 350,
        height: 150,
        aspectRatio: 16/9,
        marginBottom: 50
    },
    text: {
        color: "black",
        fontSize: 20,
        fontFamily: "Poppins_400Regular"
    }
})
