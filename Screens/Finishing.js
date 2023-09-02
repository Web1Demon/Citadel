import { Linking, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { boolean, number, object,string,} from 'yup';
import {ErrorMessage, Formik } from 'formik';
import Buttons from '../components/Buttons';
import { StatusBar } from 'expo-status-bar';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const Finishing = ({navigation}) => {
  const HandleFinishing=()=>{
    if(accepted===false){
       return Toast.show({
        type:'error',
        text1:'Sorry!!',
        text2:'You must Read our Terms and conditions/privacy policy '
       })
    }
navigation.navigate('joined')
    // run your authetication backend hereeee

  }
  const [selected,setSelected]=useState('Male');
  const [accepted,setAccepted]=useState(false);
  const MONTH_REGEX='^(0?[1-9]|1[012])$';
  const YEAR_REGEX='(?:(?:18|19|20|21)[0-9]{2})';
  const Day_REGEX='^(3[01]|[12][0-9]|0?[1-9])$';
    let userSchema = object({
       month: string().matches(MONTH_REGEX, "Don't use words But numbers").required('Your month is required'),
       year: string().matches(YEAR_REGEX, "Don't use words But numbers").required('Your  is required'),
       day: string().matches(Day_REGEX, "Don't use words But numbers").required('Your  is required'),
      });
      const Gender= ['Male','Female','Prefer not to say']
const HandleLink=(url)=>{
  Linking.openURL(url)
}
const Term='https://www.freeprivacypolicy.com/live/e63f8cf3-ef11-4558-95a0-4b6cb6161836'
const Policy='https://www.freeprivacypolicy.com/live/ec4e5582-11bc-4449-9b3c-7e9b7eee8396'
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <Text style={{ fontSize:30,fontWeight:'600',color:'#fff'}}>Finishing Up...</Text>
    </View>
    <Formik initialValues={{day:'',month:'',year:''}}
    validationSchema={userSchema}
    onSubmit={(value)=> HandleFinishing(value)}
    >
    {({handleBlur,handleSubmit,handleChange,values,isValid,errors})=>(
      <View>

      <View style={{marginHorizontal:20,marginTop:30,gap:25}}>
      <Text style={{fontSize:16,fontWeight:'600',color:'#fff'}}>What is your date of birth?</Text>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <View style={styles.day}>
      <Text>Day</Text>
      <TextInput placeholder='DD' onChangeText={handleChange('day')} onBlur={handleBlur('day')} value={values.day} style={{borderWidth:1,paddingHorizontal:15, borderColor: errors.day?'red':'#fff', borderRadius:5,color:'white'}} placeholderTextColor={'#fff'} />
      </View>
      <View style={styles.month} >
      <Text>Month</Text>
      <TextInput onChangeText={handleChange('month')} onBlur={handleBlur('month')} value={values.month} placeholder='Month' style={{borderWidth:1,paddingHorizontal:15, borderColor: errors.month?'red':'#fff',borderRadius:5, color:'white'} } placeholderTextColor={'#fff'}/>
      </View>
      <View style={styles.year}>
      <Text>Year</Text>
      <TextInput placeholder='YYYY' onChangeText={handleChange('year')} onBlur={handleBlur('year')} value={values.year}  style={{borderWidth:1,paddingHorizontal:15, borderColor: errors.year?'red':'#fff',borderRadius:5,color:'white'}} placeholderTextColor={'#fff'}/>
      </View>
      </View>
      </View>

  

    <View style={{marginHorizontal:20,marginTop:60,gap:25}}>
    <Text style={{fontSize:16,fontWeight:'600',color:'#fff'}}>What is your gender?</Text>
    <View>
     <ScrollView horizontal style={{}}>
    {Gender.map((item,index)=>(
      <TouchableOpacity onPress={()=>setSelected(item)} style={[styles.Gender, item===selected? {backgroundColor:'#ccc'}:null]} key={index}>
      <Text style={{color:selected==item? '#000':'#fff'}}>{item}</Text>
      </TouchableOpacity>
    ))}
    </ScrollView>
    
    </View>
    </View>


    <View style={{marginHorizontal:20,marginTop:30}}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
     
    
    </View>
    </View>
    <View style={{gap:2,marginTop:30}}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
   
      <MaterialIcons name={accepted?"radio-button-checked" :"radio-button-unchecked" } size={24} color="#fff" style={{marginLeft:35}} onPress={()=>  setAccepted(!accepted)} />
      <View style={{marginRight:40}}>
      <Text style={{textAlign:'center',marginHorizontal:10, fontSize:16 ,color:'#fff' }}>I agree to  
       <Text style={{color:'#5352a5',textDecorationLine:'underline'}} onPress={()=> HandleLink(Term)}  > Terms and Condition </Text> and 
       <Text style={{color:'#5352a5',textDecorationLine:'underline'}} onPress={()=> HandleLink(Policy)} > Privacy Policy</Text></Text>
      </View>
    
    </View>
   </View>

    <View style={{alignItems:'center',marginTop:60}}>
    <Buttons border={50} name={'Complete'} 
    color={isValid? '#02006C':'#75749c'} width={'45%'} onpress={handleSubmit} disabled={!isValid}  />
    </View>
    </View>
    )}
  </Formik>
    <StatusBar style='light'/>
    </View>
  )
}

export default Finishing;

const styles = StyleSheet.create({
  container:{
    marginTop:80,
    
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
 },
Gender:{
  flexDirection:'row',
  alignItems:'flex-start',
  marginHorizontal:10,
  padding:10,
  justifyContent:'center',
  borderRadius:10
},
month:{
  marginHorizontal:20,
}
})