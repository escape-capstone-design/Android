import React from "react";
import { Text, View, StyleSheet } from "react-native";

const IngScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{"채점중입니다."}</Text>
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
  },
});

export default IngScreen;
