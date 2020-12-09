import React from "react";
import { View, Image } from "react-native";
import Line from "../components/Line";

export default function GenreCard({ genre, thumbnail, background }) {
  return (
    <View
      style={{
        width: "50%",
        paddingTop: 16,
        paddingLeft: 16,
      }}
    >
      <View
        style={{
          height: 88,
          borderRadius: 4,
          padding: 12,
          backgroundColor: background,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Line weight={"bold"} style={{ fontSize: 16 }}>
          {genre}
        </Line>
        <Image
          source={require(`../img/220x220/${thumbnail}`)}
          style={{
            height: 64,
            width: 64,
            resizeMode: "contain",
            position: "absolute",
            bottom: 0,
            right: -16,
            transform: [{ rotate: "25deg" }],
          }}
        />
      </View>
    </View>
  );
}
