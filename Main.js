import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./Screens/WelcomeScreen";
import SignUp from "./Screens/SignUp";
import Login from "./Screens/Login";
import Finishing from "./Screens/Finishing";
import Jioned from "./Screens/Jioned";
import Selected from "./Screens/Selected";
import Home from "./Screens/Home";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HeaderRight from "./components/HeaderRight";
import HeaderLeft from "./components/HeaderLeft";
import SubcribedScreen from "./Screens/SubcribedScreen";
import Livescreen from "./Screens/Livescreen";
import VideoDetails from "./Screens/VideoDetails";
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'

const Stack = createStackNavigator();

const TabTop = createMaterialTopTabNavigator();

function MyTabsUp() {
  return (
    <TabTop.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarInactiveTintColor:'#fff',
        tabBarActiveTintColor: "#3936db",
        tabBarLabelStyle: { fontSize: 13,width:'100%' },
        tabBarIndicatorStyle:{
        backgroundColor:'#1e1ba3',

      },
      tabBarStyle: { backgroundColor: '#000' },

    }}
    >
      <TabTop.Screen
        name="For You"
        component={Home}
        options={{
          swipeEnabled: true,
        }}
      />
      <TabTop.Screen
        name="Subscription"
        component={SubcribedScreen}
        options={{
          swipeEnabled: true,
        }}
      />
      <TabTop.Screen name="Live" component={Livescreen}
      options={{
        tabBarActiveTintColor:'#e91e63',
        tabBarInactiveTintColor:'#fff',
        tabBarLabel:()=> false,
        tabBarIconStyle:{width:100,alignItems:'center',},
        tabBarIcon:({color,})=>(
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <MaterialIcons name="stream" size={20} color={color} />
          <Text style={{ marginLeft:3,color:color,}}>LIVE</Text>
          </View>
          
       )
      }} />
    </TabTop.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      activeColor="black"
      inactiveColor="grey"
      barStyle={{ backgroundColor: "#000" }}
    >
      <Tab.Screen
        name="Home"
        component={MyTabsUp}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Music"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="library-music" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="upload"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="upload-multiple"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-people-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Libary"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="library" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Main = () => {
  const [Fontstyle]=useFonts({
    'DanceScript':require('./assets/static/DancingScript-Regular.ttf')
  })
  if(!Fontstyle){
    return <AppLoading/>
  }
  return (
    <Stack.Navigator
      
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerShadowVisible:false
      }}
    >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="Finishing" component={Finishing} />
      <Stack.Screen name="joined" component={Jioned} />
      <Stack.Screen name="Selected" component={Selected} />
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{
          headerShown: true,
          headerStyle:{backgroundColor:'#000'},
          headerLeft: () => (
            <View> 
              <Text style={{color:'grey',marginLeft:30,fontSize:30,fontFamily:'DanceScript',}}>Citadel</Text>
            </View>
          ),
          title: "",
          headerRight: () => <HeaderLeft />,
        }}
      />
      <Stack.Screen name="video" component={VideoDetails} />
    </Stack.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
