import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Share
} from "react-native";
import React, { useMemo, useRef } from "react";
import Data from "../components/Data.json";
import { AntDesign } from "@expo/vector-icons";
import Videos from "../components/Videos";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const Home = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
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
  const bottonref = useRef(null);
  const OpenThreeColumn = () => {
    bottonref.current?.present();
  };
  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);
  return (
    <BottomSheetModalProvider>
      <ScrollView style={{ marginTop: 12 }}>
        <View style={{ gap: 20 }}>
          <View>
            <Text style={{ textAlign: "center", fontSize: 17, color: "#fff" }}>
              You Recently Watched
            </Text>
            <View style={{ marginTop: 10 }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={Data}
                renderItem={({ item, index }) => (
                  <Videos
                    key={index}
                    item={item}
                    width={330}
                    menu={true}
                    left={150}
                    icons={true}
                    onpress={OpenThreeColumn}
                    
                  />
                )}
              />
            </View>
          </View>

          <View>
            <Text style={{ textAlign: "center", fontSize: 17, color: "#fff" }}>
              Subscribed Videos
            </Text>
            <View style={{ marginTop: 10 }}>
              <FlatList
                data={Data}
                renderItem={({ item, index }) => (
                  <Videos
                    key={index}
                    item={item}
                    width={350}
                    left={140}
                    menu={true}
                    icons={true}
                    onpress={OpenThreeColumn}
                    height={300}
                  />
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomSheetModal
        ref={bottonref}
        handleIndicatorStyle={{ backgroundColor: "#ccc" }}
        backgroundStyle={{ backgroundColor: "#2a2a2b" }}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose
      >
        <View style={{ marginHorizontal: 20, gap: 15, marginTop: 19 }}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <AntDesign
              name="save"
              size={24}
              color="#fff"
              style={{ fontWeight: "700" }}
            />
            <Text
              style={{ marginHorizontal: 20, fontWeight: "800", color: "#fff" }}
            >
              Save to watch Later
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Octicons name="download" size={24} color="#fff" />
            <Text
              style={{ marginHorizontal: 20, fontWeight: "800", color: "#fff" }}
            >
              Download video
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={onShare}
          >
            <FontAwesome name="share" size={20} color="#fff" />
            <Text
              style={{ marginHorizontal: 20, fontWeight: "800", color: "#fff" }}
            >
              Share
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
          <MaterialIcons name="do-not-disturb-alt" size={24} color="#fff" />
            <Text
              style={{ marginHorizontal: 20, fontWeight: "800", color: "#fff" }}
            >
              Not interested
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
          <MaterialIcons name="playlist-add" size={24} color="#fff" />
            <Text
              style={{ marginHorizontal: 20, fontWeight: "800", color: "#fff" }}
            >
              Save to playlist
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
          <Octicons name="report" size={24} color="white" />
            <Text
              style={{ marginHorizontal: 20, fontWeight: "800", color: "#fff" }}
            >
              Report
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default Home;

const styles = StyleSheet.create({});
