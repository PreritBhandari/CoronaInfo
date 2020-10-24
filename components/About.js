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
//          justifyContent: "top",
          alignItems: "center",
        }}
      >
        <Container style={styles.container}>
          <View
                    style={{
                      width: 100 + "%",
                      height: 15 + "%",
                      backgroundColor: "white",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        alignContent:'center',
                        justifyContent:'center',
                        marginLeft:'40%',
                        marginTop: 6 + "%",
                        color: "purple",
                        fontWeight: "bold",
                        fontSize: 19,
                      }}
                    >
                            About Us
                    </Text>
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image
            style={{
              height: 200,
              width: 200,
              marginTop: "40%",
            }}
            source={require("../assets/developedby.png")}
          ></Image>
          <Image
            style={{
              height: 50,
              width: 200,

            }}
            source={require("../assets/prerit.png")}
          ></Image>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "#595F5C",
              marginTop:'20%'

            }}
          >
            Feel Free to Contact For any Issues !
          </Text>
          </View>
        </Container>
      </View>
    );
  }
}
