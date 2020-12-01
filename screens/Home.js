import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import ExtendedCard from "../components/ExtendedCard";
import Line from "../components/Line";
import Thumbnail from "../components/Thumbnail";

export default function Home() {
  const recommendations = [
    {
      thumbnail: require("../img/spotify_album_thumbnail_1.jpg"),
      title: "Lo-Fi Chill",
    },
    {
      thumbnail: require("../img/time-capsule-blue_LARGE-en.jpg"),
      title: "Time Capsule",
    },
    {
      thumbnail: require("../img/on_repeat.jpg"),
      title: "On Repeat",
    },
    {
      thumbnail: require("../img/220x220/album-thumbnail-tame_impala-1-220x220.png"),
      title: "Tame Impala",
    },
    {
      thumbnail: require("../img/220x220/album-thumbnail-honne-1-220x220.png"),
      title: "Honne",
    },
    {
      thumbnail: require("../img/220x220/album-thumbnail-danilla-1-220x220.png"),
      title: "Danilla",
    },
  ];
  const recents = [
    {
      thumbnail: require("../img/220x220/album-thumbnail-bruno_mars-1-220x220.png"),
      title: "Locked Out of Heaven",
    },
    {
      thumbnail: require("../img/220x220/album-thumbnail-doja_cat-1-220x220.png"),
      title: "Say So",
    },
    {
      thumbnail: require("../img/220x220/album-thumbnail-kodaline-1-220x220.png"),
      title: "High Hope",
    },
    {
      thumbnail: require("../img/220x220/album-thumbnail-kunto_aji-1-220x220.png"),
      title: "Pilu Membiru",
    },
    {
      thumbnail: require("../img/220x220/album-thumbnail-daniel_caesar-1-220x220.png"),
      title: "Best Part (feat. H.E.R.)",
    },
  ];
  const newReleases = [
    {
      thumbnail: require("../img/220x220/album-thumbnail-clean_bandit-1-220x220.png"),
      title: "Tears (feat. Louisa Johnson)",
    },
    {
      thumbnail: require("../img/220x220/album-thumbnail-daft_punk-1-220x220.png"),
      title: "Give Life Back to Music",
    },
    {
      thumbnail: require("../img/220x220/album-thumbnail-reality_club-1-220x220.png"),
      title: "Elastic Hearts",
    },
    {
      thumbnail: require("../img/220x220/album-thumbnail-john_mayer-1-220x220.png"),
      title: "Still Fell Like Your Man",
    },
    {
      thumbnail: require("../img/220x220/album-thumbnail-sal_priadi-1-220x220.png"),
      title: "Amin Paling Serius",
    },
  ];

  return (
    <View style={styles.container}>
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
        end={{ x: 0.25, y: 1 }}
      />
      <ScrollView
        style={{
          paddingTop: 16 + Constants.statusBarHeight,
          // paddingLeft: 16,
          // paddingRight: 8,
          flex: 1,
        }}
        contentContainerStyle={{
          paddingBottom: 32,
        }}
      >
        <View
          style={{
            paddingTop: 32,
          }}
        >
          <Line
            weight={"bold"}
            style={[
              styles.textWhite,
              styles.textTitle,
              styles.horizontalPadding,
              { marginBottom: 16 },
            ]}
          >
            Good evening
          </Line>
          <View
            style={[
              styles.horizontalPadding,
              {
                height: 224,
                width: "100%",
                marginTop: -8,
                marginLeft: -8,
                flexWrap: "wrap",
              },
            ]}
          >
            {recommendations.map((recommendation, i) => (
              <ExtendedCard
                key={i}
                title={recommendation.title}
                thumbnail={recommendation.thumbnail}
              />
            ))}
          </View>
        </View>

        <View
          style={{
            paddingTop: 4,
            paddingBottom: 4,
            marginBottom: 8,
          }}
        >
          <Line
            weight={"bold"}
            style={[
              styles.textWhite,
              styles.textTitle,
              styles.horizontalPadding,
              { marginBottom: 16 },
            ]}
          >
            Recently Played
          </Line>
          <ScrollView
            horizontal
            style={[
              styles.horizontalPadding,
              {
                marginTop: -16,
                marginLeft: -16,
              },
            ]}
            contentContainerStyle={{ paddingRight: 32, paddingBottom: 16 }}
          >
            {recents.map((recent, i) => (
              <Thumbnail key={i} info={recent} size={112} />
            ))}
          </ScrollView>
        </View>

        <View
          style={{
            paddingTop: 4,
            paddingBottom: 4,
            marginBottom: 8,
          }}
        >
          <Line
            weight={"bold"}
            style={[
              styles.textWhite,
              styles.textTitle,
              styles.horizontalPadding,
              { marginBottom: 16 },
            ]}
          >
            New Release
          </Line>
          <ScrollView
            horizontal
            style={[
              styles.horizontalPadding,
              {
                marginTop: -16,
                marginLeft: -16,
              },
            ]}
            contentContainerStyle={{ paddingRight: 32, paddingBottom: 16 }}
          >
            {newReleases.map((newRelease, i) => (
              <Thumbnail key={i} info={newRelease} size={144} />
            ))}
          </ScrollView>
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
  textWhite: {
    color: "#fff",
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  horizontalPadding: {
    paddingLeft: 16,
    paddingRight: 8,
  },
});
