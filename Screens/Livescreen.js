import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Data from "../components/Data.json";
import Videos from "../components/Videos";

const Livescreen = () => {
  return (
    <ScrollView style={{ marginHorizontal: 5, marginTop: 12 }}>
          
       
        <View style={{ marginTop: 10 }}>
          <FlatList
            data={Data}
            renderItem={({ item, index }) => (
              <Videos key={index} item={item} width={330} left={140} menu={true} three={true} text={true} backCol={'#333d46'}/>
            )}
          />
        </View>
 
      
    </ScrollView>
  );
};

export default Livescreen;

const styles = StyleSheet.create({});
