import React, { useState } from "react";
import axios from "axios";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Loading from "../components/Loading";

const StudentScreen = ({ navigation }: any) => {
  const [student, setStudent] = useState("");
  const onChangeStudent = (inputText: any) => {
    setStudent(inputText);
  };

  const route = useRoute();
  const { questionjson, answerjson }: any = route.params;
  const question = questionjson.question;
  const answer = answerjson.answer;
  const [loading, setLoading] = useState(false);
  let result = "";

  const postGrade = () => {
    setLoading(true);
    return axios
      .post(
        "http://10.0.2.2:8000/grade",
        JSON.stringify({
          answer: answer,
          student_answer: student,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        if (response.status >= 200 && response.status <= 204) {
          result = response.data;
          console.log(result);
          setLoading(false);

          navigation.navigate("ResultScreen", {
            questionjson: { question },
            answerjson: { answer },
            studentjson: { student },
            resultjson: { result },
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    // 대기 중
    return (
      <View style={styles.container}>
        <Loading ing={"채점 중입니다."} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.textBox}>
          <Text style={styles.questiontitle}>{"Q. 문제"}</Text>
          <Text style={styles.question}>{question}</Text>
        </View>
        <Text style={styles.title}>{"3. 나의 답안을 입력해주세요!"}</Text>
        <TextInput
          onChangeText={onChangeStudent}
          value={student}
          style={styles.input}
          multiline={true}
        />
        <View style={{ paddingTop: 20 }}>
          <TouchableOpacity onPress={postGrade} style={styles.button}>
            <Text style={styles.buttonText}>{"채점하기"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    padding: 16,
  },
  textBox: {
    backgroundColor: "#F6F6F6",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
  questiontitle: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    paddingBottom: 10,
  },
  question: {
    fontSize: 17,
    paddingBottom: 30,
  },
  input: {
    height: 70,
    paddingHorizontal: 8,
    marginBottom: 30,
    flexShrink: 1,
    textAlignVertical: "top",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    fontSize: 17,
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

export default StudentScreen;
