import { StatusBar, StatusBar as expoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./Screens/WelcomeScreen";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Main from "./Main";
import Toast from "react-native-toast-message";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#000",
    },
  };

  return (
   
      <NavigationContainer theme={MyTheme}>
        <Main />
        <Toast />
        <StatusBar style="light" />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
