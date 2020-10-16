import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View,
  SafeAreaView,
} from "react-native";
import { color } from "react-native-reanimated";

export default function Base({ navigation }) {
  return (
    //safeareaview brings content below notch of iphone eg.
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/CoronaInfo.png")}
      />
      <Button
        color="red"
        title="Confirm"
        onPress={() => navigation.navigate("Home")}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 60 + "%",
  },
});
