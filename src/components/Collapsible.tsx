import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";

const CollapsibleComponent = ({ question, answer, student }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={{ paddingTop: 20, marginBottom: 30 }}>
      <TouchableOpacity onPress={toggleCollapse}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          {isCollapsed ? "내 답안 다시보기" : "내 답안 접기"}
        </Text>
      </TouchableOpacity>

      <Collapsible collapsed={isCollapsed}>
        <View style={{ marginTop: 10 }}>
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
  title: {
    fontSize: 20,
    paddingBottom: 10,
  },
  text: {
    fontSize: 15,
    paddingBottom: 30,
  },
});

export default CollapsibleComponent;
