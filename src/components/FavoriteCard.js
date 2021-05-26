import React from "react";
import {View,Text,StyleSheet,Image,ActivityIndicator} from "react-native";
import {useFonts,OpenSans_600SemiBold,Amaranth_700Bold,OpenSans_400Regular,OpenSans_700Bold} from "@expo-google-fonts/dev";

const FavoriteCard=props=>{
    const [isloaded]=useFonts({
        OpenSans_600SemiBold,
        Amaranth_700Bold,
        OpenSans_400Regular,
        OpenSans_700Bold
      });
    return(
        <View style={{flexDirection:"row",marginVertical:15,marginHorizontal:10}}>
                   {isloaded
                   ? <View style={{flexDirection:"row"}}>
                       <View> 
                   <Image style={{height:90,width:90,borderRadius:15}} source={props.image}/>
               </View>
               <View style={{marginHorizontal:10,marginTop:5}}>
                   <Text style={{fontFamily:"OpenSans_700Bold"}}>{props.title.substring(0,13)}...</Text>
                   <Text style={{color:"grey"}}>{props.time} minutes</Text>
                   <Text style={{color:"blue",fontFamily:"OpenSans_600SemiBold"}}>{props.discount}% up to ₹{props.upto}</Text>
               </View>
                   </View>
               :<View><ActivityIndicator/></View>
                   }
                    </View>
    )
}

const styles=StyleSheet.create({})

export default FavoriteCard
