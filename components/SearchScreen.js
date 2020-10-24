import React, { Component } from "react";
import { Text, View,ScrollView, StyleSheet, Image } from "react-native";
import { Header, List, ListItem, Input, Content } from "native-base";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import { SearchBar } from "react-native-elements";

export default class SearchScreen extends Component {
  state = {
    search: "",
    flag: "",

    countryData: true,
    searchDataOpen: false,
  };

  showCountrySearch = () => {
    this.setState({ searchDataOpen: !this.state.searchDataOpen });
  };

  updateSearch = (search) => {
    console.log(search);
    return fetch(`https://disease.sh/v3/covid-19/countries/${search}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          search: responseJson,
        });
        console.log(this.state.search);
        this.setState({ flag: this.state.search.countryInfo["flag"] });
        console.log(this.state.flag);
      });
  };

  modalHandler = () => {
    this.setState({
      searchDataOpen: false,
    });
  };

  render() {
    const { search } = this.state;

    if (this.state.searchDataOpen) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#fbf7f0",
//            justifyContent: "top",
            alignItems: "center",

          }}
        >
          <Header style={{ backgroundColor: "white" }}>
            <SearchBar
              platform="ios"
              placeholder="Search Country"
              onChangeText={this.updateSearch}
              onSubmitEditing={({ nativeEvent }) =>
                console.log(nativeEvent.text)
              }
              value={search}
              onClear={this.showCountrySearch}
              onCancel={this.showCountrySearch}
            />
          </Header>
        <ScrollView style={{flex:1}}>
          <View
            style={{
              width: "90%",
              height: "14%",
              backgroundColor: "transparent",
            }}
          >
            <List>
              <ListItem noBorder>
                <Image
                  style={styles.stretch}
                  source={{ uri: this.state.flag }}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 25,
                    paddingLeft: "10%",
                  }}
                >
                  {this.state.search.country}
                </Text>
              </ListItem>
            </List>
          </View>

          <View
            style={{
              paddingRight: "75%",
              paddingTop: "2%",
              marginTop: "0%",
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
            <View style={{ backgroundColor: "white", borderRadius: 18 }}>
              <View style={{ margin: "2%" }}>
                <List>
                  <ListItem style={{ paddingBottom: "3%" }}>
                    <IconAntDesign
                      name="Safety"
                      size={20}
                      style={{ paddingLeft: "30%" }}
                      color="blue"
                    />
                    <Text style={{ paddingLeft: "5%", fontWeight: "bold" }}>
                      {search.todayCases} {"\n"}
                      <Text style={styles.textStyle}>Total Cases</Text>
                    </Text>
                  </ListItem>
                  <ListItem noBorder style={{ paddingBottom: "3%" }}>
                    <IconAntDesign
                      name="smile-circle"
                      size={20}
                      color="green"
                    />
                    <Text style={{ paddingLeft: "5%", fontWeight: "bold" }}>
                      {search.todayRecovered} {"\n"}
                      <Text style={styles.textStyle}>Recovered</Text>
                    </Text>
                    <IconAntDesign
                      style={{ paddingLeft: "20%" }}
                      name="frown"
                      size={20}
                      color="red"
                    />
                    <Text style={{ paddingLeft: "5%", fontWeight: "bold" }}>
                      {search.todayDeaths} {"\n"}
                      <Text style={styles.textStyle}>Deaths</Text>
                    </Text>
                  </ListItem>
                </List>
              </View>
            </View>
          </View>

          <View
            style={{
              paddingRight: "75%",
              paddingTop: "0%",
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
              height: "10%",
              paddingTop: "2%",
              shadowOpacity: 0.2,
              shadowRadius: 15,
              flex:1,
                            paddingLeft:'3%'

            }}
          >
            <View style={{ backgroundColor: "white", borderRadius: 18 }}>
              <View style={{ margin: "2%" }}>
                <List>
                  <ListItem noBorder style={{ paddingBottom: "1%" }}>
                    <IconAntDesign name="barschart" size={20} color="orange" />
                    <Text style={{ paddingLeft: "5%", fontWeight: "bold" }}>
                      {search.tests} {"\n"}
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
            paddingTop: "10%",
              shadowOpacity: 0.2,
              shadowRadius: 15,
              flex:1,
              paddingLeft:'3%'

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
                      {search.cases} {"\n"}
                      <Text style={styles.textStyle}>Total Cases</Text>
                    </Text>
                  </ListItem>
                  <ListItem noBorder style={{ paddingBottom: "3%" }}>
                    <IconAntDesign
                      name="smile-circle"
                      size={20}
                      color="green"
                    />
                    <Text style={{ paddingLeft: "5%", fontWeight: "bold" }}>
                      {search.recovered} {"\n"}
                      <Text style={styles.textStyle}>Recovered</Text>
                    </Text>
                    <IconAntDesign
                      style={{ paddingLeft: "20%" }}
                      name="frown"
                      size={20}
                      color="red"
                    />
                    <Text style={{ paddingLeft: "5%", fontWeight: "bold" }}>
                      {search.deaths} {"\n"}
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
                      Active Cases &nbsp; : &nbsp; {search.active}
                    </Text>
                  </ListItem>
                </List>
              </View>
            </View>
          </View>
        </ScrollView>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#fbf7f0",
            justifyContent: "center",
            alignItems: "center",

          }}
        >
           <View
                                                style={{
                                                  width: 100 + "%",
                                                  paddingTop:'6%',
                                                  backgroundColor: "white",
                                                  alignContent: "center",
                                                  justifyContent: "center",
                                                }}
                                              >
            <SearchBar
              platform="ios"
              placeholder="Search Country"
              onChangeText={this.updateSearch}
              onSubmitEditing={({ nativeEvent }) =>
                console.log(nativeEvent.text)
              }
              value={search}
              onFocus={this.showCountrySearch}
            />
          </View>
          <View
            style={{
              width: "100%",
              height: "87%",
              backgroundColor: "transparent",
              alignContent: "center",
              alignItems:'center',
              justifyContent: "center",
            }}
          >
            <IconAntDesign
              name="search1"
              size={120}
              color="silver"
            ></IconAntDesign>

            <Text
              style={{
                color: "silver",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Search Country To See The Covid-19 Stats
            </Text>
          </View>
        </View>
      );
    }
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
    width: "85%",
    height: "20%",
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

  stretch: {
    width: 70,
    height: 70,
  },

  opacity: {
    opacity: 0.2,
  },
});
