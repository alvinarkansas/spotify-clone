import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Constants from "expo-constants";
import Line from "../components/Line";

export default function Search() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          paddingTop: 16 + Constants.statusBarHeight,
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
            Search
          </Line>
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
    fontSize: 32,
    fontWeight: "bold",
  },
  horizontalPadding: {
    paddingLeft: 16,
    paddingRight: 8,
  },
});
