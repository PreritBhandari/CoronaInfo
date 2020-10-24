import React from "react";
import { Text, View,ScrollView, Image, StyleSheet } from "react-native";
import { List, ListItem } from "native-base";
import IconAntDesign from "react-native-vector-icons/AntDesign";

import { Component } from "react";

export default class MainPage extends Component {
  state = {
    data: "",
  };

  componentDidMount() {
    return fetch("https://disease.sh/v3/covid-19/countries/nepal")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson,
        });
        console.log(this.state.data);
      });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fbf7f0",
          alignItems: "center",
//          justifyContent: "top",
        }}
      >
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
              marginLeft: 20 + "%",
              marginTop: 6 + "%",
              color: "purple",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            <Image source={require("../assets/nepal.png")} />
            &nbsp;Covid-19 Stats For Nepal &nbsp;
            <Image source={require("../assets/nepal.png")} />
          </Text>
        </View>

      <ScrollView style={{flex:1}}>

        <View
          style={{
            paddingRight: "75%",
            paddingTop: "2%",

          }}
        >
          <List>
            <ListItem borderBottomColor="grey">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: "purple",
                }}
              >
                Today
              </Text>
            </ListItem>
          </List>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <View style={{ margin: "2%" }}>
              <List>
                <ListItem noBorder style={{ paddingBottom: "4%" }}>
                  <IconAntDesign
                    name="Safety"
                    size={40}
                    color="blue"
                  ></IconAntDesign>
                  <Text style={{ paddingLeft: "5%", fontWeight: "bold" }}>
                    {this.state.data.todayCases} {"\n"}
                    <Text style={styles.textStyle}>Total Cases</Text>
                  </Text>
                </ListItem>

                <ListItem noBorder style={{ paddingBottom: "4%" }}>
                  <IconAntDesign name="frown" size={40} color="red" />
                  <Text style={{ paddingLeft: "5%", fontWeight: "bold" }}>
                    {this.state.data.todayDeaths} {"\n"}
                    <Text style={styles.textStyle}>Deaths</Text>
                  </Text>
                </ListItem>
                <ListItem noBorder style={{ paddingBottom: "1%" }}>
                  <IconAntDesign name="smile-circle" size={40} color="green" />
                  <Text style={{ paddingLeft: "5%", fontWeight: "bold" }}>
                    {this.state.data.todayRecovered} {"\n"}
                    <Text style={styles.textStyle}>Recovered</Text>
                  </Text>
                </ListItem>
              </List>
            </View>
          </View>
        </View>

        <View
          style={{
            paddingRight: "75%",
            paddingTop: "5%",
          }}
        >
          <List>
            <ListItem borderBottomColor="grey">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: "purple",
                }}
              >
                Overall
              </Text>
            </ListItem>
          </List>
        </View>
        <View
          style={{
            width: "85%",
            height: "13%",
            paddingTop: "2%",
            paddingLeft:'5%',
            shadowOpacity: 0.2,
            shadowRadius: 15,
          }}
        >
          <View style={{ backgroundColor: "white", borderRadius: 18 }}>
            <View style={{ margin: "2%" }}>
              <List>
                <ListItem noBorder style={{ paddingBottom: "1%" }}>
                  <IconAntDesign name="barschart" size={20} color="orange" />
                  <Text style={{ paddingLeft: "5%", fontWeight: "bold" }}>
                    {this.state.data.tests} {"\n"}
                    <Text style={styles.textStyle}>Total Tests</Text>
                  </Text>
                </ListItem>
              </List>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "85%",
            height: "20%",
            paddingTop: "5%",
            paddingLeft:'5%',
            shadowOpacity: 0.2,
            shadowRadius: 15,
          }}
        >
          <View style={{ backgroundColor: "white", borderRadius: 18 }}>
            <View style={{ margin: "2%" }}>
              <List>
                <ListItem style={{ paddingBottom: "3%" }}>
                  <IconAntDesign
                    name="star"
                    size={20}
                    style={{ paddingLeft: "30%" }}
                    color="purple"
                  />
                  <Text style={{ paddingLeft: "5%", fontWeight: "bold" }}>
                    {this.state.data.cases} {"\n"}
                    <Text style={styles.textStyle}>Total Cases</Text>
                  </Text>
                </ListItem>
                <ListItem noBorder style={{ paddingBottom: "3%" }}>
                  <IconAntDesign name="smile-circle" size={20} color="green" />
                  <Text style={{ paddingLeft: "5%", fontWeight: "bold" }}>
                    {this.state.data.recovered} {"\n"}
                    <Text style={styles.textStyle}>Recovered</Text>
                  </Text>
                  <IconAntDesign
                    style={{ paddingLeft: "20%" }}
                    name="frown"
                    size={20}
                    color="red"
                  />
                  <Text style={{ paddingLeft: "5%", fontWeight: "bold" }}>
                    {this.state.data.deaths} {"\n"}
                    <Text style={styles.textStyle}>Deaths</Text>
                  </Text>
                </ListItem>
              </List>
            </View>
          </View>
        </View>



        <View
          style={
            ({ width: "100%", height: "13%", marginTop: "12%" ,paddingLeft:'10%',paddingRight:'19%'}
            )
          }
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 18,
            }}
          >
            <View style={{ margin: "2%" }}>
              <List>
                <ListItem noBorder style={{ paddingBottom: "1%" }}>
                  <IconAntDesign
                    name="exclamationcircle"
                    size={20}
                    color="orange"
                    style={{ paddingLeft: "2%", paddingRight: "3%" }}
                  />

                  <Text style={{ fontWeight: "bold", color: "green" }}>
                    Active Cases &nbsp; : &nbsp; {this.state.data.active}
                  </Text>
                </ListItem>
              </List>
            </View>
          </View>
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    width: "100%",
    height: "60%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  box: {
    width: "95%",
    height: "33%",
    padding: 8,
    paddingLeft:'5%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 15,

    // elevation: 14,
  },

  inner: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    borderBottomColor: "silver",
  },
  textStyle: {
    color: "purple",
    fontWeight: "bold",
    fontSize: 10,
    marginLeft: "5%",
  },

  sideData: {
    width: "70%",
    height: "20%",
    padding: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    backgroundColor: "white",
    justifyContent: "center",
    alignContent: "center",
  },
  sideBorder: {
    shadowColor: "#000",
    shadowOffset: {
      width: 7,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 6,

    // elevation: 14,
  },
  opacity: {
    opacity: 0.2,
  },
});
