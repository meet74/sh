import React,{useEffect} from 'react'
import {Text,View,StyleSheet,Image,ActivityIndicator,TextInput,Dimensions,FlatList, ScrollView,ImageBackground} from 'react-native'
import {Entypo,Ionicons,Feather,AntDesign} from "@expo/vector-icons";
import {useFonts,OpenSans_600SemiBold,Amaranth_700Bold,OpenSans_400Regular,OpenSans_700Bold} from "@expo-google-fonts/dev";
import Dash from "react-native-dash";
import {Colors} from "../constants/Colors";
import GradientCard from "../components/GradientCard";
import {FAVORITES} from "../data/dummy_data_favorites";
import {CATEGORIES} from "../data/dummy_data_categories";
import {RESTAURANTS} from "../data/dummy_data_restuarants";
import {HEADER} from "../data/dummy_data";
import FavoriteCard from "../components/FavoriteCard";
import CategoriesCard from "../components/CategoriesCard";
import Card from "../components/Card";



const {width}=Dimensions.get('screen')

const HomeScreen=props=>{
    const [isloaded]=useFonts({
        OpenSans_600SemiBold,
        Amaranth_700Bold,
        OpenSans_400Regular,
        OpenSans_700Bold
      });
    return(
        <ScrollView style={{marginTop:55}}>
           {isloaded?<View>
           <View style={{flexDirection:"row",justifyContent:"space-between"}}>
               <View style={{flexDirection:"row",left:10}}>
            <Entypo name="location" size={24} color="#0E0E0E" style={{top:8,marginRight:5}} />
            <View style={{left:10}}>
            <Text style={{fontFamily:"OpenSans_600SemiBold",color:"#0E0E0E",fontSize:21}}>Home- Western Heights..</Text>
            <Dash style={{top:10,width:250}}/>
            </View>
            </View>
            <Image style={{height:40,width:40,borderRadius:50,right:15}} source={require("../../assets/images/profile.jpeg")}/>
            </View>
            <View style={{flexDirection:"row",alignSelf:"center",width:width/1.05,top:20,borderWidth:2,borderColor:"#E4E4E4",height:50,borderRadius:15}}>
            <Ionicons name="search-outline" size={24} color={Colors.primaryColor} style={{margin:10}}/>
            <TextInput placeholder="Restuarant Name, cuisine, or a dish..." style={{fontSize:16,marginLeft:5}}/>
            </View>
            <View style={{top:35}}>
                <FlatList
                data={HEADER}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={itemData=>{
                    return(
                        <View style={{borderWidth:1,height:30,width:100,marginHorizontal:15,borderColor:"grey",borderRadius:5}}>
                        <Text style={{fontSize:13,alignSelf:"center",top:4,fontFamily:"OpenSans_600SemiBold"}}>{itemData.item.value}</Text>
                        </View>
                    )
                }}
                />
            </View>
            <View style={{flexDirection:"row",marginTop:50,justifyContent:"center"}}>
            <GradientCard
            color1='#3CA55C'
            color2='#B5AC49'
            headerText="dosa"
            headerText2="tuesdays"
            subText="feel batter after"
            subText2="monday"
            image={require('../../assets/images/masala-dosa.png')}
            />
             <GradientCard
              color1='#6441A5'
              color2='#2a0845'
              headerText="biiggg"
              headerText2="discounts!"
              subText="get epic deals on your"
              subText2="favorite brand"
              image={require('../../assets/images/food-blogger.png')}
             />
            </View>
            <View style={{marginVertical:20,marginLeft:5}}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={{fontSize:20,fontFamily:"OpenSans_700Bold"}}>Your favorites are open now</Text>
                <Text style={{color:Colors.primaryColor,margin:5,fontFamily:"OpenSans_600SemiBold",right:5}}>view history</Text>
            </View>
            <FlatList
            data={FAVORITES}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={(itemData)=>{
                return(
                   <FavoriteCard
                   title={itemData.item.title}
                   time={itemData.item.time}
                   discount={itemData.item.discount}
                   upto={itemData.item.upto}
                   image={itemData.item.image}
                   />
                )
            }}
            />
             </View>
             <View style={{marginLeft:5}}>
             <Text style={{fontSize:22,fontFamily:"OpenSans_700Bold",marginBottom:20}}>Eat what makes you happy</Text>
                 <FlatList
                 data={CATEGORIES}
                 numColumns={4}
                 renderItem={itemData=>{
                     return(
                         <CategoriesCard
                         image={itemData.item.image}
                         title={itemData.item.title}
                         />
                     )
                 }}
                 />
             </View>  
             <View style={{marginTop:10,marginLeft:5}}>
                 <Text style={{fontSize:22,fontFamily:"OpenSans_700Bold"}}>302 restuarants around you</Text>
                 <View>
                     <FlatList
                     data={RESTAURANTS}
                     renderItem={itemData=>{
                         return(
                             <Card
                             title={itemData.item.title}
                             image={itemData.item.image}
                             categories={itemData.item.categories}
                             time={itemData.item.time}
                             rating={itemData.item.rating}
                             averageprice={itemData.item.averageprice}
                             />
                         )
                     }}
                     />
                 </View>
            </View>  
            </View>
            :<View><ActivityIndicator/></View>}
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    
})

export default HomeScreen
//`#3CA55C`,`#B5AC49`