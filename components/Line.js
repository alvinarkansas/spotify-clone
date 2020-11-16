import React, { useState } from "react";
import { Text } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const getFonts = () =>
  Font.loadAsync({
    "lineto-circular-regular": require("../assets/fonts/lineto-circular-pro-book.ttf"),
    "lineto-circular-medium": require("../assets/fonts/lineto-circular-pro-medium.ttf"),
    "lineto-circular-bold": require("../assets/fonts/lineto-circular-pro-bold.ttf"),
    "lineto-circular-black": require("../assets/fonts/lineto-circular-black.ttf"),
  });

export default function Line({ children, style, weight }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const fontType = (weight) => {
    switch (weight) {
      case "black":
        return "lineto-circular-black";
        break;
      case "bold":
        return "lineto-circular-bold";
        break;
      case "medium":
        return "lineto-circular-medium";
        break;
      default:
        return "lineto-circular-regular";
        break;
    }
  };

  if (!fontsLoaded) {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  } else {
    return (
      <>
        <Text
          style={[
            { color: "#fff", fontFamily: fontType(weight) },
            style || {},
          ]}
        >
          {children}
        </Text>
      </>
    );
  }
}
