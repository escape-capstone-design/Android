import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#99CCFF" />
      <Text style={styles.text}>{"채점 중입니다."}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 20,
    paddingTop: 15,
  },
});

export default LoadingScreen;
