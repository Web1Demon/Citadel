import { StyleSheet, Text, View ,ScrollView, TouchableOpacity, Animated,Share} from 'react-native'
import React, { useRef, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
const VideoListLikes = () => {
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          Alert.alert(error.message);
        }
      };
    const [like,setLike]=useState(false);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}  style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={()=> {setLike(!like)
        fadeIn}
    }>
        <View style={{backgroundColor:'#000', borderWidth:1, borderColor:'grey', flexDirection:'row', justifyContent:'center', 
        alignItems:'center', marginHorizontal:10,paddingHorizontal:10,paddingVertical:4, width:90, borderRadius:20}}>
        <Animated.View>
        <AntDesign name={like? 'like1': 'like2'} size={20} color={like? 'grey': 'grey'} />
        </Animated.View>
        <Text style={{marginLeft:5, color:'grey'}}>705k</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{backgroundColor:'#000', borderWidth:1, borderColor:'grey', flexDirection:'row', justifyContent:'center', 
        alignItems:'center', marginHorizontal:10,paddingHorizontal:10,paddingVertical:4, width:120, borderRadius:20}}>
        <EvilIcons name="comment" size={24} color="grey" />
        <Text style={{marginLeft:5, color:'grey'}}>Comment</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{backgroundColor:'#000', borderWidth:1, borderColor:'grey', flexDirection:'row', justifyContent:'center', 
        alignItems:'center', marginHorizontal:10,paddingHorizontal:10,paddingVertical:4, width:120, borderRadius:20}}>
        <Octicons name="download" size={24} color="grey" />
        <Text style={{marginLeft:5, color:'grey'}}>Downlaod</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onShare}>
        <View style={{backgroundColor:'#000', borderWidth:1, borderColor:'grey', flexDirection:'row', justifyContent:'center', 
        alignItems:'center', marginHorizontal:10,paddingHorizontal:10,paddingVertical:4, width:90, borderRadius:20}}>
        <FontAwesome name="share" size={20} color="grey" />
        <Text style={{marginLeft:5, color:'grey'}}>Share</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{backgroundColor:'#000', borderWidth:1, borderColor:'grey', flexDirection:'row', justifyContent:'center', 
        alignItems:'center', marginHorizontal:10,paddingHorizontal:10,paddingVertical:4, width:120, borderRadius:20}}>
        <MaterialIcons name="audiotrack" size={24} color="grey" />
        <Text style={{marginLeft:5, color:'grey'}}>Play Audio</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default VideoListLikes

const styles = StyleSheet.create({})