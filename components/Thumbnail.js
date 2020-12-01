import React, { useState } from "react";
import { View, Animated, Pressable, Image } from "react-native";
import Line from "./Line";

export default function Thumbnail({ info, size }) {
  const scaleValue = useState(new Animated.Value(1))[0]

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
        maxWidth: size + 16,
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 16,
      }}
    >
      <Animated.View
        style={{
          width: size,
          height: size,
          marginBottom: 8,
          transform: [{ scale: scaleValue }],
        }}
      >
        <Pressable
          style={({ pressed }) => [
            {
              height: "100%",
              width: "100%",
              opacity: pressed ? 0.75 : 1,
            },
          ]}
          onPressIn={handleOnPressIn}
          onPressOut={handleOnPressOut}
        >
          <Image
            source={info.thumbnail}
            style={{ height: "100%", width: "100%" }}
          />
        </Pressable>
      </Animated.View>
      <Line style={{ fontSize: 12, color: "#fff", lineHeight: 16 }}>
        {info.title}
      </Line>
    </View>
  );
}
