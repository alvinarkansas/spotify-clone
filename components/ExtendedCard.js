import React, { useState } from "react";
import { Text, Animated, Pressable, View, Image } from "react-native";
import Line from "./Line";

export default function ExtendedCard({ thumbnail, title }) {
  const scaleValue = useState(new Animated.Value(1))[0];

  const handleOnPressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 90,
      useNativeDriver: true,
    }).start();
  };
  const handleOnPressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 90,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={{
        width: "50%",
        paddingTop: 8,
        paddingLeft: 8,
      }}
    >
      <Animated.View
        style={{
          backgroundColor: "rgba(255, 255, 255, .075)",
          height: 56,
          width: "100%",
          borderRadius: 8,
          flexWrap: "wrap",
          justifyContent: "center",
          transform: [{ scale: scaleValue }],
        }}
      >
        <Pressable
          style={({ pressed }) => [
            {
              height: "100%",
              width: "300%",
              opacity: pressed ? 0.75 : 1,
              flexDirection: "row",
              alignItems: "center",
            },
          ]}
          onPressIn={handleOnPressIn}
          onPressOut={handleOnPressOut}
        >
          <Image
            source={thumbnail}
            style={{
              height: "100%",
              maxWidth: 56,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          />
          <Line
            style={{
              marginLeft: 8,
              fontWeight: "bold",
              fontSize: 12,
              color: "#fff",
            }}
          >
            {title}
          </Line>
        </Pressable>
      </Animated.View>
    </View>
  );
}
