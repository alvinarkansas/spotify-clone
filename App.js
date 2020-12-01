import React from "react";
import { Image } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Search from "./screens/Search";
import YourLibrary from "./screens/YourLibrary";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let source;
            if (route.name === "Home") {
              source = focused
                ? require("./img/icons/home.png")
                : require("./img/icons/home-outline.png");
              return (
                <Image source={source} style={{ height: 32, width: 32 }} />
              );
            }
            if (route.name === "Search") {
              source = focused
                ? require("./img/icons/search-bold.png")
                : require("./img/icons/search.png");
              return (
                <Image source={source} style={{ height: 32, width: 32 }} />
              );
            }
            if (route.name === "YourLibrary") {
              source = focused
                ? require("./img/icons/library-bold.png")
                : require("./img/icons/library.png");
              return (
                <Image source={source} style={{ height: 32, width: 32 }} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "gray",
          style: {
            backgroundColor: "#282828",
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="YourLibrary" component={YourLibrary} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
