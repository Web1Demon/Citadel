import { StyleSheet, Text, TextInput, View ,Image,ScrollView, FlatList,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons'; 
import Buttons from '../components/Buttons';
import { useNavigation } from '@react-navigation/native';


const Selected = () => {
  const navigation=useNavigation();
  const [selected,setSelected]=useState(
    [
      {
        id:1,
        image:'data:image/jpeg;base64,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',
        name:'Frank Edwards',
        select:false,
        subscribe:false
      },
      {
        id:2,
        image:'data:image/jpeg;base64,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',
        name: 'Hill songs',
        select:false,
        subscribe:false
      },
      {
        id:3,
        image:'https://img.freepik.com/free-photo/good-deal-right-corner-confident-pleasant-friendly-looking-african-american-gorgeous-woman-with-afro-haircut-asking-check-out-visit-store-page-pointing-finger-left-smiling-looking-camera_1258-85037.jpg?size=626&ext=jpg&ga=GA1.2.208987021.1687545198&semt=sph',
        name:'Eben Ebere',
        select:false,
        subscribe:false
      },
      {
        id:4,
        image:'https://img.freepik.com/free-photo/african-american-woman-with-phone-laptop-cafe_1303-8926.jpg?size=626&ext=jpg&ga=GA1.2.208987021.1687545198&semt=sph',
        name:'Mackverick city',
        select:false,
        subscribe:false
      },
      {
        id:5,
        image:'https://img.freepik.com/free-photo/african-american-student-walking-street-talking-phone_1303-12696.jpg?size=626&ext=jpg&ga=GA1.2.208987021.1687545198&semt=sph',
        name:'Ebube okeke',
        select:false,
        subscribe:false
      },
      {
        id:6,
        image:'https://img.freepik.com/free-photo/shallow-focus-shot-young-black-male-grey-wall_181624-42418.jpg?size=626&ext=jpg&ga=GA1.2.208987021.1687545198&semt=sph',
        name:'Frank Edwards',
        select:false,
        subscribe:false
      },
      {
        id:7,
        image:'https://img.freepik.com/free-photo/good-deal-right-corner-confident-pleasant-friendly-looking-african-american-gorgeous-woman-with-afro-haircut-asking-check-out-visit-store-page-pointing-finger-left-smiling-looking-camera_1258-85037.jpg?size=626&ext=jpg&ga=GA1.2.208987021.1687545198&semt=sph',
        name:'Frank Edwards',
        select:false,
        subscribe:false
      },
      {
        id:8,
        image:'https://img.freepik.com/premium-photo/concept-people-with-young-man-yellow-background_185193-81811.jpg?w=740',
        name:'Vimah prince',
        select:false,
        subscribe:false
      },
      {
        id:85,
        image:'https://img.freepik.com/premium-photo/concept-people-with-young-man-yellow-background_185193-81811.jpg?w=740',
        name:'Vimah prince',
        select:false,
        subscribe:false
      },
      {
        id:809,
        image:'https://img.freepik.com/premium-photo/concept-people-with-young-man-yellow-background_185193-81811.jpg?w=740',
        name:'Vimah prince',
        select:false,
        subscribe:false
      },
      {
        id:8,
        image:'https://img.freepik.com/premium-photo/concept-people-with-young-man-yellow-background_185193-81811.jpg?w=740',
        name:'Vimah prince',
        select:false,
        subscribe:false
      },
      {
        id:89,
        image:'https://img.freepik.com/premium-photo/concept-people-with-young-man-yellow-background_185193-81811.jpg?w=740',
        name:'Vimah prince',
        select:false,
        subscribe:false
      },
      {
        id:83,
        image:'https://img.freepik.com/premium-photo/concept-people-with-young-man-yellow-background_185193-81811.jpg?w=740',
        name:'Vimah prince',
        select:false,
        subscribe:false
      },
      {
        id:81,
        image:'https://img.freepik.com/premium-photo/concept-people-with-young-man-yellow-background_185193-81811.jpg?w=740',
        name:'Vimah prince',
        select:false,
        subscribe:false
      },
    ]
  )
  const Handler=(item)=>{
      const Newdata= selected.map((val)=>{
        if(val.id===item.id){
          console.log(selected)
            return {...val, select:!val.select}
        }else{
          return val;
        }
      })
      setSelected(Newdata)
  }
let numColumns= 2;
  return (
    <View style={{marginTop:50}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginBottom:20}}>
      <TouchableOpacity onPress={()=> navigation.navigate('Home')} >
         <Text style={{color:'#645abf'}}>Skip</Text>
         </TouchableOpacity>
         
         <TouchableOpacity onPress={()=> selected[0].select.valueOf(0)? navigation.navigate('Home'):navigation.navigate('Selected')}>
          <Text style={{color:'#645abf'}}>Next</Text>
          </TouchableOpacity>
      </View>
      <View style={{gap:20}}>
      <Text style={{textAlign:'center',color:'grey'}}>Subscribe to 3 or more artist that you like</Text>
      <View style={{flexDirection:'row', alignItems:'center', borderRadius:10,
      padding:10,
       backgroundColor:'#D8E7FE',paddingHorizontal:20 ,marginHorizontal:20}}>
       <AntDesign name="search1" size={24} color="black" />
      <TextInput   placeholder='Search Here' style={{marginLeft:20}} />
      </View>
      </View>
      <View style={{marginTop:40}}>
        <Text style={{textAlign:'center'}}>Featured</Text>
 
       <FlatList
       contentContainerStyle={{paddingBottom:200}}
       data={selected}
       renderItem={({item,index})=>(
        <View key={index} style={{marginHorizontal:40,marginVertical:20,alignItems:'center',gap:8}}>
        <TouchableOpacity onPress={()=> Handler(item)}>
           <Image source={{uri:item.image}} style={{height:100,width:100,
            borderRadius:50,borderWidth:7,borderColor: item.select? '#645abf': 'grey' }}/>
           </TouchableOpacity>
           <Text style={{color:'grey'}}>{item.name}</Text>
           <TouchableOpacity onPress={()=> Handler(item)}  style={{backgroundColor:item.select?'#645abf':'grey',padding:7,borderRadius:10,justifyContent:'center',alignItems:'center',paddingHorizontal:20}}>
            <Text style={{}}>{item.select? 'Subscribed':'Subscribe'}</Text>
           </TouchableOpacity>
        </View>
       )}
       numColumns={numColumns}
       />
    
      
      </View>
    </View>
  )
}

export default Selected;

const styles = StyleSheet.create({})