import React from "react";
import { StyleSheet, View, ScrollView, TextInput } from "react-native";
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
            backgroundColor: "steelblue",
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
                <View style={{ height: 64, backgroundColor: "gold" }}></View>
              </View>
              <View
                style={{
                  width: "50%",
                  paddingTop: 16,
                  paddingLeft: 16,
                }}
              >
                <View style={{ height: 64, backgroundColor: "hotpink" }}></View>
              </View>
              <View
                style={{
                  width: "50%",
                  paddingTop: 16,
                  paddingLeft: 16,
                }}
              >
                <View style={{ height: 64, backgroundColor: "maroon" }}></View>
              </View>
              <View
                style={{
                  width: "50%",
                  paddingTop: 16,
                  paddingLeft: 16,
                }}
              >
                <View
                  style={{ height: 64, backgroundColor: "seagreen" }}
                ></View>
              </View>
              <View
                style={{
                  width: "50%",
                  paddingTop: 16,
                  paddingLeft: 16,
                }}
              >
                <View style={{ height: 64, backgroundColor: "gold" }}></View>
              </View>
              <View
                style={{
                  width: "50%",
                  paddingTop: 16,
                  paddingLeft: 16,
                }}
              >
                <View style={{ height: 64, backgroundColor: "hotpink" }}></View>
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
