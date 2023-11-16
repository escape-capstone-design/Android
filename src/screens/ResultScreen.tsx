import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import CollapsibleComponent from "../components/Collapsible";
import { TouchableOpacity } from "react-native-gesture-handler";

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
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.title}>{"2. 피드백"}</Text>
        <TouchableOpacity style={styles.againButton}>
          <Text style={styles.againText}>⟳</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.text}>{"피드백"}</Text>
      </View>
      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{"다시 풀기"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("QuestionScreen")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{"처음으로 돌아가기"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    color: "#000",
    paddingBottom: 30,
  },
  textBox: {
    backgroundColor: "#F6F6F6",
    marginTop: 10,
    marginBottom: 50,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#99CCFF",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#2c2c2c",
    textAlign: "center",
  },
  againButton: {
    backgroundColor: "#99ccff91",
    borderRadius: 30,
    height: 28,
    width: 28,
    marginLeft: 10,
    marginTop: 2,
  },
  againText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
});

export default ResultScreen;
