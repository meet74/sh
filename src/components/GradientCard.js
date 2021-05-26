import React from 'react'
import {View,Text,StyleSheet,Image,Dimensions,ActivityIndicator} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {Ionicons} from '@expo/vector-icons'
import {useFonts,OpenSans_800ExtraBold,Metrophobic_400Regular} from "@expo-google-fonts/dev";
//#6441A5
//#2a0845
const {width}=Dimensions.get('screen')
const GradientCard=props=>{
    const [isloaded]=useFonts({
        OpenSans_800ExtraBold,
        Metrophobic_400Regular
      });
    return(
        <LinearGradient
            colors={[`${props.color1}`,`${props.color2}`]}
            style={{width:width/2.2,height:230,margin:10,borderRadius:15}}>
                {isloaded?<View style={{padding:10}}>
                <Text style={styles.headerText}>{props.headerText}</Text>
                <Text style={styles.headerText2}>{props.headerText2}</Text>
                <Text style={styles.subText}>{props.subText} </Text>
                <Text style={styles.subText}>{props.subText2}</Text>
                <View style={{flexDirection:"row"}}>
                    <View>
                
                <Ionicons name="arrow-forward-circle" size={24} color="white" style={styles.icon}/>
                </View>
                <Image style={styles.image} source={props.image}/>
                </View>
                </View>:<View><ActivityIndicator/></View>}
            </LinearGradient>
    )
}

const styles=StyleSheet.create({
    headerText:{
        color:"white",
        margin:10,
        fontSize:30,
        fontFamily:"OpenSans_800ExtraBold"
    },
    headerText2:{
        color:"white",
        fontFamily:"Metrophobic_400Regular",
        bottom:20,
        left:10,
        fontSize:30
    },
    subText:{
        color:"white",
        bottom:15,
        left:10
    },
    image:{
        height:90,
        width:90,
        marginLeft:60,
        bottom:25
    },
    icon:{
    bottom:10,
    left:8
    }

})

export default GradientCard