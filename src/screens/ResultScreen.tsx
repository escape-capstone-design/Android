import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import CollapsibleComponent from "../components/Collapsible";

const ResultScreen = ({ navigation }: any) => {
  const route = useRoute();
  const { questionjson, answerjson, studentjson }: any = route.params;
  const question = questionjson.question;
  const answer = answerjson.answer;
  const student = studentjson.student;

  const handleButtonPress = () => {
    navigation.navigate("StudentScreen", {
      questionjson: { question },
      answerjson: { answer },
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <CollapsibleComponent
          question={question}
          answer={answer}
          student={student}
        />
      </View>
      <Text style={styles.title}>{"1. 채점 결과"}</Text>
      <Text style={styles.text}>{"정답!"}</Text>
      <Text style={styles.title}>{"2. 피드백"}</Text>
      <Text style={styles.text}>{"피드백"}</Text>
      <View style={styles.button}>
        <Button title="다시 풀기" onPress={handleButtonPress} />
      </View>
      <View style={styles.button}>
        <Button
          title="처음으로 돌아가기"
          onPress={() => navigation.navigate("QuestionScreen")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    paddingBottom: 10,
  },
  text: {
    fontSize: 15,
    paddingBottom: 30,
  },
  button: {
    paddingTop: 30,
  },
});

export default ResultScreen;
