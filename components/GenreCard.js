import React from "react";
import { View, Image, Pressable } from "react-native";
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
      <Pressable
        style={({ pressed }) => [{
          height: 88,
          borderRadius: 4,
          padding: 12,
          backgroundColor: background,
          position: "relative",
          overflow: "hidden",
          opacity: pressed ? .75 : 1
        }]}
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
      </Pressable>
    </View>
  );
}
