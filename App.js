import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import ExtendedCard from "./components/ExtendedCard";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";

export default function App() {
  const [playlists, setPlaylists] = useState([
    { thumbnail: "./img/spotify_album_thumbnail_1", title: "Hits 2009" },
    { thumbnail: "./img/spotify_album_thumbnail_2", title: "Rewind" },
    { thumbnail: "./img/spotify_album_thumbnail_3", title: "Get Started" },
    { thumbnail: "./img/spotify_album_thumbnail_4", title: "Lo-Fi Chill" },
  ]);
  // const playlists = [
  //   { thumbnail: "./img/spotify_album_thumbnail_1", title: 'Hits 2009' },
  //   { thumbnail: "./img/spotify_album_thumbnail_2", title: 'Rewind' },
  //   { thumbnail: "./img/spotify_album_thumbnail_3", title: 'Get Started' },
  //   { thumbnail: "./img/spotify_album_thumbnail_4", title: 'Lo-Fi Chill' },
  // ]

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          paddingVertical: 16,
          paddingLeft: 16,
          paddingRight: 8,
          flex: 1,
        }}
      >
        <LinearGradient
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 400,
            marginTop: -16,
            marginLeft: -16 - Constants.statusBarHeight,
          }}
          colors={["#4f18f0", "2F1088", "transparent", "transparent"]}
          start={{ x: 0, y: 0 }}
          end={{ x: .25, y: 1 }}
        />
        <View
          style={{
            paddingTop: 32,
            paddingBottom: 8,
            marginBottom: 8,
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
          <ExtendedCard
            title={"Chill"}
            thumbnail={require("./img/spotify_album_thumbnail_1.jpg")}
          />
          <ExtendedCard
            title={"Time Capsule"}
            thumbnail={require("./img/time-capsule-blue_LARGE-en.jpg")}
          />
          <ExtendedCard
            title={"Calm"}
            thumbnail={require("./img/spotify_album_thumbnail_3.jpg")}
          />
          <ExtendedCard
            title={"Paramore"}
            thumbnail={require("./img/spotify_album_thumbnail_4.jpg")}
          />
          <ExtendedCard
            title={"John Mayer"}
            thumbnail={require("./img/spotify_album_thumbnail_5.jpg")}
          />
          <ExtendedCard
            title={"Pamungkas"}
            thumbnail={require("./img/spotify_album_thumbnail_6.jpg")}
          />
        </View>
        <View
          style={{
            paddingTop: 4,
            paddingBottom: 4,
            marginBottom: 8,
          }}
        >
          <Text style={[styles.textWhite, styles.textTitle, { marginBottom: 8 }] }>
            Recently Played
          </Text>
        </View>
        <ScrollView horizontal={true} style={{ marginLeft: -16, marginRight: -8 }}>
          <View
            style={{
              width: 112,
              marginLeft: 16,
              marginRight: 16,
            }}
          >
            <Image
              source={require("./img/spotify_album_thumbnail_7.png")}
              style={{ height: 112, width: 112, marginBottom: 8 }}
            />
            <Text style={{ fontSize: 12, color: "#fff", lineHeight: 16 }}>Say So</Text>
          </View>
          <View
            style={{
              width: 112,
              marginRight: 16,
            }}
          >
            <Image
              source={require("./img/spotify_album_thumbnail_11.png")}
              style={{ height: 112, width: 112, marginBottom: 8 }}
            />
            <Text style={{ fontSize: 12, color: "#fff", lineHeight: 16 }}>
              American Idiot
            </Text>
          </View>
          <View
            style={{
              width: 112,
              marginRight: 16,
            }}
          >
            <Image
              source={require("./img/spotify_album_thumbnail_8.png")}
              style={{ height: 112, width: 112, marginBottom: 8 }}
            />
            <Text style={{ fontSize: 12, color: "#fff", lineHeight: 16 }}>
              Locked Out of Heaven
            </Text>
          </View>
          <View
            style={{
              width: 112,
              marginRight: 16,
            }}
          >
            <Image
              source={require("./img/spotify_album_thumbnail_9.jpeg")}
              style={{ height: 112, width: 112, marginBottom: 8 }}
            />
            <Text style={{ fontSize: 12, color: "#fff", lineHeight: 16 }}>Pilu Membiru</Text>
          </View>
          <View
            style={{
              width: 112,
              marginRight: 16,
            }}
          >
            <Image
              source={require("./img/spotify_album_thumbnail_10.jpeg")}
              style={{ height: 112, width: 112, marginBottom: 8 }}
            />
            <Text style={{ fontSize: 12, color: "#fff", lineHeight: 16 }}>It's Time</Text>
          </View>
        </ScrollView>
      </ScrollView>
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
