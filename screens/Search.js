import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import GlobalStyles from "../globalStyle";

import Line from "../components/Line";
import GenreCard from "../components/GenreCard";

// import topGenres from "../data/top-genres.json";
// import allGenres from "../data/all-genres.json";

const topGenres = [
  {
    genre: "Lo-Fi",
    thumbnail: "../img/220x220/playlist-thumbnail-lofi_beats-220x220.png",
    background: "#85A5BA",
  },
  {
    genre: "Rock",
    thumbnail: "../img/220x220/playlist-thumbnail-rock_classic-220x220.png",
    background: "#D64B37",
  },
  {
    genre: "Chill",
    thumbnail: "../img/220x220/playlist-thumbnail-spotyfy_chill-220x220.png",
    background: "#01327A",
  },
  {
    genre: "Indie",
    thumbnail: "../img/220x220/playlist-thumbnail-indie_sunshine-220x220.png",
    background: "#D0BB4D",
  },
];

const allGenres = [
  {
    genre: "Calm",
    thumbnail: "../img/220x220/playlist-thumbnail-calm_vibes-220x220.png",
    background: "#845241",
  },
  {
    genre: "Pop",
    thumbnail: "../img/220x220/playlist-thumbnail-pop_right_now-220x220.png",
    background: "#5D7A89",
  },
  {
    genre: "Jazz",
    thumbnail: "../img/220x220/playlist-thumbnail-late_night_jazz-220x220.png",
    background: "#253949",
  },
  {
    genre: "Classical",
    thumbnail:
      "../img/220x220/playlist-thumbnail-classic_essentials-220x220.png",
    background: "#A44A24",
  },
  {
    genre: "Dance",
    thumbnail: "../img/220x220/playlist-thumbnail-dance_party-220x220.png",
    background: "#92340E",
  },
  {
    genre: "Study",
    thumbnail:
      "../img/220x220/playlist-thumbnail-instrumental_study-220x220.png",
    background: "#3A404A",
  },
  {
    genre: "Electro",
    thumbnail: "../img/220x220/playlist-thumbnail-electro_chill-220x220.png",
    background: "#59B9DF",
  },
  {
    genre: "Love Pop",
    thumbnail: "../img/220x220/playlist-thumbnail-love_pop-220x220.png",
    background: "#9ABECE",
  },
];

export default function Search() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={[
          GlobalStyles.equalHorizontalPadding,
          {
            paddingTop: 16 + Constants.statusBarHeight,
            flex: 1,
          },
        ]}
        contentContainerStyle={{
          paddingBottom: 32,
        }}
      >
        <View
          style={{
            paddingTop: 8,
            paddingBottom: 16,
          }}
        >
          <Line
            weight={"bold"}
            style={[GlobalStyles.textTitle, { marginBottom: 16 }]}
          >
            Search
          </Line>
          <Pressable
            style={{
              height: 42,
              paddingHorizontal: 12,
              backgroundColor: "#fff",
              borderRadius: 8,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../img/icons/search-bold-dark.png")}
              style={{ height: 24, width: 24, marginRight: 8 }}
            />
            <Line style={{ color: "#333333" }}>
              Artists, songs, or podcasts
            </Line>
          </Pressable>
        </View>
        <View style={{ width: "100%", marginBottom: 16 }}>
          <Line
            weight={"bold"}
            style={[{ fontSize: 16, marginTop: 16, marginBottom: 32 }]}
          >
            Your top genres
          </Line>
          <View style={{ width: "100%" }}>
            <View
              style={{
                marginTop: -16,
                marginLeft: -16,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {topGenres.map((topGenre, i) => (
                <GenreCard
                  key={i}
                  genre={topGenre.genre}
                  thumbnail={topGenre.thumbnail}
                  background={topGenre.background}
                />
              ))}
            </View>
          </View>
        </View>
        <View style={{ width: "100%", marginBottom: 16 }}>
          <Line
            weight={"bold"}
            style={[{ fontSize: 16, marginTop: 16, marginBottom: 32 }]}
          >
            Browse all
          </Line>
          <View style={{ width: "100%" }}>
            <View
              style={{
                marginTop: -16,
                marginLeft: -16,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {allGenres.map((allGenre, i) => (
                <GenreCard
                  key={i}
                  genre={allGenre.genre}
                  thumbnail={allGenre.thumbnail}
                  background={allGenre.background}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
});
