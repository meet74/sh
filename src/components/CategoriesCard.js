import React from "react";
import {View,Text,StyleSheet,Image,ActivityIndicator} from "react-native";
import {useFonts,OpenSans_600SemiBold,Amaranth_700Bold,OpenSans_400Regular,OpenSans_700Bold} from "@expo-google-fonts/dev";

const CategoriesCard=props=>{
    const [isloaded]=useFonts({
        OpenSans_600SemiBold,
        Amaranth_700Bold,
        OpenSans_400Regular,
        OpenSans_700Bold
      });
    return(
        <View style={{flexDirection:"row",marginVertical:4}}>
                   {isloaded
                   ?<View>
                   <Image style={{height:100,width:100}} source={props.image}/>
                   <Text style={{fontFamily:"OpenSans_700Bold",fontSize:15,alignSelf:"center",marginVertical:10}}>{props.title}</Text>
               </View>
               :<View><ActivityIndicator/></View>
                   }
                    </View>
    )
}

const styles=StyleSheet.create({})

export default CategoriesCard
