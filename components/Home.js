import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MainPage from "./MainPage";
import SearchScreen from "./SearchScreen";
import Districts from "./Districts";

import { Component } from "react";

export default class Home extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer independent="true">
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Main") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "ios-settings" : "ios-settings";
              } else if (route.name === "Search") {
                iconName = focused ? "ios-search" : "ios-search";
              } else if (route.name === "About Us") {
                iconName = focused ? "ios-search-box" : "ios-search-box";
              } else if (route.name === "Districts") {
                iconName = focused ? "ios-list-box" : "ios-list";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "purple",
          }}
        >
          <Tab.Screen name="Main" component={MainPage} />
          <Tab.Screen name="Districts" component={Districts} />
          <Tab.Screen name="Search" component={SearchScreen} />
          {/* <Tab.Screen name="Settings" component={SearchScreen} /> */}
          {/* <Tab.Screen name="About Us" component={SearchScreen} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
