import React, { useState } from "react";
import { Text, TextInput, View, Button, StyleSheet } from "react-native";

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
      <Text style={styles.title}>1. 문제</Text>
      <TextInput
        onChangeText={onChangeQuestion}
        value={question}
        style={styles.input}
      />
      <Text style={styles.title}>2. 모범 답안</Text>
      <TextInput
        onChangeText={onChangeAnswer}
        value={answer}
        style={styles.input}
      />
      <View style={styles.button}>
        <Button title="다음" onPress={handleButtonPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    paddingBottom: 10,
  },
  button: {
    paddingTop: 20,
  },
});

export default QuestionScreen;
