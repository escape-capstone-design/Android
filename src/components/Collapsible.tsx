import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";

const CollapsibleComponent = ({ question, answer, student }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={{ paddingTop: 10, marginBottom: 20 }}>
      <TouchableOpacity onPress={toggleCollapse}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
            color: "#000",
          }}
        >
          {isCollapsed ? "▸  나의 답안 다시보기" : "▾  나의 답안 접기"}
        </Text>
      </TouchableOpacity>

      <Collapsible collapsed={isCollapsed}>
        <View style={styles.textBox}>
          <Text style={styles.title}>{"문제"}</Text>
          <Text style={styles.text}>{question}</Text>
          <Text style={styles.title}>{"모범 답안"}</Text>
          <Text style={styles.text}>{answer}</Text>
          <Text style={styles.title}>{"내 답안"}</Text>
          <Text style={styles.text}>{student}</Text>
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    backgroundColor: "#F6F6F6",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 17,
    paddingBottom: 10,
    fontWeight: "bold",
    color: "#000",
  },
  text: {
    fontSize: 15,
    paddingBottom: 30,
    color: "#000",
  },
});

export default CollapsibleComponent;
