import * as React from "react";
import {
  View,
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
} from "react-native";
import { Avatar, Bubble, GiftedChat } from "react-native-gifted-chat";
import { Video, ResizeMode } from "expo-av";
import { StatusBar } from "expo-status-bar";
import logo from "../assets/logoCitadel.png";
import { AntDesign } from "@expo/vector-icons";
import VideoListLikes from "../components/VideoListLikes";
import Data from "../components/Data.json";
import Videos from "../components/Videos";
import { useRoute } from "@react-navigation/native";
import {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";

const VideoDetails = () => {
  const bottonref = React.useRef(null);
  const OpenThreeColumn = () => {
    bottonref.current?.present();
  };

  // variables
  const snapPoints = React.useMemo(() => ["25%", "65%"], []);
  const Route = useRoute();
  const { item } = Route.params;
  const video = React.useRef(null);
  const [subcribed, setSubscribe] = React.useState(false);



  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Video
            ref={video}
            style={styles.video}
            posterSource={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW65EIqf7PfCUFcXB1ZkALvdhnyv_H0NZ79g&usqp=CAU",
            }}
            posterStyle={{
              marginVertical: 70,
              marginLeft: 160,
              width: 50,
              height: 50,
              borderRadius: 50,
              resizeMode: "cover",
            }}
            source={{
              uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            usePoster={true}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
          />

          <View style={{ marginTop: 10 }}>
            <FlatList
              ListHeaderComponent={() => (
                <View>
                  <View
                    style={{ borderBottomColor: "grey", borderBottomWidth: 1 }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        width: "98%",
                        marginHorizontal: 10,
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ width: "87%" }}>
                        <Text
                          style={{
                            textAlign: "left",
                            color: "grey",
                            fontWeight: "900",
                          }}
                        >
                          {item.title}
                        </Text>
                      </View>

                      <TouchableOpacity style={{ marginRight: 10 }}>
                        <AntDesign name="down" size={20} color="#fff" />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        marginHorizontal: 10,
                        marginTop: 10,
                        marginBottom: 10,
                      }}
                    >
                      <Text style={{ fontSize: 10, color: "grey" }}>
                        {item.views} views &#8226; {item.time} ago
                      </Text>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                      <VideoListLikes comment={OpenThreeColumn} />
                    </View>
                  </View>
                  {/*profile*/}
                  <View
                    style={{
                      flexDirection: "row",
                      marginHorizontal: 10,
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderBottomColor: "grey",
                      borderBottomWidth: 0.5,
                      marginTop: 20,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 20,
                      }}
                    >
                      <Image
                        style={{ width: 50, height: 50, borderRadius: 50 }}
                        source={{
                          uri: item.profilePics,
                        }}
                      />
                      <View style={{ marginLeft: 10 }}>
                        <Text
                          style={{
                            color: "grey",
                            fontWeight: "900",
                            fontSize: 16,
                          }}
                        >
                          {item.name}
                        </Text>
                        <Text style={{ fontSize: 10, color: "grey" }}>
                          {item.views} subscribers
                        </Text>
                      </View>
                    </View>
                    <Text style={{ color: "grey" }}> &#8226; </Text>
                    <Text
                      style={{
                        color: "red",
                        fontSize: 11,
                        fontWeight: subcribed ? "700" : null,
                        borderWidth: 2,
                        borderColor: subcribed ? "green" : null,
                        padding: 10,
                        borderRadius: 10,
                      }}
                      onPress={() => setSubscribe(!subcribed)}
                    >
                      {" "}
                      {subcribed ? "SUBSCRIBED" : "SUBSCRIBE"}
                    </Text>
                  </View>
                </View>
              )}
              contentContainerStyle={{ paddingBottom: 250 }}
              data={Data}
              renderItem={({ item, index }) => (
                <Videos
                  key={index}
                  item={item}
                  width={350}
                  menu={true}
                  icons={true}
                />
              )}
            />
          </View>
        </View>
        <StatusBar style="light" />
      </View>
      <BottomSheetModal
        ref={bottonref}
        handleIndicatorStyle={{ backgroundColor: "#ccc" }}
        backgroundStyle={{ backgroundColor: "#2a2a2b" }}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose
      >

   
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};
export default VideoDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  video: {
    alignSelf: "center",
    width: 370,
    aspectRatio: 13 / 8,
    marginTop: 30,
  },
});
