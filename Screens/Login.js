import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 

import InputComponet from '../components/InputComponet';
import Buttons from '../components/Buttons';
import { object, ref, string,} from 'yup';
import {Formik} from 'formik';


const Login = ({navigation}) => {
  const HnadlesignIn=()=>{
    navigation.navigate('Home')
  }
  let userSchema = object({
    email: string().email('Please enter a valid email').required('An Email Is Required'),
    password: string().required('Password is required').min(6, 'Password should not be Below 6 characters'),
  });
  const [ontap,setOntap]=useState(true);
  return (
    <View style={{marginTop:100,}}>
      <View style={{gap:20, marginLeft:20}}>
          <Text style={{fontWeight:'600',fontSize:30,color:'#fff'}} >Welcome, Log in</Text>
          <Text style={{fontSize:16,marginLeft:0,fontWeight:'400',color:'#fff'}}>Log in with the following options</Text>
      </View>
      <View   style={{flexDirection:'row', marginLeft:40,marginTop:20}} >
      <TouchableOpacity  style={{backgroundColor:'#B0AFEC', borderRadius:9, padding:15}} >
        <AntDesign name="google" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#B0AFEC', marginHorizontal:50, borderRadius:9, padding:15}}>
      <AntDesign name="apple1" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#B0AFEC', borderRadius:9, padding:15}}>
      <AntDesign name="facebook-square" size={24} color="black" />
      </TouchableOpacity>
      </View>
     <Formik initialValues={{email:'',password:'',}} validationSchema={userSchema}
     onSubmit={(value)=> HnadlesignIn(value.email, value.password,value.name,value.retype) }>
     {({handleBlur,handleSubmit,handleChange,values,isValid,errors})=>(
      <>
      <View style={{marginHorizontal:20,marginTop:20}}>
      <InputComponet name={'Email'} placeholder={'Email'}
      onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
      value={values.email}
      />
      {errors.email&& (
        <Text style={{color:'red'}}>{errors.email || 'ghjkoiduhjkdoijogpoiuidoij'}</Text>
      )}
      <InputComponet name={'Password'}
      onChangeText={handleChange('password')}
      onBlur={handleBlur('password')}
      value={values.password}
      placeholder={'Email Password'} eye={ontap? 'eye-off-sharp':'eye-outline'} 
      secure={ontap} onpress={()=> setOntap(!ontap)}/>
      {errors.password&& (
        <Text style={{color:'red'}}>{errors.password || 'ghjkoiduhjkdoijogpoiuidoij'}</Text>
      )}
    </View>
    <View>
    <View style={{marginHorizontal:20,gap:20,}}>
    <Buttons name={'Log in'} color={isValid? '#02006C':'#75749c'} onpress={handleSubmit} disabled={!isValid}/>
     <TouchableOpacity onPress={()=> navigation.navigate('signup')}>
       <Text style={{marginHorizontal:10,fontSize:16, width:'100%',textAlign:'center',color:'#fff'}}>Don't have an account? <Text style={{color:'#02006C',textDecorationLine:'underline'}}>Sign up</Text></Text>
     </TouchableOpacity>
     </View>
     </View>
     </>
     )}
      
        </Formik>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({})