import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function YourLibrary() {
  return (
    <View style={styles.container}>
      <Text>Your Library</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
});
