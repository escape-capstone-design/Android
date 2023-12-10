import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import CollapsibleComponent from "../components/Collapsible";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Loading from "../components/Loading";

const ResultScreen = ({ navigation }: any) => {
  const route = useRoute();
  const { questionjson, answerjson, studentjson, resultjson, scorejson }: any =
    route.params;
  const question = questionjson.question;
  const answer = answerjson.answer;
  const student = studentjson.student;
  const result = resultjson.result;
  const score = scorejson.score > 0 ? scorejson.score : 0;
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleButtonPress = () => {
    navigation.navigate("StudentScreen", {
      questionjson: { question },
      answerjson: { answer },
    });
  };

  const postFeedback = () => {
    setLoading(true);
    return axios
      .post(
        "http://10.0.2.2:8000/feedback",
        JSON.stringify({
          question: question,
          answer: answer,
          student_answer: student,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        if (response.status >= 200 && response.status <= 204) {
          setFeedback(response.data.feedback);
          console.log(feedback);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    postFeedback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    // 대기 중
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <CollapsibleComponent
              question={question}
              answer={answer}
              student={student}
            />
          </View>
          <Text style={styles.title}>{"1. 채점 결과"}</Text>
          <Text style={styles.text}>{result}</Text>
          <Text style={styles.title}>{"2. 점수"}</Text>
          <Text style={styles.text}>{score + "점"}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>{"3. 피드백"}</Text>
            <TouchableOpacity style={styles.againButton}>
              <Text style={styles.againText}>⟳</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.LoadingBox}>
            <Loading ing={"피드백을 생성하고 있습니다."} />
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
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <CollapsibleComponent
              question={question}
              answer={answer}
              student={student}
            />
          </View>
          <Text style={styles.title}>{"1. 채점 결과"}</Text>
          <Text style={styles.text}>{result}</Text>
          <Text style={styles.title}>{"2. 점수"}</Text>
          <Text style={styles.text}>{score + "점"}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>{"3. 피드백"}</Text>
            <TouchableOpacity onPress={postFeedback} style={styles.againButton}>
              <Text style={styles.againText}>⟳</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>{feedback}</Text>
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
        </ScrollView>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },
  text: {
    fontSize: 17,
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
  LoadingBox: {
    backgroundColor: "#F6F6F6",
    marginTop: 10,
    marginBottom: 50,
    padding: 10,
    borderRadius: 10,
    height: 200,
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
