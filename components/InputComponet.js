import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
const InputComponet = ({name,placeholder,onBlur,onChangeText,value,secure,eye,onpress}) => {

  return (
    
    
        <View style={{marginVertical:10}}>
        <Text style={{fontSize:16,color:'#fff',fontWeight:'bold'}}>{name}</Text>
        <TextInput
         placeholder={placeholder}
         placeholderTextColor={'#fff'}
         style={[styles.input,]}
         onChangeText={onChangeText}
         value={value}
         onBlur={onBlur}
         secureTextEntry={secure}
        />
        <Ionicons onPress={onpress} name={eye} size={24} color="#fff" style={{marginLeft:290,marginTop:34,position:'absolute'}}/>
        </View>
      
      
  )
}

export default InputComponet

const styles = StyleSheet.create({
    input:{
        borderWidth:2,
        borderColor:'#fff',
        padding:10, 
        borderRadius:6,
        width:'100%',
        marginRight:70,
        position:'relative',
        color:'#fff'
    }
})