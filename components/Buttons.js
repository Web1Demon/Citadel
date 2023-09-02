import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
const Buttons = ({width,name,color, onpress,icon,pcolor,disabled,border,height}) => {
  return (
    <TouchableOpacity style={[styles.Buttons, height? {height:height}:null,  width? {width:width}:null,  color? {backgroundColor:color}:null, border? {borderRadius:border}:null]}
    onPress={onpress} disabled={disabled}
    >
      <Text style={[styles.text, pcolor? {color:pcolor}: null]}>{name}</Text>

      <AntDesign name={icon} size={24} color="#fff" style={{ marginHorizontal:10}}/>
    </TouchableOpacity>
  )
}

export default Buttons

const styles = StyleSheet.create({
    Buttons:{
      marginVertical:15,
      padding:10,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:7,
    },
    text:
      {color:'#fff',fontSize:17,fontWeight:'800', marginLeft:10}
    
})