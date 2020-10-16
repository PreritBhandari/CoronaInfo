import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import { View } from "native-base";

export default function Base({ navigation }) {
  return (
    //safeareaview brings content below notch of iphone eg.
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/CoronaInfo.png")}
      />

      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "purple",
        }}
        onPress={() => navigation.navigate("Home")}
      >
        Start
        <IconAntDesign name="caretright" size={25}></IconAntDesign>
      </Text>
      <Text
        style={{
          fontSize: 10,
          fontWeight: "bold",
          color: "black",
          paddingTop: "60%",
        }}
      >
        * Internet Connection Is Required To Run The Application
      </Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf7e0",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 50 + "%",
  },
});
