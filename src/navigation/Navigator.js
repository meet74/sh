import React from "react";
import {View,Text,Image} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {MaterialCommunityIcons,Ionicons,FontAwesome} from "@expo/vector-icons";
import Home from "../screens/HomeScreen";
import GoOutScreen from "../screens/GoOutScreen";
import ProScreen from "../screens/ProScreen";
import DonateScreen from "../screens/DonateScreen";


const MainNav=createStackNavigator();
const BottomNavBar=createBottomTabNavigator();

const Navigator=()=>{

    const BottomNavigation=()=>{
        return <BottomNavBar.Navigator tabBarOptions={{showLabel:false}}>
            <BottomNavBar.Screen name="Home" component={Home}  options={{
    tabBarIcon:({focused,color,size})=>{
        if (focused) {
            return <Image style={{height:24,width:24}} source={require('../../assets/images/bag.png')}/>
        } else {
            return  <Image style={{height:24,width:24}} source={require('../../assets/images/bag-outline.png')}/>
        }
    }
}}
/>

<BottomNavBar.Screen name="Go Out" component={GoOutScreen} 
options={{
    tabBarIcon:({focused,color,size})=>{
            if (focused) {
                return  <Image style={{height:24,width:24}} source={require('../../assets/images/footprints.png')}/>
            } else {
                return  <Image style={{height:24,width:24}} source={require('../../assets/images/footprints-outline.png')}/>
            }
    }
}}/>
            <BottomNavBar.Screen name="Pro" component={ProScreen} 
options={{
    tabBarIcon:({focused,color,size})=>{
            if (focused) {
                return <Image style={{height:24,width:24}} source={require('../../assets/images/crown.png')}/>
            } else {
                return <Image style={{height:24,width:24}} source={require('../../assets/images/crown-outline.png')}/>
            }
    }
}}/>
            <BottomNavBar.Screen name="Donate" component={DonateScreen} options={{
    tabBarIcon:({focused,color,size})=>{
        if (focused) {
            return  <Image style={{height:24,width:24}} source={require('../../assets/images/heart.png')}/>
        } else {
            return  <Image style={{height:24,width:24}} source={require('../../assets/images/heart-outline.png')}/>
        }
    
    }
}}/>
        </BottomNavBar.Navigator>
    }
    
    return <NavigationContainer>
        <BottomNavigation/>
    </NavigationContainer>
    
}

export default Navigator



