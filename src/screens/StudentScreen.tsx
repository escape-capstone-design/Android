import React, { useState } from "react";
import { Text, TextInput, View, Button, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const StudentScreen = ({ navigation }: any) => {
  const [student, setStudent] = useState("");
  const onChangeStudent = (inputText: any) => {
    setStudent(inputText);
  };

  const route = useRoute();
  const { questionjson, answerjson }: any = route.params;
  const question = questionjson.question;
  const answer = answerjson.answer;
  console.log(answer);

  const handleButtonPress = () => {
    navigation.navigate("ResultScreen", {
      questionjson: { question },
      answerjson: { answer },
      studentjson: { student },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questiontitle}>{"문제"}</Text>
      <Text style={styles.question}>{question}</Text>
      <Text style={styles.title}>3. 내 답안을 입력해주세요!</Text>
      <TextInput
        onChangeText={onChangeStudent}
        value={student}
        style={styles.input}
      />
      <View style={styles.button}>
        <Button title="채점하기" onPress={handleButtonPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  questiontitle: {
    fontSize: 20,
    paddingBottom: 10,
  },
  question: {
    fontSize: 15,
    paddingBottom: 30,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 20,
    paddingBottom: 10,
  },
  button: {
    paddingTop: 30,
  },
});

export default StudentScreen;
