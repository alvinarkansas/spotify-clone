import { StatusBar } from "expo-status-bar";
import React from "react";
import ExtendedCard from './components/ExtendedCard'
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingVertical: 16,
          paddingLeft: 16,
          paddingRight: 8,
          flex: 1,
        }}
      >
        <View
          style={{
            paddingTop: 32,
            paddingBottom: 8,
            marginBottom: 8
          }}
        >
          <Text style={[styles.textWhite, styles.textTitle]}>
            Good afternoon
          </Text>
        </View>
        <View
          style={{
            height: 224,
            width: "100%",
            marginTop: -8,
            marginLeft: -8,
            flexWrap: "wrap",
          }}
        >
          <ExtendedCard title={"Chill"} thumbnail={require("./img/spotify_album_thumbnail_1.jpg")} />
          <ExtendedCard title={"Time Capsule"} thumbnail={require("./img/time-capsule-blue_LARGE-en.jpg")} />
          <ExtendedCard title={"Calm"} thumbnail={require("./img/spotify_album_thumbnail_3.jpg")} />
          <ExtendedCard title={"Paramore"} thumbnail={require("./img/spotify_album_thumbnail_4.jpg")} />
          <ExtendedCard title={"John Mayer"} thumbnail={require("./img/spotify_album_thumbnail_5.jpg")} />
          <ExtendedCard title={"Pamungkas"} thumbnail={require("./img/spotify_album_thumbnail_6.jpg")} />
        </View>
        {/* <View
          style={{
            paddingTop: 4,
            paddingBottom: 4,
            marginBottom: 8
          }}
        >
          <Text style={[styles.textWhite, styles.textTitle]}>
            Recently Played
          </Text>
        </View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
  textWhite: {
    color: "#fff",
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
