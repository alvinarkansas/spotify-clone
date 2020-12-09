import React from "react";
import { StyleSheet, View, ScrollView, TextInput, Image } from "react-native";
import Constants from "expo-constants";
import GlobalStyles from "../globalStyle";

import Line from "../components/Line";
import GenreCard from "../components/GenreCard";

import topGenres from "../data/top-genres.json";
import allGenres from '../data/all-genres.json'

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
            paddingBottom: 24,
          }}
        >
          <Line
            weight={"bold"}
            style={[GlobalStyles.textTitle, { marginBottom: 16 }]}
          >
            Search
          </Line>
          <TextInput
            style={{ height: 42, backgroundColor: "#fff", borderRadius: 8 }}
          ></TextInput>
        </View>
        <View style={{ width: "100%", marginBottom: 24 }}>
          <Line weight={"bold"} style={[{ fontSize: 16, marginBottom: 32 }]}>
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
        <View style={{ width: "100%", marginBottom: 24 }}>
          <Line weight={"bold"} style={[{ fontSize: 16, marginBottom: 32 }]}>
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
