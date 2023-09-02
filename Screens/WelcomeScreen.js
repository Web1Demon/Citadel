import { Dimensions, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Buttons from '../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logoCitadel.png';
const WelcomeScreen = () => {
  const navigation =useNavigation();
  return (
    <View color={['red', 'black']} style={styles.container}>
        <View style={styles.textCon}>
        <Text style={styles.text}>Welcome,</Text>
        <Text style={{color:'grey',fontStyle:'italic',fontSize:30}}> Join millions to experience God</Text>
         <Image style={{width:160,height:100}} source={logo}/>
         
        </View>
        <View style={{marginTop:20,justifyContent:'center',alignItems:'center'}}>
        <Buttons width={'60%'} name={'Sign Up For Free'} color={'#02006C'} 
        onpress={()=> navigation.navigate('signup')}
        />
        <Buttons width={'80%'} name={'Continue with Google'} color={'#02006C'}
        onpress={()=> console.warn('GOOGLE IN PROGRESS')}
        icon={'google'}
        />
        <Buttons width={'70%'} name={'Continue with Apple'} color={'#02006C'}
        icon={'apple1'}
        onpress={()=> console.warn('APPLE IN PROGRESS')}
        />
        <Buttons width={'80%'} name={'Continue with Facebook'} color={'#02006C'}
        onpress={()=> console.warn('FACEBOOK IN PROGRESS')}
        icon={'facebook-square'}
        />
        <Buttons width={'80%'} name={'Already have an account? Sign In'}
        onpress={()=> navigation.navigate('login')}
        />
        </View>
      <StatusBar style='light'/>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
      height: Dimensions.get('window').height*7,
      width:'100%',
      backgroundColor:'#000',
    },
    text:{
        color:'#fff',
        fontSize:50,
        fontWeight:'700'
    },
    textCon:{
        marginTop:80,
        marginLeft:30
    }
})