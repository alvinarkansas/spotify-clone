import React from "react";
import { Text, View, Image } from "react-native";
import Line from './Line'

export default function ExtendedCard({ thumbnail, title }) {
  return (
    <View
      style={{
        width: "50%",
        paddingTop: 8,
        paddingLeft: 8,
      }}
    >
      <View
        style={{
          backgroundColor: "rgba(255, 255, 255, .075)",
          height: 56,
          width: "100%",
          borderRadius: 8,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
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
          { title }
        </Line>
      </View>
    </View>
  );
}
