import "react-native-gesture-handler";
import React from "react";
import Base from "./components/Base";
import Home from "./components/Home";
import DistrictDetails from "./components/DistrictDetails";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Districts from "./components/Districts";
import { Drawer } from "native-base";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Base"
      >
        <Stack.Screen name="Base" component={Base} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Districts" component={Districts} /> */}
        {/* <Stack.Screen name="DisDetail" component={DistrictDetails} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
