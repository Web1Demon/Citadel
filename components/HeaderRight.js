import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import logo from '../assets/logoCitadel.png'
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
const HeaderRight = () => {
  return (
    <View>
      <Image style={{width:100,height:20 ,marginHorizontal:15,padding:10,}} source={logo}/>
    </View>
  )
}

export default HeaderRight

const styles = StyleSheet.create({})