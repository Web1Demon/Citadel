import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import welcome from '../assets/welcome.png'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Jioned = () => {
    const navigation=useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Selected')
        },3000)
    },[])
  return (
    <View>
      <Image source={welcome} style={styles.welcome}/>
      <View style={{position:'absolute', justifyContent:'center',alignItems:'center',top:350,gap:20}}>
      <Animatable.View animation="slideInDown" >
       <Progress.Circle size={50} indeterminate={true} style={{marginLeft:20}} />
       </Animatable.View>
       <Animatable.Text animation="zoomInUp" 
       style={{textAlign:'center',color:'#fff',fontWeight:'600',
       marginHorizontal:20,marginLeft:40,fontSize:20}}>You have joined millions of 
       streamers to experience God's Citadel</Animatable.Text>
      </View>
    </View>
  )
}

export default Jioned

const styles = StyleSheet.create({
    welcome:{
        width:'100%',
        height:Dimensions.get('window').height*1.05,
        position:'relative',
    }
})