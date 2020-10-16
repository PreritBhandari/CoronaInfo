import React, { Component } from "react";
import IconAntDesign from "react-native-vector-icons/AntDesign";

import {
  View,
  Button,
  StyleSheet,
  Alert,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Container, Header, Content, List, ListItem, Text } from "native-base";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fbf7f0",
  },
  box: {
    width: "90%",
    height: "56%",
    padding: 8,
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
    color: "silver",
    fontWeight: "bold",
    fontSize: 10,
    marginLeft: "5%",
  },

  sideData: {
    width: "90%",
    height: "10%",
    padding: "1%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
  },
  sideBorder: {
    shadowColor: "#000",
    shadowOffset: {
      width: 7,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,

    // elevation: 14,
  },
});

export default class Districts extends Component {
  state = {
    districts: [],
    districtInfoOpen: false,

    districtName: "",
    districtDetail: [],
  };
  componentDidMount() {
    return fetch("https://data.nepalcorona.info/api/v1/districts")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          districts: responseJson,
        });
        console.log(this.state.districts);
      });
  }

  districtModel = (title) => {
    this.setState({
      districtInfoOpen: true,

      districtName: title,
    });
    return fetch(`https://data.nepalcorona.info/api/v1/districts/${title}`)
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          districtDetail: resJson.covid_summary,
        });
        console.log(this.state.districtDetail);
      });
  };

  modalHandler = () => {
    this.setState({
      districtInfoOpen: false,
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
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
              See Covid-19 Info Of Your District
            </Text>
          </Header>
          <Content>
            <Modal
              animationType="fade"
              transparent
              visible={this.state.districtInfoOpen}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => this.modalHandler()}
              >
                <TouchableWithoutFeedback>
                  <View
                    style={{
                      backgroundColor: "#fbf7f0",
                      marginTop: "19%",
                      height: "78%",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "11%",
                    }}
                  >
                    <View
                      style={
                        ({ width: "100%", height: "10%" }, styles.sideBorder)
                      }
                    >
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: "40",
                          marginBottom: "10%",
                        }}
                      >
                        <View style={{ margin: "2%" }}>
                          <List>
                            <ListItem noBorder style={{ paddingBottom: "1%" }}>
                              <Text
                                style={{
                                  fontWeight: "bold",
                                  color: "red",
                                  fontSize: "20",
                                }}
                              >
                                {this.state.districtName}
                              </Text>
                            </ListItem>
                          </List>
                        </View>
                      </View>
                    </View>

                    <View style={styles.box}>
                      <View style={styles.inner}>
                        <View style={{ margin: "2%" }}>
                          <List height="51%">
                            <View>
                              <ListItem
                                style={styles.sideBorder}
                                borderBottomColor="green"
                              >
                                <Text
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: 20,
                                    color: "purple",
                                  }}
                                >
                                  Total Data
                                </Text>
                              </ListItem>
                            </View>
                            <ListItem noBorder style={{ paddingBottom: "3%" }}>
                              <IconAntDesign
                                name="Safety"
                                size={40}
                                color="blue"
                              ></IconAntDesign>
                              <Text style={styles.textStyle}>
                                <Text>
                                  {this.state.districtDetail.cases}
                                  {"\n"}
                                </Text>{" "}
                                Total Cases
                              </Text>
                            </ListItem>
                            <ListItem noBorder style={{ paddingBottom: "3%" }}>
                              <IconAntDesign
                                name="upsquare"
                                size={40}
                                color="teal"
                              />
                              <Text style={styles.textStyle}>
                                <Text>
                                  {this.state.districtDetail.active} {"\n"}
                                </Text>
                                Active
                              </Text>
                            </ListItem>

                            <ListItem noBorder style={{ paddingBottom: "3%" }}>
                              <IconAntDesign
                                name="frown"
                                size={40}
                                color="red"
                              />
                              <Text style={styles.textStyle}>
                                <Text>
                                  {this.state.districtDetail.death} {"\n"}
                                </Text>
                                Deaths
                              </Text>
                            </ListItem>
                            <ListItem noBorder style={{ paddingBottom: "1%" }}>
                              <IconAntDesign
                                name="smile-circle"
                                size={40}
                                color="green"
                              />
                              <Text style={styles.textStyle}>
                                <Text>
                                  {this.state.districtDetail.recovered} {"\n"}
                                </Text>
                                Recovered
                              </Text>
                            </ListItem>
                          </List>
                        </View>
                      </View>
                    </View>

                    <View
                      style={({ width: "2%", height: "1%" }, styles.sideBorder)}
                    >
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: "90",
                          marginTop: "5%",
                        }}
                      >
                        <View>
                          <List>
                            <ListItem noBorder style={{ paddingBottom: "2%" }}>
                              <Button
                                title="OK"
                                color="red"
                                onPress={() => this.modalHandler()}
                              ></Button>
                            </ListItem>
                          </List>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </TouchableOpacity>
            </Modal>
            <List>
              {this.state.districts.map((dis) => (
                <ListItem borderBottomColor="black">
                  <Button
                    onPress={() => this.districtModel(dis.title)} // doesnt requires .bind while using arrow function
                    title={dis.title}
                  ></Button>
                </ListItem>
              ))}
            </List>
          </Content>
        </Container>
      </View>
    );
  }
}
