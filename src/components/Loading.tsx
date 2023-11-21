import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#99CCFF" />
      <Text style={styles.text}>{"피드백을 생성하고 있습니다."}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    paddingTop: 15,
  },
});

export default Loading;
