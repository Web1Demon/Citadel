import {
  Image,
  Modal,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {BottomSheetModal,BottomSheetModalProvider} from "@gorhom/bottom-sheet";

const Videos = ({
  item,
  menu,
  width,
  left,
  height,
  icons,
  three,
  text,
  backCol,
  onpress
}) => {


  const navigation = useNavigation();
 
  return (
    <View
      style={{
        marginLeft: 10,
        marginBottom: 20,
        backgroundColor: backCol ? backCol : null,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("video",{item})}>
        <Image
          source={{ uri: item.image }}
          style={{
            width: width ? width : 270,
            height: height ? height : 200,
            borderRadius: 6,
            position: "relative",
          }}
        />
      </TouchableOpacity>

      {icons ? null : (
        <View
          style={{
            borderWidth: 7,
            width: 50,
            borderColor: "#E25418",
            backgroundColor: "white",
            position: "absolute",
            left: left ? left : 110,
            top: 80,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
        >
          <AntDesign name="caretright" size={26} color="#E25418" />
        </View>
      )}

      {menu ? (
        <View style={{ marginTop: 10, gap: 2 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 10,
            }}
          >
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <Image
                source={{ uri: item.profilePics }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  position: "relative",
                }}
              />
              <View style={{ marginLeft: 12, gap: 6 }}>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}
                >
                  {item.title? item.title.slice(0,20) +  '...': item.title.toLowerCase()}
                </Text>
                {text ? (
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{ fontSize: 19, color: "red", fontWeight: "900" }}
                    >
                      {" "}
                      &#8226;{" "}
                    </Text>
                    <Text style={{ color: "#fff", marginRight: 10 }}>
                      {" "}
                      {item.name}{" "}
                    </Text>
                  </View>
                ) : (
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 13, color: "#fff" }}>
                      {item.name} &#8226;{" "}
                    </Text>
                    <Text
                      style={{ marginLeft: 4, fontSize: 13, color: "#fff" }}
                    >
                      {item.time} ago
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
            {three ? (
              <TouchableOpacity
                style={{
                  backgroundColor: "#e91e63",
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  padding: 5,
                }}
              >
                <Text style={{ fontSize: 13 }}>Join Live</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={onpress}>
                <Entypo name="dots-three-vertical" size={13} color="#fff" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      ) : (
        <View style={{ marginTop: 10, gap: 2 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
          <Text style={{ fontSize: 13, color: "#fff" }}>{item.name}</Text>
        </View>
      )}
    </View>

  );
};

export default Videos;

const styles = StyleSheet.create({});
