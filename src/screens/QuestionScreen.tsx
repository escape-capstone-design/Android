import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const QuestionScreen = ({ navigation }: any) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const onChangeQuestion = (inputText: any) => {
    setQuestion(inputText);
  };
  const onChangeAnswer = (inputText: any) => {
    setAnswer(inputText);
  };

  const handleButtonPress = () => {
    navigation.navigate("StudentScreen", {
      questionjson: { question },
      answerjson: { answer },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"1. 문제"}</Text>
      <TextInput
        onChangeText={onChangeQuestion}
        value={question}
        style={styles.input}
        multiline={true}
      />
      <Text style={styles.title}>{"2. 모범 답안"}</Text>
      <TextInput
        onChangeText={onChangeAnswer}
        value={answer}
        style={styles.input}
        multiline={true}
      />
      <View style={{ paddingTop: 30 }}>
        <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
          <Text style={styles.buttonText}>{"다음"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    padding: 16,
  },
  input: {
    height: 70,
    paddingHorizontal: 8,
    marginBottom: 30,
    flexShrink: 1,
    textAlignVertical: "top",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    paddingBottom: 15,
  },
  button: {
    backgroundColor: "#99CCFF",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c2c2c",
    textAlign: "center",
  },
});

export default QuestionScreen;
