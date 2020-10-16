import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MainPage from "./MainPage";
import SearchScreen from "./SearchScreen";
import Districts from "./Districts";
import About from "./About";

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
              } else if (route.name === "Search") {
                iconName = focused ? "ios-search" : "ios-search";
              } else if (route.name === "AboutUs") {
                iconName = focused ? "ios-person" : "ios-person";
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
          <Tab.Screen name="AboutUs" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
