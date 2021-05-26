import React from "react";
import {View,Text,StyleSheet,ImageBackground,ActivityIndicator,Dimensions} from "react-native";
import {useFonts,OpenSans_600SemiBold,Amaranth_700Bold,OpenSans_400Regular,OpenSans_700Bold} from "@expo-google-fonts/dev";
import {Entypo,Ionicons,Feather,AntDesign} from "@expo/vector-icons";

const {width}=Dimensions.get('screen')
const Card=props=>{
    const [isloaded]=useFonts({
        OpenSans_600SemiBold,
        Amaranth_700Bold,
        OpenSans_400Regular,
        OpenSans_700Bold
      });
    return(
        <View style={{flexDirection:"row",marginVertical:4}}>
                   {isloaded
                   ?<View style={{height:260,width:width/1.05,backgroundColor:"white",elevation:25,marginVertical:15,alignSelf:"center",borderRadius:15}}>
                   <ImageBackground imageStyle={{borderTopRightRadius:15,borderTopLeftRadius:15}} source={props.image} style={{height:180,width:width/1.05,alignSelf:"center",borderRadius:15}}>
                       <View style={{alignItems:"flex-end"}}>
                       <View style={{height:30,width:30,backgroundColor:"white",borderRadius:50,margin:10}}>
                       <Feather name="bookmark" size={22} color="black" style={{alignSelf:"center",top:3}}/>
                       </View>
                       <View style={{height:20,width:50,backgroundColor:"rgba(255,255,255,0.8)",marginTop:100,marginRight:10,borderRadius:5}}>
                           <Text style={{alignSelf:"center"}}>{props.time} min</Text>
                       </View>
                       </View>
                   </ImageBackground>     
                   <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                       <View style={{margin:10}}>
                       <Text style={{fontFamily:"Amaranth_700Bold",fontSize:20}}>{props.title}</Text>
                   <Text style={{fontFamily:"OpenSans_400Regular",top:2}}>{props.categories}</Text>
                       </View>
                       <View style={{marginTop:20,marginRight:10}}>
                           <View>
                           <View style={{flexDirection:"row",height:22,width:45,backgroundColor:"green",borderRadius:5,alignSelf:"center"}}>
                           <Text style={{color:"white",left:5}}>{props.rating}</Text>
                           <AntDesign name="star" size={14} color="white" style={{left:8,top:2}}/>
                            </View>   
                            </View>   
                           <Text style={{color:"grey"}}>{props.averageprice} for one</Text>
                           </View>
                    </View>   
               </View>
               :<View><ActivityIndicator/></View>
                   }
                    </View>
    )
}

const styles=StyleSheet.create({})

export default Card
