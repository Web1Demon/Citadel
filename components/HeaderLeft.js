import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import logo from '../assets/logo.png'
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HeaderLeft = () => {
  const navigation=useNavigation();
  return (
    <View style={{flexDirection:'row', marginHorizontal:20,alignItems:'center',justifyContent:'center'}}>

    <TouchableOpacity onPress={()=>navigation.navigate('welcome')}>
    <AntDesign name="search1" size={20} color="#fff" />
    </TouchableOpacity>
    <TouchableOpacity>
    <Entypo name="notification" size={20} color="#fff" style={{marginHorizontal:10}} />
    </TouchableOpacity>
    <TouchableOpacity>
    <Ionicons name="person" size={20} color="#fff" />
    </TouchableOpacity>

    </View>
  )
}

export default HeaderLeft;

const styles = StyleSheet.create({})