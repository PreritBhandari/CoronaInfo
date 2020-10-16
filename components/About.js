import React, { Component } from "react";
import { Text, View, SafeAreaView, StyleSheet, Image } from "react-native";
import { ListItem, List, Container, Header } from "native-base";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fbf7f0",
  },
});

export default class About extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fbf7f0",
          justifyContent: "top",
          alignItems: "center",
        }}
      >
        <Container style={styles.container}>
          <Header style={{ backgroundColor: "white" }}>
            <Text
              style={{
                paddingTop: "7%",
                color: "purple",
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              About Us
            </Text>
          </Header>
          <Image
            style={{
              height: 200,
              width: 200,
              marginTop: "40%",
              marginLeft: "20%",
            }}
            source={require("../assets/developedby.png")}
          ></Image>
          <Image
            style={{
              height: 50,
              width: 200,
              marginLeft: "20%",
            }}
            source={require("../assets/prerit.png")}
          ></Image>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              paddingLeft: "23%",
              marginTop: "50%",
              color: "#595F5C",
            }}
          >
            Feel Free to Contact For any Issues !
          </Text>
        </Container>
      </View>
    );
  }
}
