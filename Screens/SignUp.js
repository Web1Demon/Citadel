import {  ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar} from 'expo-status-bar';
import InputComponet from '../components/InputComponet';
import { object, ref, string,} from 'yup';
import {Formik} from 'formik';
import Buttons from '../components/Buttons';
import { Toast } from 'react-native-toast-message/lib/src/Toast';


const SignUp = ({navigation}) => {
  let userSchema = object({
    email: string().email('Please enter a valid email').required('An Email Is Required'),
    password: string().required('Password is required').min(6, 'Password should not be Below 6 characters'),
    name:string().required('Input your name').min(6,'Name should not be below 6'),
    retype: string().oneOf([ref('password'),null],'Password must match').required('Password is required')
    
  });
  const HnadleSignup=()=>{
    navigation.navigate('Finishing')
    Toast.show({
      type:'success',
      text1:'SUCESSFULLY CREATED AN ACCOUNTED',
      text2:'You Have Sucessfully created your account PLease complete your profilr here '
     })
  }
  
  return (
   
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={{marginHorizontal:7, fontSize:25,fontWeight:'600',textAlign:'center',color:'#fff'}}>Sign Up for free to start listening.</Text>
      </View>
      <ScrollView>
      <Formik initialValues={{email:'',password:'',name:'',retype:''}} validationSchema={userSchema}
      onSubmit={(value)=> HnadleSignup(value.email, value.password,value.name,value.retype) }
      >
      {({handleBlur,handleChange,handleSubmit,values,isValid,errors,})=>(
        <View style={styles.inpot}>
        <InputComponet name={'What is Your Name?'} placeholder={'Enter Your Name 🌠'}
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        value={values.name}
        />

        {errors.name&& (
          <Text style={{color:'red'}}>{errors.name || ''}</Text>
        )}
        <InputComponet name={'Email'} placeholder={'Machel123@gmail.com '}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        />
        {errors.email&& (
          <Text style={{color:'red'}}>{errors.email || 'ghjkoiduhjkdoijogpoiuidoij'}</Text>
        )}
        <InputComponet name={'Password'} placeholder={'Enter A Password'}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        secure
        />
        
        {errors.password&& (
          <Text style={{color:'red'}}>{errors.password || 'ghjkoiduhjkdoijogpoiuidoij'}</Text>
        )}
        <InputComponet name={'Confirm your Password'} placeholder={'Confirm Your password'}
        onChangeText={handleChange('retype')}
        onBlur={handleBlur('retype')}
        value={values.retype}
        secure
        />
        {errors.retype && (
          <Text style={{color:'red'}}>{errors.retype || 'ghjkoiduhjkdoijogpoiuidoij'}</Text>
        )}
        <View style={{marginTop:20}}>
        <Buttons name={'Create An Account'} color={isValid? '#02006C':'#75749c'} onpress={handleSubmit} disabled={!isValid}/>
        <TouchableOpacity onPress={()=> navigation.navigate('login')}>
          <Text style={{marginHorizontal:10,fontSize:16, width:'100%',textAlign:'center',color:'#fff'}}>Already have an account? <Text style={{color:'#02006C',textDecorationLine:'underline'}}>Login</Text></Text>
          </TouchableOpacity>
        </View>
        
        </View>
      )}
      
      </Formik>
      </ScrollView>
     
      <StatusBar style='light'/>
    </View>
   
  )
}

export default SignUp;

const styles = StyleSheet.create({
    inpot:{
      marginTop:70,
      marginHorizontal:30,
    },
 container:{
    marginTop:60,
 },
 Back:{
    borderRadius:10,
    borderWidth:1,
    borderColor:'#ccc',
    padding:10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,
elevation: 24,
 },
 header:{
    flexDirection:'row',
    alignItems:'center', 
    marginLeft:20,
    justifyContent:'center'
 }
})