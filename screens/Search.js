import React from "react";
import { StyleSheet, View, ScrollView, TextInput, Image } from "react-native";
import Constants from "expo-constants";
import Line from "../components/Line";
import GlobalStyles from "../globalStyle";

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
        <View style={{ width: "100%" }}>
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
                    backgroundColor: "#85a5ba",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Line weight={"bold"} style={{ fontSize: 16 }}>
                    Lo-Fi
                  </Line>
                  <Image
                    source={require("../img/220x220/playlist-thumbnail-lofi_beats-220x220.png")}
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
                    backgroundColor: "#d64b37",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Line weight={"bold"} style={{ fontSize: 16 }}>
                    Rock
                  </Line>
                  <Image
                    source={require("../img/220x220/playlist-thumbnail-rock_classic-220x220.png")}
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
                    backgroundColor: "#01327a",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Line weight={"bold"} style={{ fontSize: 16 }}>
                    Chill
                  </Line>
                  <Image
                    source={require("../img/220x220/playlist-thumbnail-spotyfy_chill-220x220.png")}
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
                    backgroundColor: "#d0bb4d",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Line weight={"bold"} style={{ fontSize: 16 }}>
                    Indie
                  </Line>
                  <Image
                    source={require("../img/220x220/playlist-thumbnail-indie_sunshine-220x220.png")}
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
